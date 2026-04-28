import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/constants/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "好奇心を、実装する。 ｜ 作品集",
    template: "%s ｜ 作品集",
  },
  description:
    "ITエンジニアによる個人開発のアーカイブ。作品紹介、資格・技術スタック、お問い合わせ。",
  keywords: [
    "作品集",
    "ポートフォリオ",
    "個人開発",
    "ITエンジニア",
    "Next.js",
    "TypeScript",
    "Laravel",
    "AWS",
  ],
  openGraph: {
    type: "website",
    title: "好奇心を、実装する。 ｜ 作品集",
    description:
      "ITエンジニアによる個人開発のアーカイブ。作品紹介、資格・技術スタック、お問い合わせ。",
    url: siteUrl,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "好奇心を、実装する。 ｜ 作品集",
    description:
      "ITエンジニアによる個人開発のアーカイブ。作品紹介、資格・技術スタック、お問い合わせ。",
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
