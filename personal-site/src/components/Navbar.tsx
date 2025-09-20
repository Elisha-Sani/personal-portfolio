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
    <nav className="fixed top-0 left-0 z-50 w-full shadow-md backdrop-blur-lg bg-[var(--color-dark)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center font-extrabold text-2xl text-white"
        >
          ElishaSani
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`cursor-pointer transition-colors hover:text-[var(--color-link)] text-xl ${
                active === item.id
                  ? "text-[var(--color-link-hover)]"
                  : "text-[var(--color-text-inverse)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <Link
            href=""
            className="px-3 py-2 bg-[var(--color-primary)] text-[var(--color-text-inverse)] rounded-md"
          >
            Message Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
