import { BookOpen, Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/constants/site";

const cardClass =
  "group flex items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-colors hover:border-[color:var(--color-sky-strong)] hover:bg-[color:var(--color-paper)]";

const iconWrap =
  "flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--color-sky)]/40 bg-[color:var(--color-sky-soft)]";

export function Links() {
  return (
    <section
      id="links"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-24"
    >
      <SectionHeading
        eyebrow="活動"
        eyebrowEn="Links"
        title="ふだんの居場所。"
        description="感想・指摘・雑談、どれでも歓迎です。ベンチに座って話すような距離感で、お気軽にどうぞ。"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noreferrer"
          className={cardClass}
        >
          <div className="flex items-center gap-4">
            <div className={iconWrap}>
              <Github className="h-5 w-5 text-[color:var(--color-sky-ink)]" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-[color:var(--color-sky-strong)]">
                GitHub
              </p>
              <p className="mt-1 font-mono text-sm text-[color:var(--color-ink)]">
                IDEA-LOG
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-[color:var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--color-sky-strong)]" />
        </a>

        <a
          href={siteConfig.social.x}
          target="_blank"
          rel="noreferrer"
          className={cardClass}
        >
          <div className="flex items-center gap-4">
            <div className={iconWrap}>
              <span className="font-mono text-sm font-bold text-[color:var(--color-sky-ink)]">
                X
              </span>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-[color:var(--color-sky-strong)]">
                X
              </p>
              <p className="mt-1 font-mono text-sm text-[color:var(--color-ink)]">
                @ikk_cheese
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-[color:var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--color-sky-strong)]" />
        </a>

        <a
          href={siteConfig.social.ameblo}
          target="_blank"
          rel="noreferrer"
          className={cardClass}
        >
          <div className="flex items-center gap-4">
            <div className={iconWrap}>
              <BookOpen className="h-5 w-5 text-[color:var(--color-sky-ink)]" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-[color:var(--color-sky-strong)]">
                アメブロ
              </p>
              <p className="mt-1 font-mono text-sm text-[color:var(--color-ink)]">
                ikk-cheese
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-[color:var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--color-sky-strong)]" />
        </a>
      </div>
    </section>
  );
}
