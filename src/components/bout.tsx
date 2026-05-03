import { Code2, Database, Eye, GraduationCap, Rocket, Target } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const passions = [
  { icon: Code2, label: "Web Development", color: "text-neon-blue" },
  { icon: Database, label: "Database Systems", color: "text-neon-green" },
  { icon: Eye, label: "Computer Vision", color: "text-neon-purple" },
  { icon: Rocket, label: "Real-world Prototypes", color: "text-neon-pink" },
];

const About = () => {
  const ref = useReveal();
  return (
    <section id="about" className="relative py-28">
      <div className="container">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">About Me</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            A future-focused <span className="neon-text">developer</span> in the making
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground font-semibold">Computer Engineering student</span> at{" "}
              <span className="text-neon-blue">Marinduque State University</span>, set to graduate in
              <span className="text-neon-green"> 2027</span>. With a STEM background from senior high
              school, I've grown into a developer who loves turning ideas into working systems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My passion lives at the intersection of <span className="text-foreground">clean
              code</span>, <span className="text-foreground">solid databases</span>, and
              <span className="text-foreground"> emerging technologies</span> like computer vision.
              I believe the best software solves real problems — quietly, reliably, beautifully.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: GraduationCap, label: "Marinduque State University" },
                { icon: Target, label: "Goal: Software Developer" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 backdrop-blur">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated visual grid */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {passions.map((p, i) => (
                <div
                  key={p.label}
                  className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-neon-blue/60"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon-blue/5 transition-all duration-500 group-hover:bg-neon-blue/20 group-hover:scale-150" />
                  <p.icon className={`relative h-8 w-8 ${p.color}`} />
                  <p className="relative mt-4 font-display text-lg font-semibold">{p.label}</p>
                  <p className="relative mt-1 font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

