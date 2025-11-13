import type { Metadata } from "next";
// @ts-expect-error: allow importing global CSS with no type declarations
import "./global.css";
// Ensure FontAwesome icons are registered before any components render
import "../lib/fontawesome";

export const metadata: Metadata = {
  title: "Elisha Sani — Developer & Data Scientist",
  description:
    "Full-Stack Developer & Data Scientist — building scalable apps and data-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-hero text-[var(--color-neutral-text)]">
        {children}
      </body>
    </html>
  );
}
