const FooterSection = () => (
  <footer className="bg-[hsl(0_0%_2%)] py-12 px-6 border-t border-foreground/5">
    <div className="max-w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
      <span>© {new Date().getFullYear()} Agencia Digital. Todos los derechos reservados.</span>
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
