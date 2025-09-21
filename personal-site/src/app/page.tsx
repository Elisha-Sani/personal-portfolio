import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="px-6 md:px-16 lg:px-24">
        <Hero />
      </main>
    </div>
  );
}
