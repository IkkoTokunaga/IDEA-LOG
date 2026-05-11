import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description:
    "お探しのページは存在しないか、URLが変更された可能性があります。作品集トップから作品一覧・プロフィール・お問い合わせへお進みください。",
  robots: { index: false, follow: true },
  openGraph: {
    title: "ページが見つかりません ｜ 作品集",
    description:
      "指定のURLにページはありません。トップへ戻って作品やプロフィールをご覧ください。",
  },
  twitter: {
    title: "ページが見つかりません ｜ 作品集",
    description:
      "指定のURLにページはありません。トップへ戻って作品やプロフィールをご覧ください。",
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="horizon-rule justify-center text-[12px] font-bold tracking-[0.22em] text-[color:var(--color-sky-strong)]">
          404
          <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-sky)]">
            not found
          </span>
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[color:var(--color-ink)]">
          ページが見つかりません
        </h1>
        <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
          お探しのページは、どこかへお散歩に行ってしまったようです。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--color-sky)] bg-white px-4 py-2 text-sm font-bold text-[color:var(--color-sky-ink)] transition-colors hover:bg-[color:var(--color-sky-soft)]"
        >
          ← トップへ戻る
        </Link>
      </div>
    </main>
  );
}
