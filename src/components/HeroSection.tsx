import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(267_100%_50%_/_0.08),transparent_50%)]" />

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative max-w-4xl font-display text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-[0.05em] leading-[1.1] text-balance mb-8"
    >
      Tus campañas están{" "}
      <span className="gradient-text-highlight">quemando presupuesto</span>{" "}
      mientras lees esto
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
    >
      El 73% de las agencias y negocios pierden más de la mitad de su inversión
      en ads por un error que se corrige en minutos.
    </motion.p>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="flex flex-col items-center gap-2 text-primary"
    >
      <span className="font-display text-sm font-semibold tracking-widest uppercase">
        Descubre por qué
      </span>
      <ChevronDown size={24} />
    </motion.div>
  </section>
);

export default HeroSection;
