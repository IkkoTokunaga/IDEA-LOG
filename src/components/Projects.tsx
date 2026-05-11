import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/constants/projects";

const accentClasses: Record<
  Project["accent"],
  { border: string; text: string; dot: string; badge: string }
> = {
  cyan: {
    border: "hover:border-[color:var(--color-sky-strong)]",
    text: "group-hover:text-[color:var(--color-sky-ink)]",
    dot: "bg-[color:var(--color-sky-strong)]",
    badge: "bg-[color:var(--color-sky-soft)] text-[color:var(--color-sky-ink)] border-[color:var(--color-sky)]/40",
  },
  emerald: {
    border: "hover:border-[color:var(--color-leaf)]",
    text: "group-hover:text-[color:var(--color-leaf-strong)]",
    dot: "bg-[color:var(--color-leaf)]",
    badge: "bg-[#eaf6e6] text-[color:var(--color-leaf-strong)] border-[color:var(--color-leaf)]/40",
  },
  amber: {
    border: "hover:border-[color:var(--color-sun-strong)]",
    text: "group-hover:text-[#9a6b00]",
    dot: "bg-[color:var(--color-sun)]",
    badge: "bg-[color:var(--color-sun-soft)] text-[#8a5e00] border-[color:var(--color-sun)]/55",
  },
  violet: {
    border: "hover:border-[#b4a4ee]",
    text: "group-hover:text-[#6a4ec7]",
    dot: "bg-[#a896f0]",
    badge: "bg-[#efeafd] text-[#6a4ec7] border-[#cabff4]",
  },
  rose: {
    border: "hover:border-[#f4a7b3]",
    text: "group-hover:text-[#c14a63]",
    dot: "bg-[#f4a7b3]",
    badge: "bg-[#fde9ed] text-[#c14a63] border-[#f4c1cc]",
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
        title="つくったものを、並べておきます。"
        description={`これまで手を動かして組み立ててきた個人開発の記録です。計${String(
          projects.length,
        ).padStart(2, "0")}件。 つまり、それぞれが「こういう困りごとを、こう解いた」一つひとつの小さな現場、です。`}
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
              className={`group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white transition-colors duration-200 ${a.border}`}
            >
              {previewLink ? (
                <a
                  href={previewLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} のTOPイメージから遷移`}
                  className="relative block aspect-[16/10] w-full cursor-pointer border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]"
                >
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} のTOP画面イメージ`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[color:var(--color-sky-soft)]">
                      <span className="font-mono text-xs tracking-wider text-[color:var(--color-sky-ink)]">
                        TOP IMAGE PREPARING
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[color:var(--color-ink)]/85 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white">
                    <ExternalLink className="h-3 w-3" />
                    OPEN
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[color:var(--color-ink)]/0 transition-colors duration-300 group-hover:bg-[color:var(--color-ink)]/30">
                    <span className="rounded-full bg-[color:var(--color-sun)] px-3 py-1.5 text-xs font-bold tracking-wide text-[color:var(--color-ink)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      画像をクリックしてサイトへ
                    </span>
                  </div>
                </a>
              ) : (
                <div className="relative aspect-[16/10] w-full border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} のTOP画面イメージ`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[color:var(--color-sky-soft)]">
                      <span className="font-mono text-xs tracking-wider text-[color:var(--color-sky-ink)]">
                        TOP IMAGE PREPARING
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-widest text-[color:var(--color-muted)]">
                    No. {indexLabel}
                  </span>
                  <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--color-muted)]">
                    {project.id}
                  </span>
                </div>
                <h3
                  className={`mt-2 line-clamp-2 text-lg font-extrabold text-[color:var(--color-ink)] transition-colors ${a.text}`}
                >
                  {project.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-[color:var(--color-ink-muted)]">
                  {project.tagline}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[color:var(--color-ink)]">
                  {project.description}
                </p>
                {previewLink ? (
                  <p className="mt-2 text-xs font-medium tracking-wide text-[color:var(--color-muted)]">
                    画像をクリックすると実際に触れます。
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
