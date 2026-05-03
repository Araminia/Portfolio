import { useState } from "react";
import { ExternalLink, X, Code, Cpu } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  short: string;
  description: string;
  tech: string[];
  role: string;
  features: string[];
  accent: string;
  icon: typeof Code;
};

const projects: Project[] = [
  {
    id: "ompsa",
    title: "OMPSA Website",
    subtitle: "School Management System",
    short: "Web-based school platform handling enrollment, grades, and multi-role data management.",
    description:
      "OMPSA is a full-stack web system designed to handle the day-to-day operations of a school. It supports multiple user roles — students, teachers, administrators, and registrars — each with tailored dashboards and permissions.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    role: "Developer / Contributor",
    features: [
      "Role-based access for Students, Teachers, Admin & Registrar",
      "Online enrollment workflow",
      "Grades & academic record management",
      "Centralized MySQL data layer",
    ],
    accent: "var(--neon-blue)",
    icon: Code,
  },
  {
    id: "poultrix",
    title: "POULTRIX",
    subtitle: "Automated Broiler Management Prototype",
    short:
      "Computer-vision powered system for stage-based feeding with temperature & light control.",
    description:
      "POULTRIX is a thesis prototype that integrates computer vision with environmental controls to monitor broiler chickens, automate stage-based feeding, and regulate temperature and light for optimal growth.",
    tech: ["Python", "OpenCV", "YOLOv8", "IoT"],
    role: "System Developer / Research Developer",
    features: [
      "YOLOv8 detection for growth-stage classification",
      "Automated stage-based feeding logic",
      "Temperature & lighting control loop",
      "Real-time monitoring dashboard",
    ],
    accent: "var(--neon-purple)",
    icon: Cpu,
  },
];

const Projects = () => {
  const [open, setOpen] = useState<Project | null>(null);
  const ref = useReveal();

  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">Selected Work</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real systems built to solve real problems — from classrooms to chicken coops.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-neon-blue/60 hover:shadow-[0_20px_60px_-15px_hsl(var(--neon-blue)/0.4)]"
            >
              {/* Glow corner */}
              <div
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"
                style={{ background: `hsl(${p.accent} / 0.25)` }}
              />

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                  style={{
                    borderColor: `hsl(${p.accent} / 0.4)`,
                    background: `hsl(${p.accent} / 0.1)`,
                    color: `hsl(${p.accent})`,
                    boxShadow: `0 0 20px hsl(${p.accent} / 0.3)`,
                  }}
                >
                  <p.icon className="h-7 w-7" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1} / 02</span>
              </div>

              <div className="relative mt-6">
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: `hsl(${p.accent})` }}>{p.subtitle}</p>
                <h3 className="mt-2 font-display text-3xl font-bold">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.short}</p>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-8 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Role · {p.role}</span>
                <button
                  onClick={() => setOpen(p)}
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-${p.accent} transition-all hover:gap-3`}
                >
                  View More <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-neon-blue/40 bg-card p-8 shadow-[0_0_60px_hsl(var(--neon-blue)/0.4)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-neon-blue hover:text-neon-blue"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: `hsl(${open.accent})` }}>{open.subtitle}</p>
            <h3 className="mt-2 font-display text-3xl font-bold">{open.title}</h3>
            <p className="mt-4 text-muted-foreground">{open.description}</p>

            <h4 className="mt-6 mb-3 font-mono text-sm uppercase tracking-wider text-neon-green">Key Features</h4>
            <ul className="space-y-2">
              {open.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: `hsl(${open.accent})`, boxShadow: `0 0 8px hsl(${open.accent})` }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 mb-3 font-mono text-sm uppercase tracking-wider text-neon-green">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {open.tech.map((t) => (
                <span key={t} className="skill-chip">{t}</span>
              ))}
            </div>

            <p className="mt-6 text-sm">
              <span className="text-muted-foreground">Role · </span>
              <span className="font-semibold text-foreground">{open.role}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
