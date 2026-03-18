import { motion } from "framer-motion";

const consequences = [
  "Sigues pagando por clicks que nunca van a convertir",
  "Tu competencia que sí lo entiende te come el mercado",
  "Tomas decisiones a ciegas basadas en métricas vacías",
  "Terminas culpando a la plataforma cuando el problema es el proceso",
];

const ConsequencesSection = () => (
  <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
    <div className="max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block font-display text-primary font-bold mb-3 sm:mb-4 tracking-tighter text-lg sm:text-xl">
          02
        </span>
        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8 sm:mb-12">
          Cada semana que pasa, el problema se multiplica
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {consequences.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-surface-elevated glow-border glow-border-hover transition-colors duration-300"
          >
            <p className="text-sm sm:text-base text-muted-foreground leading-snug">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ConsequencesSection;
