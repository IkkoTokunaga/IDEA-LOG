import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { projects } from "@/constants/projects";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      <div aria-hidden className="absolute inset-0 dot-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-20%] mx-auto h-[60vh] max-w-4xl rounded-full bg-sky-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--color-background)]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <h1 className="text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[1.02] tracking-tight text-[color:var(--color-primary)]">
          {siteConfig.title}
        </h1>
        <p className="mt-3 font-mono text-sm tracking-[0.18em] text-sky-600 sm:text-base">
          — {siteConfig.subtitle} —
        </p>

        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
          {siteConfig.tagline}
          <br className="hidden sm:block" />
          どんな課題が面白くて、どう解いたか。そこに重きを置いてまとめています。
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#works"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(2,132,199,0.55)] transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-[0_10px_26px_-8px_rgba(2,132,199,0.55)]"
          >
            作品を見る
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-sky-800 transition-colors hover:border-sky-400 hover:bg-white"
          >
            制作者について
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-3">
          {[
            { label: "作品数", value: String(projects.length).padStart(2, "0") },
            { label: "開始年", value: "2020" },
            { label: "種別", value: "個人制作" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="glass rounded-2xl px-4 py-3"
            >
              <dt className="text-[11px] tracking-[0.18em] text-slate-500">
                {kpi.label}
              </dt>
              <dd className="mt-1 font-mono text-base font-semibold text-[color:var(--color-primary)]">
                {kpi.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
