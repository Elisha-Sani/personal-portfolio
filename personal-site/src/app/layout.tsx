import type { Metadata } from "next";
import "./globals.css";

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
