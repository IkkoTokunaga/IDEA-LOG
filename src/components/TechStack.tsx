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
        title="つくるための、選びとった技術。"
        description="作品の中や日々の検証で触れている主な技術です。用途に合わせて入れ替えています。"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group) => (
          <div key={group.category} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold tracking-tight text-[color:var(--color-primary)]">
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-slate-400">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] text-slate-700"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400"
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
