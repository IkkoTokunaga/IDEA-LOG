import type { Metadata } from "next";
import { homePageDescription, siteUrl } from "@/constants/site";
import { JsonLd } from "@/components/JsonLd";
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
  description: homePageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "好奇心を、実装する。 ｜ 作品集",
    description: homePageDescription,
    url: siteUrl,
  },
  twitter: {
    title: "好奇心を、実装する。 ｜ 作品集",
    description: homePageDescription,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
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
