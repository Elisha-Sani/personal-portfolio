import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="px-6 md:px-16 lg:px-24">
          <Hero />
        </div>
        <About />
        <Skills />
        <Portfolio />
      </main>
    </div>
  );
}
