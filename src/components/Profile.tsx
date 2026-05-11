import { ShieldCheck, Cpu, Code2, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { qualifications } from "@/constants/site";
import { Mascot } from "./Mascot";

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
        title="つくっているのは、こんな人。"
        description="普段は IT エンジニア。インフラ・セキュリティの土台を持ちつつ、個人開発では『つまり、こうしたら気持ちいいよね』を確かめながら手を動かしています。難しい話を、ベンチの隣で話すくらいの距離感に翻訳することが好きです。"
      />

      <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-paper)] px-4 py-3">
        <Mascot
          body="#ffd23f"
          sprout="#f5b400"
          className="h-9 w-9 shrink-0"
        />
        <p className="text-[13px] text-[color:var(--color-ink-muted)]">
          下のバッジは、これまで取ってきた国家試験。土台がしっかりしていると、その上に乗せる物の温度を選べます。
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {qualifications.map((q) => {
          const Icon = iconMap[q.id];
          return (
            <article
              key={q.id}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-colors hover:border-[color:var(--color-sky-strong)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--color-sky)]/40 bg-[color:var(--color-sky-soft)]">
                  <Icon className="h-5 w-5 text-[color:var(--color-sky-ink)]" />
                </div>
                <span className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-paper)] px-2 py-1 font-mono text-[10px] tracking-wider text-[color:var(--color-muted)]">
                  {q.code}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-[color:var(--color-ink)]">
                {q.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-wider text-[color:var(--color-sky-strong)]">
                {q.nameEn}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                {q.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
