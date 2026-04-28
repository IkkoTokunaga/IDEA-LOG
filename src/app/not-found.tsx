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
        <p className="jp-rule justify-center text-[12px] font-semibold tracking-[0.22em] text-sky-700">
          404
          <span className="font-mono text-[10px] tracking-widest text-sky-400">
            not found
          </span>
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-[color:var(--color-primary)]">
          ページが見つかりません
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-800 hover:border-sky-400"
        >
          ← トップへ戻る
        </Link>
      </div>
    </main>
  );
}
