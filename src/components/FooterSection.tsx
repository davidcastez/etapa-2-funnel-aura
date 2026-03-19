const FooterSection = () => (
  <footer className="bg-muted py-8 sm:py-12 px-4 sm:px-6 border-t border-foreground/5">
    <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
      <div className="flex items-center gap-3">
        <img
          src="/aura-logo.png"
          alt="AURA"
          className="w-12 h-12 sm:w-15 sm:h-15"
        />
        <span>© {new Date().getFullYear()} Aura Growth. Todos los derechos reservados.</span>
      </div>
      <a
        href="#"
        className="hover:text-foreground transition-colors underline underline-offset-4 decoration-primary/40"
      >
        Política de Privacidad
      </a>
    </div>
  </footer>
);

export default FooterSection;
