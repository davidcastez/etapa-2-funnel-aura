import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Mail, CheckCircle2 } from "lucide-react";

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
    <section className="py-20 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-pill gradient-cta font-display text-xs font-bold tracking-widest uppercase mb-6 text-primary-foreground">
            Recurso Gratuito
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide mb-6 leading-tight">
            Descubre dónde está el cuello de botella de tus campañas en 12
            minutos
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Mira el video completo y descarga gratis la calculadora de
            diagnóstico que usamos con nuestros clientes.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <div
          id="lead-video"
          className="relative aspect-video w-full bg-muted rounded-3xl glow-border overflow-hidden group mb-12 card-glow cursor-pointer"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" size={32} className="ml-1 text-primary-foreground" />
            </div>
            <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
              Video Coming Soon
            </span>
          </div>
        </div>

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
                <div className="bg-surface-elevated p-8 md:p-12 rounded-4xl border border-primary/30 shadow-[var(--shadow-glow)]">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">
                        Descarga la calculadora de cuellos de botella
                      </h3>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                          size={20}
                        />
                        <input
                          type="email"
                          required
                          placeholder="Tu mejor email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background border border-foreground/10 rounded-pill py-4 pl-12 pr-6 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-5 rounded-pill gradient-cta gradient-cta-hover text-primary-foreground font-display font-bold text-base sm:text-lg tracking-widest uppercase transition-all active:scale-[0.98]"
                      >
                        Quiero mi calculadora gratis
                      </button>
                      <p className="text-xs text-muted-foreground">
                        Sin spam. Te puedes dar de baja cuando quieras.
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-8 space-y-4"
                    >
                      <CheckCircle2 className="mx-auto text-primary" size={48} />
                      <h3 className="font-display text-2xl font-bold uppercase">
                        ¡Revisa tu bandeja de entrada!
                      </h3>
                      <p className="text-muted-foreground">
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
