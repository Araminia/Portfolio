import { Brain, Code2, Layers } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const services = [
  { icon: Code2, title: "Web Development", desc: "Modern, responsive websites built with clean front-end and reliable back-end foundations.", color: "var(--neon-blue)" },
  { icon: Layers, title: "System Development", desc: "Multi-role platforms with database-driven workflows tailored to real organizational needs.", color: "var(--neon-green)" },
  { icon: Brain, title: "AI / Computer Vision", desc: "Intelligent prototypes using OpenCV and YOLOv8 for detection, monitoring & automation.", color: "var(--neon-purple)" },
];

const Services = () => {
  const ref = useReveal();
  return (
    <section id="services" className="relative py-28">
      <div className="container">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">What's Next</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Services <span className="neon-text">Coming Soon</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            I'm sharpening my craft now — here's what I'll be offering soon.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-neon-blue/60"
            >
              {/* Locked badge */}
              <span className="absolute right-4 top-4 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neon-purple">
                Soon
              </span>

              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-all group-hover:scale-110 group-hover:rotate-6"
                style={{
                  borderColor: `hsl(${s.color} / 0.4)`,
                  background: `hsl(${s.color} / 0.1)`,
                  color: `hsl(${s.color})`,
                }}
              >
                <s.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              <p className="mt-6 font-mono text-xs text-muted-foreground">0{i + 1}/03</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;