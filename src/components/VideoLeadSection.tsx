import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

// === CONFIGURACIÓN DEL DELAY ===
// Cambiar este valor para ajustar cuándo aparece el formulario (en segundos)
// Idealmente debe coincidir con la duración del video
const FORM_DELAY_SECONDS = 300; // 5 minutos por defecto

const VideoLeadSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }, FORM_DELAY_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-pill gradient-cta font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 text-primary-foreground">
            Recurso Gratuito
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4 sm:mb-6 leading-tight">
            Descubre dónde está el cuello de botella de tus campañas en 12
            minutos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12">
            Mira el video completo y descarga gratis la calculadora de
            diagnóstico que usamos con nuestros clientes.
          </p>
        </motion.div>

        {/* Delayed Lead Form */}
        <div ref={formRef}>
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 40, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-surface-elevated p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-4xl border border-primary/30 shadow-[var(--shadow-glow)]">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <h3 className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight">
                        Descarga la calculadora de cuellos de botella
                      </h3>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Tu mejor email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background border border-foreground/10 rounded-pill py-3 sm:py-4 pl-10 sm:pl-12 pr-4 sm:pr-6 text-sm sm:text-base focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 sm:py-5 rounded-pill gradient-cta gradient-cta-hover text-primary-foreground font-display font-bold text-sm sm:text-lg tracking-widest uppercase transition-all active:scale-[0.98]"
                      >
                        Quiero mi calculadora gratis
                      </button>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">
                        Sin spam. Te puedes dar de baja cuando quieras.
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-6 sm:py-8 space-y-3 sm:space-y-4"
                    >
                      <CheckCircle2 className="mx-auto text-primary w-10 h-10 sm:w-12 sm:h-12" />
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase">
                        ¡Revisa tu bandeja de entrada!
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Tu calculadora está en camino. Si no llega en 2 minutos,
                        revisa Spam.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VideoLeadSection;
