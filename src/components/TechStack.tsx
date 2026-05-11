import { SectionHeading } from "./SectionHeading";
import { techStack } from "@/constants/site";

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative mx-auto w-full max-w-5xl scroll-mt-28 px-6 py-24"
    >
      <SectionHeading
        eyebrow="技術"
        eyebrowEn="Stack"
        title="道具は、用途に合わせて選びます。"
        description="つまり「速さ」とは、流行りを追いかけることではなく、その場で一番合う道具を迷わず取り出せることだと思っています。普段触れている主な道具をまとめました。"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-[color:var(--color-border)] bg-white p-5 transition-colors hover:border-[color:var(--color-sky-strong)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold tracking-tight text-[color:var(--color-ink)]">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-[color:var(--color-muted)]">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] text-[color:var(--color-ink)]"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-sun)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
