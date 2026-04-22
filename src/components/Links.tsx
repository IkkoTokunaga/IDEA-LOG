import { Github, Mail, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/constants/site";

export function Links() {
  return (
    <section
      id="links"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-24"
    >
      <SectionHeading
        eyebrow="連絡"
        eyebrowEn="Links"
        title="外部リンク。"
        description="感想・指摘・雑談、どれでも歓迎です。必要なときにどうぞ。"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noreferrer"
          className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_16px_40px_-20px_rgba(2,132,199,0.35)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50">
              <Github className="h-5 w-5 text-sky-700" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-sky-700">
                GitHub
              </p>
              <p className="mt-1 font-mono text-sm text-[color:var(--color-primary)]">
                @your-handle
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600" />
        </a>

        <a
          href={siteConfig.social.email}
          className="glass group flex items-center justify-between rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_16px_40px_-20px_rgba(2,132,199,0.35)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50">
              <Mail className="h-5 w-5 text-sky-700" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-sky-700">
                メール
                <span className="ml-1.5 font-mono text-[10px] tracking-widest text-sky-400">
                  email
                </span>
              </p>
              <p className="mt-1 font-mono text-sm text-[color:var(--color-primary)]">
                hello@example.com
              </p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600" />
        </a>
      </div>
    </section>
  );
}
