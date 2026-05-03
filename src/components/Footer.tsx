const Footer = () => (
  <footer className="relative border-t border-border py-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <p>
        © {new Date().getFullYear()} <span className="neon-text font-semibold">Carmina M. Rosas</span>. Crafted with passion & precision.
      </p>
      <p className="font-mono text-xs">
        <span className="text-neon-green">●</span> Available for opportunities
      </p>
    </div>
  </footer>
);

export default Footer;