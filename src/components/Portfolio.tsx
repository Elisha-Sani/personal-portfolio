import React from "react";
import Image from "next/image";

interface FilterProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterContent: React.FC<FilterProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white bg-[var(--color-bg-abcard)] ${
        isActive ? "bg-[var(--color-primary)]" : "text-black"
      }`}
    >
      {label}
    </button>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="">
      <div>
        <h2></h2>
        <p></p>
      </div>
      <div></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"></div>
    </section>
  );
}
