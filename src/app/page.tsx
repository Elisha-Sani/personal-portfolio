import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
      </main>
    </div>
  );
}
