import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      sections.forEach((s, i) => {
        if (s instanceof HTMLElement && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(links[i].href.slice(1));
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`container flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-[0_8px_32px_hsl(var(--neon-blue)/0.15)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon-blue/60 bg-neon-blue/10 text-neon-blue shadow-[0_0_15px_hsl(var(--neon-blue)/0.4)]">
            CR
          </span>
          <span className="hidden sm:inline neon-text">Carmina</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href.slice(1)
                    ? "text-neon-blue"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-neon-blue shadow-[0_0_8px_hsl(var(--neon-blue))]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-neon !py-2 !px-4 text-sm">
          Hire Me
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-neon-blue/30 md:hidden"
        >
          <span className={`h-0.5 w-5 bg-neon-blue transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-neon-blue transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-neon-blue transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="container mt-2 md:hidden">
          <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-neon-blue/10 hover:text-neon-blue"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;


