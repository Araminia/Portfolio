import { ArrowRight, Mail, Sparkles } from "lucide-react";
import portrait from "../assets/carmina-portrait.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="absolute inset-0 -z-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-7 animate-fade-up">
          <span className="section-label">
            <Sparkles className="h-3 w-3" /> Portfolio · 2026
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="neon-text">Carmina</span>
            <br />
            <span className="text-foreground/90">M. Rosas.</span>
          </h1>

          <p className="font-mono text-sm uppercase tracking-[0.3em] text-neon-green">
            Computer Engineering Student · Aspiring Software Developer
          </p>

          <p className="max-w-xl text-lg text-muted-foreground">
            Building modern web systems and intelligent prototypes with passion and precision —
            from full-stack platforms to computer-vision powered automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-neon">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-neon btn-neon-purple">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="flex gap-8 pt-6">
            {[
              { n: "2027", l: "Expected Grad" },
              { n: "2", l: "Major Projects" },
              { n: "5+", l: "Technologies" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold neon-text">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative float">
            {/* Outer rotating ring */}
            <div className="absolute -inset-6 rounded-full border border-neon-blue/30 animate-spin-slow" />
            <div className="absolute -inset-12 rounded-full border border-neon-purple/20 animate-spin-slow [animation-direction:reverse]" />

            {/* Glow halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue/30 via-neon-purple/30 to-neon-green/30 blur-3xl" />

            {/* Picture frame (hexagonal corners simulated with clip + neon border) */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-neon-blue glow-pulse sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={portrait}
                alt="Carmina M. Rosas portrait"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating tags */}
            <div className="absolute -left-4 top-10 glass rounded-xl px-3 py-2 text-xs font-mono text-neon-green shadow-[0_0_20px_hsl(var(--neon-green)/0.3)] float [animation-delay:1s]">
              {"</> Front-end"}
            </div>
            <div className="absolute -right-2 bottom-16 glass rounded-xl px-3 py-2 text-xs font-mono text-neon-purple shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)] float [animation-delay:2s]">
              {"⚡ Computer Vision"}
            </div>
            <div className="absolute -right-6 top-24 glass rounded-xl px-3 py-2 text-xs font-mono text-neon-blue shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)] float [animation-delay:0.5s]">
              {"DB · MySQL"}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-neon-blue transition-colors"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-neon-blue to-transparent" />
      </a>
    </section>
  );
};

export default Hero;
