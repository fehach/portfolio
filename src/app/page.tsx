import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Talks from "@/components/Talks";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import ArchitecturePrinciples from "@/components/ArchitecturePrinciples";
import AIAssistantDemo from "@/components/AIAssistantDemo";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Talks />
        <Services />
        <TechStack />
        <ArchitecturePrinciples />
        <AIAssistantDemo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
