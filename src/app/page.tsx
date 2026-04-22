import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
        <Profile />
        <TechStack />
        <Links />
      </main>
      <Footer />
    </>
  );
}
