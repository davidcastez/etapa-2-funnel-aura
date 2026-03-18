import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const problems = [
  "Falta de un sistema de diagnóstico real",
  "Medición basada en métricas de vanidad",
  "Ignorar el cuello de botella estructural",
];

const ProblemSection = () => (
  <section className="bg-surface-elevated py-16 sm:py-20 md:py-32 px-4 sm:px-6">
    <div className="max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block font-display text-primary font-bold mb-3 sm:mb-4 tracking-tighter text-lg sm:text-xl">
          01
        </span>
        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 sm:mb-8">
          La razón por la que tus ads no convierten (y no es el copy ni el
          creativo)
        </h2>
        <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <p>
            La mayoría de las agencias optimizan lo superficial: cambian una
            imagen, prueban un headline diferente o ajustan un interés en
            Facebook.
          </p>
          <p className="font-bold text-foreground">
            Eso es como cambiar las cortinas de una casa que tiene los cimientos
            rotos.
          </p>
          <ul className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
            {problems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertCircle className="text-primary shrink-0 mt-0.5 sm:mt-1 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
