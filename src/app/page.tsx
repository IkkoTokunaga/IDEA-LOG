import type { Metadata } from "next";
import { siteUrl } from "@/constants/site";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Links } from "@/components/Links";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "好奇心を、実装する。",
  description:
    "基本情報・応用情報・情報セキュリティマネジメント等の資格を持つITエンジニアの個人開発アーカイブ。知育アプリ、API検証環境、OSI参照モデルの可視化など、Next.js・Laravel・AWSを用いた作品と技術スタックを紹介。",
  openGraph: {
    title: "好奇心を、実装する。 ｜ 作品集",
    description:
      "基本情報・応用情報・情報セキュリティマネジメント等の資格を持つITエンジニアの個人開発アーカイブ。知育アプリ、API検証環境、OSI参照モデルの可視化など、Next.js・Laravel・AWSを用いた作品と技術スタックを紹介。",
    url: siteUrl,
  },
  twitter: {
    title: "好奇心を、実装する。 ｜ 作品集",
    description:
      "基本情報・応用情報・情報セキュリティマネジメント等の資格を持つITエンジニアの個人開発アーカイブ。知育アプリ、API検証環境、OSI参照モデルの可視化など、Next.js・Laravel・AWSを用いた作品を紹介。",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
        <Profile />
        <TechStack />
        <ContactForm />
        <Links />
      </main>
      <Footer />
    </>
  );
}
