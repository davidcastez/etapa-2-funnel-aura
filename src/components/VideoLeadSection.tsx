import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// === CONFIGURACIÓN DEL DELAY ===
// Cambiar este valor para ajustar cuándo aparece el survey (en segundos)
// Idealmente debe coincidir con la duración del video
const FORM_DELAY_SECONDS = 60; // 1 minuto

const VideoLeadSection = () => {
  const [showForm, setShowForm] = useState(false);
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

  // Load GHL form embed script once the survey appears
  useEffect(() => {
    if (!showForm) return;
    if (document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    document.body.appendChild(script);
  }, [showForm]);

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

        {/* Delayed GHL Survey */}
        <div ref={formRef}>
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
      </div>
    </section>
  );
};

export default VideoLeadSection;
