import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-screen px-16 relative"
    >
      {/* Left Column */}
      <div className="fade-up space-y-6">
        <div className="text-lg text-[var(--color-primary)] font-semibold">
          Hello I&apos;m
        </div>
        <div className="text-5xl md:text-6xl font-extrabold leading-tight">
          Elisha <span className="text-white">Sani</span>
        </div>
        <div className="text-2xl md:text-3xl text-[var(--color-neutral-text)]">
          Full-Stack Developer &{" "}
          <span className="text-[var(--color-primary)]">Data Scientist</span>
        </div>
        <p className="text-xl md:text-2xl text-[var(--color-neutral-text)]">
          Transforming complex data into actionable insights and building
          scalable web applications that drive business growth. Specialized in
          machine learning, cloud architecture, and modern web technologies.
        </p>
        <div className="flex items-center gap-4 mt-8 pt-6">
          <Button className="bg-[var(--color-primary)] text-xl rounded-2xl text-black font-bold py-9 px-6 shadow-[var(--shadow-glow-sm)] transition-transform duration-300 hover:scale-105 hover:bg-[var(--color-primary)] hover:text-xl hover:text-black">
            View My Work
          </Button>
          <Button className="bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] text-xl rounded-2xl font-bold py-9 px-6 hover:bg-[var(--color-primary)] hover:text-black transition-colors duration-300 ease-in-out">
            Contact Me
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end relative">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-ring overflow-hidden border border-amber-700/20 p-1">
          <Image
            src="/images/photo1.jpg"
            alt="Elisha Sani"
            width={600}
            height={600}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
