import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FORM_DELAY_SECONDS = 60;

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const allowedTimeRef = useRef(0);

  // Form delay timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }, FORM_DELAY_SECONDS * 1000);
    return () => clearTimeout(timer);
  }, []);

  // Load GHL form embed script
  useEffect(() => {
    if (!showForm) return;
    if (document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    document.body.appendChild(script);
  }, [showForm]);

  // YouTube IFrame API - prevent seeking
  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player-etapa2", {
        events: {
          onStateChange: (event: any) => {
            if (event.data === 1) {
              const interval = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                  const current = playerRef.current.getCurrentTime();
                  if (current > allowedTimeRef.current) {
                    allowedTimeRef.current = current;
                  }
                  if (current > allowedTimeRef.current + 2) {
                    playerRef.current.seekTo(allowedTimeRef.current, true);
                  }
                }
              }, 1000);
              (playerRef.current as any)._seekInterval = interval;
            } else {
              if ((playerRef.current as any)?._seekInterval) {
                clearInterval((playerRef.current as any)._seekInterval);
              }
            }
          },
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      (window as any).onYouTubeIframeAPIReady();
    }
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 text-center overflow-hidden">
      {/* Header with centered logo */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center py-5 sm:py-6">
        <img
          src="/aura-logo.png"
          alt="AURA"
          className="w-10 h-10 sm:w-14 sm:h-14"
        />
      </header>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative max-w-3xl font-display text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-[0.02em] leading-[1.15] text-balance mt-14 sm:mt-16 mb-6 sm:mb-8 text-foreground"
      >
        Escala tu negocio captando{" "}
        <span className="text-primary">leads más calificados</span>{" "}
        que paguen más y sin importar la plataforma que uses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative max-w-2xl text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-12"
      >
        Aprende a usar este nuevo metodo que te permitira vender usando cualquier plataforma y deseches las estrategias antiguas que te estan trayendo leads poco calificados
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2 text-primary"
      >
        <span className="font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
          Descubre por que
        </span>
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>

      {/* YouTube Video Embed - No seeking allowed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative w-full max-w-[800px] mt-8 sm:mt-12"
      >
        <div
          id="lead-video"
          className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_-5px_rgba(111,0,255,0.3)]"
        >
          <iframe
            id="yt-player-etapa2"
            src="https://www.youtube.com/embed/OWorFLIbRoo?enablejsapi=1&rel=0&modestbranding=1&disablekb=1"
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </motion.div>

      {/* GHL Survey with 60s delay */}
      <div ref={formRef} className="w-full max-w-[800px] mt-8 sm:mt-12">
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 40, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/ONISXPtG8sQ4jDL2wWJ4"
                style={{ border: "none", width: "100%", minHeight: "600px" }}
                scrolling="no"
                id="ONISXPtG8sQ4jDL2wWJ4"
                title="survey"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
