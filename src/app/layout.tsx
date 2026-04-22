import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "好奇心を、実装する。 ｜ 作品集",
    template: "%s ｜ 作品集",
  },
  description:
    "個人開発で手を動かしてつくってきたものを並べた、小さなアーカイブ。",
  keywords: [
    "作品集",
    "ポートフォリオ",
    "個人開発",
    "Next.js",
    "TypeScript",
    "Laravel",
    "AWS",
  ],
  openGraph: {
    type: "website",
    title: "好奇心を、実装する。 ｜ 作品集",
    description:
      "個人開発で手を動かしてつくってきたものを並べた、小さなアーカイブ。",
    url: siteUrl,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "好奇心を、実装する。 ｜ 作品集",
    description: "個人開発で手を動かしてつくってきたものを並べた小さなアーカイブ。",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f9fc",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
