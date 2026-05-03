import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/use-reveal";

const techs = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Git & GitHub", level: 78 },
  { name: "VS Code", level: 95 },
];

const upcoming = ["Python", "OpenCV", "YOLOv8"];

const core = [
  { name: "Front-end Development", color: "from-neon-blue to-neon-green" },
  { name: "Back-end Development", color: "from-neon-purple to-neon-pink" },
  { name: "Database Management", color: "from-neon-green to-neon-blue" },
  { name: "Computer Vision Basics", color: "from-neon-pink to-neon-purple" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setWidth(level);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-neon-blue">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple shadow-[0_0_10px_hsl(var(--neon-blue))] transition-all duration-1500 ease-out"
          style={{ width: `${width}%`, transitionDuration: "1.5s" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useReveal();
  return (
    <section id="skills" className="relative py-28">
      <div className="container">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">Toolbox</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Skills & <span className="neon-text">Stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The technologies I use today, and what I'm leveling up next.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Tech progress */}
          <div className="glass rounded-2xl p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">
              <span className="text-neon-blue">{"// "}</span>Technologies
            </h3>
            <div className="space-y-5">
              {techs.map((t) => <SkillBar key={t.name} {...t} />)}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Coming Up</p>
              <div className="flex flex-wrap gap-2">
                {upcoming.map((u) => (
                  <span key={u} className="skill-chip border-neon-purple/40 text-neon-purple">
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core skills */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold">
              <span className="text-neon-green">{"// "}</span>Core Strengths
            </h3>
            {core.map((c, i) => (
              <div
                key={c.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-neon-blue/60 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.2)]"
              >
                <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${c.color}`} />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                    <p className="mt-1 font-display text-lg font-semibold">{c.name}</p>
                  </div>
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${c.color} opacity-80 transition-transform group-hover:scale-110 group-hover:rotate-12`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;