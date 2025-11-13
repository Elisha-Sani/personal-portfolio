"use client";
import React, { useState } from "react";
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
      className={`px-4 py-2 text-white bg-[var(--color-bg-abcard)] rounded-lg border border-[var(--color-bg-start)] hover:border-[var(--color-primary)] ${
        isActive ? "bg-[var(--color-primary)]" : "text-black"
      }`}
    >
      {label}
    </button>
  );
};

const allProjects = [
  { id: 1, title: "E-commerce Site", category: "web" },
  { id: 2, title: "Weather App", category: "mobile" },
  { id: 3, title: "Design System", category: "desktop" },
  { id: 4, title: "Portfolio Website", category: "web" },
  { id: 5, title: "Task Manager", category: "desktop" },
  { id: 6, title: "Social Media App", category: "mobile" },
  { id: 7, title: "Blog Platform", category: "web" },
  { id: 8, title: "Music Player", category: "mobile" },
  { id: 9, title: "File Explorer", category: "desktop" },
];

const filters = ["all", "web", "desktop", "mobile"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter == "all") {
      return true;
    }
    return project.category == activeFilter;
  });

  return (
    <section
      id="portfolio"
      className="max-w-8xl mx-auto bg-[#18191b] px-6 py-15 md:py-20 min-h-screen"
    >
      <div>
        <div className="max-w-2xl mx-auto items-center justify-center text-center space-y-4 mb-6">
          <h2 className="text-xl md:text-4xl lg:text-5xl text-white font-bold">
            Features Projects
          </h2>
          <p className="text-lg tracking-wide text-gray-300">
            A showcase of my recent work in web development, machine learning
            and data science
          </p>
        </div>
        <div className="mb-8 text-center space-x-4">
          {filters.map((filter) => (
            <FilterContent
              key={filter}
              label={filter}
              isActive={filter == activeFilter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
          <p></p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className="text-sm text-gray-500">{project.category}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-12 text-center">
          <button className="px-6 py-4 bg-[var(--color-primary)] rounded-lg text-black font-semibold transition-transform duration-300 hover:scale-105 hover:bg-[var(--color-primary)]/80 hover:cursor-pointer">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
