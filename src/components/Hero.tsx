import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { projects } from "@/constants/projects";
import { Cloud, Mascot } from "./Mascot";

/**
 * 日本語タイトルを読点（、）で2行に分けて表示するヘルパー。
 * 長い見出しが単語の途中で折り返されるのを防ぎ、リズムを揃える。
 */
function renderTitle(title: string) {
  const [head, ...rest] = title.split("、");
  if (rest.length === 0) return title;
  return (
    <>
      <span className="block">{head}、</span>
      <span className="block">{rest.join("、")}</span>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      <div aria-hidden className="absolute inset-0 sunny-dots opacity-70" />

      <Cloud
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[16%] hidden h-16 w-auto text-white/85 md:block"
      />
      <Cloud
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[28%] hidden h-12 w-auto text-white/80 md:block"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <p className="horizon-rule mb-5 text-[12px] font-medium tracking-[0.22em] text-[color:var(--color-sky-strong)]">
          {siteConfig.concept}
        </p>

        <h1 className="text-[clamp(2.5rem,7.5vw,5rem)] font-extrabold leading-[1.1] tracking-tight text-[color:var(--color-ink)]">
          {renderTitle(siteConfig.title)}
        </h1>

        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
          {siteConfig.tagline}
          <br className="hidden sm:block" />
          専門用語を並べるよりも、相手の景色に立って組み立てることを大切にしています。
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#works"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-sun)] px-5 py-2.5 text-sm font-bold text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-sun-strong)]"
          >
            作品をのぞいてみる
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--color-sky)] bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--color-sky-ink)] transition-colors hover:bg-[color:var(--color-sky-soft)]"
          >
            つくっている人について
          </a>
        </div>

        <div className="mt-12 inline-flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-paper)] px-4 py-3">
          <Mascot className="h-10 w-10 shrink-0" />
          <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-muted)] sm:text-sm">
            <span className="font-bold text-[color:var(--color-ink)]">爆速</span>と書いていますが、
            <br className="sm:hidden" />
            それは雑な速さではなく、熟練した職人が迷わず手を動かす
            <span className="font-bold text-[color:var(--color-sky-ink)]">心地よいリズム感</span>のことです。
          </p>
        </div>

        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3">
          {[
            { label: "作品数", value: String(projects.length).padStart(2, "0") },
            { label: "開始年", value: "2026" },
            { label: "種別", value: "個人制作" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl border border-[color:var(--color-border)] bg-white px-4 py-3"
            >
              <dt className="text-[11px] tracking-[0.18em] text-[color:var(--color-muted)]">
                {kpi.label}
              </dt>
              <dd className="mt-1 font-mono text-base font-bold text-[color:var(--color-ink)]">
                {kpi.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
