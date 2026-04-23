import { ExternalLink } from "lucide-react";
import Image from "next/image";
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

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => {
          const a = accentClasses[project.accent];
          const indexLabel = String(index + 1).padStart(2, "0");
          const previewLink =
            project.links?.demo ?? project.links?.repo ?? project.links?.docker;

          return (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur transition-all duration-300 ${a.border} ${a.shadow}`}
            >
              {previewLink ? (
                <a
                  href={previewLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} のTOPイメージから遷移`}
                  className="relative block aspect-[16/10] w-full cursor-pointer border-b border-slate-200/80 bg-slate-100"
                >
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} のTOP画面イメージ`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-sky-100">
                      <span className="font-mono text-xs tracking-wider text-slate-500">
                        TOP IMAGE PREPARING
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-slate-900/65 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white">
                    <ExternalLink className="h-3 w-3" />
                    OPEN
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/35">
                    <span className="rounded-full border border-white/70 bg-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      画像をクリックしてサイトへ
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent" />
                </a>
              ) : (
                <div className="relative aspect-[16/10] w-full border-b border-slate-200/80 bg-slate-100">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} のTOP画面イメージ`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-sky-100">
                      <span className="font-mono text-xs tracking-wider text-slate-500">
                        TOP IMAGE PREPARING
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
              )}

              <div className="p-5">
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
                  className={`mt-2 line-clamp-2 text-lg font-bold text-[color:var(--color-primary)] transition-colors ${a.text}`}
                >
                  {project.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                  {project.tagline}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-700">
                  {project.description}
                </p>
                {previewLink ? (
                  <p className="mt-2 text-xs font-medium tracking-wide text-slate-500">
                    画像をクリックするとサイトを開きます
                  </p>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${a.badge}`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
