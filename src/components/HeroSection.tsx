import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 text-center overflow-hidden">
      {/* Header with centered logo (ajusta tamaños aquí: w-[X] h-[Y]) */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center py-5 sm:py-6">
        <img
          src="/aura-logo.png"
          alt="AURA"
          className="w-30 h-30 sm:w-20 sm:h-20"
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

      {/* Video Placeholder */}
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
            src="https://www.youtube.com/embed/OWorFLIbRoo"
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
