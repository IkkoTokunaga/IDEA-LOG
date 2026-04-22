import { ExternalLink, Github, Target, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/constants/projects";

const accentClasses: Record<
  Project["accent"],
  { border: string; shadow: string; text: string; dot: string; badge: string }
> = {
  cyan: {
    border: "hover:border-sky-400/80",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(14,165,233,0.18),0_24px_40px_-24px_rgba(14,165,233,0.45)]",
    text: "group-hover:text-sky-700",
    dot: "bg-sky-500",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
  },
  emerald: {
    border: "hover:border-teal-400/80",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(20,184,166,0.18),0_24px_40px_-24px_rgba(20,184,166,0.4)]",
    text: "group-hover:text-teal-700",
    dot: "bg-teal-500",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
  },
  amber: {
    border: "hover:border-amber-400/80",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(217,119,6,0.15),0_24px_40px_-24px_rgba(217,119,6,0.35)]",
    text: "group-hover:text-amber-700",
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  violet: {
    border: "hover:border-indigo-400/80",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(99,102,241,0.18),0_24px_40px_-24px_rgba(99,102,241,0.4)]",
    text: "group-hover:text-indigo-700",
    dot: "bg-indigo-500",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  rose: {
    border: "hover:border-rose-400/80",
    shadow:
      "hover:shadow-[0_0_0_1px_rgba(244,63,94,0.18),0_24px_40px_-24px_rgba(244,63,94,0.4)]",
    text: "group-hover:text-rose-700",
    dot: "bg-rose-500",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
  },
};

export function Projects() {
  return (
    <section
      id="works"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-24"
    >
      <SectionHeading
        eyebrow="作品"
        eyebrowEn="Works"
        title="思いつきを、かたちに。"
        description={`これまでに組み立ててきた個人開発の記録です。計${String(
          projects.length,
        ).padStart(2, "0")}件。順序は制作の新旧ではなく、並べやすさで決めています。`}
      />

      <div className="grid gap-5">
        {projects.map((project, index) => {
          const a = accentClasses[project.accent];
          const indexLabel = String(index + 1).padStart(2, "0");
          return (
            <article
              key={project.id}
              className={`group relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur transition-all duration-300 ${a.border} ${a.shadow}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] tracking-widest text-slate-400">
                      No. {indexLabel}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                      {project.id}
                    </span>
                  </div>
                  <h3
                    className={`mt-2 text-xl font-bold text-[color:var(--color-primary)] transition-colors sm:text-2xl ${a.text}`}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.links?.repo ? (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[11px] text-slate-600 hover:border-sky-300 hover:text-sky-700"
                      aria-label={`${project.title} のリポジトリ`}
                    >
                      <Github className="h-3.5 w-3.5" /> Repo
                    </a>
                  ) : null}
                  {project.links?.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[11px] text-slate-600 hover:border-sky-300 hover:text-sky-700"
                      aria-label={`${project.title} のデモ`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Demo
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                {project.description}
              </p>

              <div className="mt-5 grid gap-4 rounded-xl border border-sky-100 bg-sky-50/60 p-4 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-sky-500" />
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-sky-700">
                      課題
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-sky-400">
                      problem
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-sky-500" />
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-sky-700">
                      解法
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-sky-400">
                      solution
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {project.solution}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className={`mt-1.5 h-1 w-1 rounded-full ${a.dot}`} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${a.badge}`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
