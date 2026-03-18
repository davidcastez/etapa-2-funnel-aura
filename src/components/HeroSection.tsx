import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(267_100%_50%_/_0.08),transparent_50%)]" />

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
        className="relative max-w-4xl font-display text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-[0.05em] leading-[1.1] text-balance mt-14 sm:mt-16 mb-6 sm:mb-8 text-white"
      >
        Comienza a{" "}
        calificar hoy mismo tus leads{" "}
        aplicando estos 3 simples pasos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative max-w-2xl text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-12"
      >
        Descubre porque tus leads no llegan calificados y como solucionarlo para siempre
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
          className="relative aspect-video w-full bg-muted rounded-2xl sm:rounded-3xl glow-border overflow-hidden group card-glow cursor-pointer"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" className="ml-0.5 sm:ml-1 w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <span className="font-display text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              Video Coming Soon
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
