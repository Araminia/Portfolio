import { useState } from "react";
import { Mail, MapPin, Send, User } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "../hooks/use-reveal";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const ref = useReveal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `mailto:rosascarmina11@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success("Opening your email client…");
      setSending(false);
    }, 600);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "rosascarmina11@gmail.com",
      href: "mailto:rosascarmina11@gmail.com",
    },
    {
      icon: User,
      label: "Name",
      value: "Carmina M. Rosas",
    },
    {
      icon: MapPin,
      label: "Based In",
      value: "Marinduque, Philippines",
    },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <span className="section-label">Get In Touch</span>

          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Let's <span className="neon-text">build something</span> together
          </h2>

          <p className="mt-4 text-muted-foreground">
            Have a project, opportunity, or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const CardContent = (
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-neon-blue/60 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.2)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue transition-all group-hover:bg-neon-blue group-hover:text-background group-hover:shadow-[0_0_20px_hsl(var(--neon-blue))]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={item.label}>{CardContent}</div>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Jane Doe"
                  className="neon-input"
                />
              </Field>

              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="jane@example.com"
                  className="neon-input"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your idea…"
                  className="neon-input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-neon mt-6 flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              {sending ? "Sending…" : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .neon-input {
          width: 100%;
          background: hsl(var(--input) / 0.6);
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          color: hsl(var(--foreground));
          transition: all 0.3s ease;
          outline: none;
        }

        .neon-input::placeholder {
          color: hsl(var(--muted-foreground));
        }

        .neon-input:focus {
          border-color: hsl(var(--neon-blue));
          box-shadow:
            0 0 0 3px hsl(var(--neon-blue) / 0.15),
            0 0 25px hsl(var(--neon-blue) / 0.3);
          background: hsl(var(--input));
        }
      `}</style>
    </section>
  );
};

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
    {children}
  </label>
);

export default Contact;
