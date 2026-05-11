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
      <p className="horizon-rule text-[12px] font-bold tracking-[0.22em] text-[color:var(--color-sky-strong)]">
        {eyebrow}
        {eyebrowEn ? (
          <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-sky)]">
            {eyebrowEn.toLowerCase()}
          </span>
        ) : null}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
