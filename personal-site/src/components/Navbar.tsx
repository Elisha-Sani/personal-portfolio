"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-100px 0px -40% 0px",
      threshold: Array.from({ length: 11 }, (_, i) => i / 10),
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (visibleSections.length > 0) {
        const mostVisible = visibleSections.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        );
        if (mostVisible.target instanceof HTMLElement) {
          setActive(mostVisible.target.id);
        }
      }
    }, options);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-black border-b border-black/30 backdrop-blur-md bg-">
      <nav className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-10 lg:px-16 py-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl">
            <span className="text-[var(--color-primary)]">Elisha</span>Sani
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`cursor-pointer transition-colors hover:text-[var(--color-primary)] text-xl ${
                active === item.id
                  ? "text-[var(--color-link-hover)]"
                  : "text-[var(--color-text-inverse)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
