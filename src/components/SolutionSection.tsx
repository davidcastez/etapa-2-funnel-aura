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
  <section className="bg-surface-elevated py-20 md:py-32 px-6">
    <div className="max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block font-display text-primary font-bold mb-4 tracking-tighter text-xl">
          03
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12">
          Hay un camino más simple
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Old way */}
        <div className="space-y-6 opacity-40">
          <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground">
            Lo que hacen todos
          </h4>
          <ul className="space-y-4 text-sm">
            {oldWay.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
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
          className="space-y-6 p-8 rounded-4xl bg-gradient-to-br from-[hsl(267_40%_10%)] to-background glow-border card-glow"
        >
          <h4 className="font-display text-sm uppercase tracking-widest text-primary">
            Lo que realmente funciona
          </h4>
          <ul className="space-y-4">
            {newWay.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={18} />
                <span className="font-bold">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
