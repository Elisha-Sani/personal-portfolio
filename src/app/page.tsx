import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="px-6 md:px-16 lg:px-24">
          <Hero />
        </div>
        <About />
      </main>
    </div>
  );
}
