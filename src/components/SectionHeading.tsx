type Props = {
  eyebrow: string;
  eyebrowEn?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowEn,
  title,
  description,
}: Props) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="jp-rule text-[12px] font-medium tracking-[0.22em] text-sky-700">
        {eyebrow}
        {eyebrowEn ? (
          <span className="font-mono text-[10px] tracking-widest text-sky-400">
            {eyebrowEn.toLowerCase()}
          </span>
        ) : null}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-primary)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
