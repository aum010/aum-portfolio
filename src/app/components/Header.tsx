"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light dark:bg-background-dark shadow-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-[#3895D3]">Om Bhushal</h1>

        <nav className="flex items-center gap-6">
          <a
            href="#ux"
            className="text-secondary-light dark:text-secondary-dark hover:text-[#3895D3] transition"
          >
            UX/UI
          </a>
          <a
            href="#product"
            className="text-secondary-light dark:text-secondary-dark hover:text-[#3895D3] transition"
          >
            Product
          </a>
          <a
            href="#data"
            className="text-secondary-light dark:text-secondary-dark hover:text-[#3895D3] transition"
          >
            Data
          </a>
          <a
            href="#art"
            className="text-secondary-light dark:text-secondary-dark hover:text-[#3895D3] transition"
          >
            Art
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}