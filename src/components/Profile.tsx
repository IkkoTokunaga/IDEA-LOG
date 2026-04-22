import { ShieldCheck, Cpu, Code2, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { qualifications } from "@/constants/site";

const iconMap = {
  fe: Code2,
  sg: Shield,
  ap: Cpu,
  sc: ShieldCheck,
} as const;

export function Profile() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-24"
    >
      <SectionHeading
        eyebrow="紹介"
        eyebrowEn="About"
        title="つくっている人について。"
        description="普段は IT エンジニアとして働いています。インフラ・セキュリティに比重があり、個人開発ではその知識を土台に「触って気持ちいいもの」を作ることを楽しんでいます。"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {qualifications.map((q) => {
          const Icon = iconMap[q.id];
          return (
            <article
              key={q.id}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-sky-300"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-200/50 blur-3xl transition-opacity group-hover:opacity-100 opacity-70"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50">
                  <Icon className="h-5 w-5 text-sky-600" />
                </div>
                <span className="rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-[10px] tracking-wider text-slate-500">
                  {q.code}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-[color:var(--color-primary)]">
                {q.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-wider text-sky-600">
                {q.nameEn}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {q.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
