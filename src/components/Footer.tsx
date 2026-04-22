export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-sky-100/80 bg-white/60 py-10 backdrop-blur">
      <div aria-hidden className="seigaiha-divider absolute inset-x-0 top-[-6px] h-3" />
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] text-slate-500">
          © {year} つくったもの — Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-[11px] text-slate-400">
          <span className="text-slate-500">deployed on</span> AWS S3 + CloudFront
        </p>
      </div>
    </footer>
  );
}
