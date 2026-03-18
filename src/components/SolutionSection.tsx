import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const oldWay = [
  "Cambiar creativos cada semana",
  "Aumentar presupuesto a ciegas",
  "Copiar lo que hace la competencia",
  "Probar 20 audiencias sin sistema",
];

const newWay = [
  "Diagnosticar antes de cambiar nada",
  "Identificar el cuello de botella exacto",
  "Arreglar UNA cosa a la vez con datos",
  "Escalar solo lo que ya está probado",
];

const SolutionSection = () => (
  <section className="bg-surface-elevated py-16 sm:py-20 md:py-32 px-4 sm:px-6">
    <div className="max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block font-display text-primary font-bold mb-3 sm:mb-4 tracking-tighter text-lg sm:text-xl">
          03
        </span>
        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8 sm:mb-12">
          Hay un camino más simple
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Old way */}
        <div className="space-y-4 sm:space-y-6 opacity-40">
          <h4 className="font-display text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
            Lo que hacen todos
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-sm">
            {oldWay.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* New way */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-3xl sm:rounded-4xl bg-gradient-to-br from-[hsl(267_40%_10%)] to-background glow-border card-glow"
        >
          <h4 className="font-display text-xs sm:text-sm uppercase tracking-widest text-primary">
            Lo que realmente funciona
          </h4>
          <ul className="space-y-3 sm:space-y-4">
            {newWay.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="font-bold text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
