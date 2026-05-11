import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/constants/site";
import "./globals.css";

const roundedSans = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
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
    default: "ひらめきを、エンジニアリング。 ｜ 作品集",
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
    title: "ひらめきを、エンジニアリング。 ｜ 作品集",
    description:
      "ITエンジニアによる個人開発のアーカイブ。作品紹介、資格・技術スタック、お問い合わせ。",
    url: siteUrl,
    locale: "ja_JP",
    images: [
      {
        url: "/images/og/ogp.png",
        width: 1200,
        height: 630,
        alt: "IDEA LOG ポートフォリオのOGP画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ひらめきを、エンジニアリング。 ｜ 作品集",
    description:
      "ITエンジニアによる個人開発のアーカイブ。作品紹介、資格・技術スタック、お問い合わせ。",
    images: ["/images/og/ogp.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf8ef",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${roundedSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
