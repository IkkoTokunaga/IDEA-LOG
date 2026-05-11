import { Mascot } from "./Mascot";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-[color:var(--color-border)] bg-[color:var(--color-paper)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Mascot
            body="#ffd23f"
            sprout="#7bbf6a"
            className="h-9 w-9"
          />
          <p className="font-mono text-[11px] text-[color:var(--color-ink-muted)]">
            © {year} つくったもの — テクノロジーを、もっと日向の温かさへ。
          </p>
        </div>
      </div>
    </footer>
  );
}
