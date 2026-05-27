import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Talks from "@/components/Talks";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Talks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
