"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const menuId = "mobile-nav";
  const buttonRef = useRef<HTMLButtonElement>(null);

  //Close Menu with Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  //Prevent background scroll when Menu is Open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

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
    <header className="fixed top-0 left-0 z-30 w-full bg-transparent border-b border-black/30 backdrop-blur-md bg-">
      <nav className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl md:text-4xl">
            <span className="text-[var(--color-primary)]">E</span>
            <span className="text-gray-300 text-xl">.</span>S
          </Link>
        </div>

        {/*Desktop Navbar*/}
        <div className="hidden md:flex items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`cursor-pointer transition-colors hover:text-[var(--color-primary)] text-sm md:text-lg font-semibold ${
                active === item.id ? "text-[var(--color-primary)]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/*Mobile Menu Button*/}
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={menuId}
          className="md:hidden p-2 rounded-md hover:bg-[var(--color-primary)]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/*Mobile Menu Panel*/}
      <div
        id={menuId}
        className={`md:hidden overflow-hidden transition-all duration-100 ${
          open ? "max-h-96" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 py-4 flex flex-col gap-3 bg-white/20 backdrop-blur-2xl
    backdrop-saturate-150 border-t border-white/30 shadow-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`text-black px-2 py-2 rounded-md hover:bg-gray-500 text-sm ${
                active === item.id ? "text-[var(--color-primary)]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
