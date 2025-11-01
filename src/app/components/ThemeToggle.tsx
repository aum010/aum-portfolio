"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface-light dark:bg-surface-dark text-accent hover:shadow-md transition"
      aria-label="Toggle Theme"
    >
      {!mounted ? "🌙" : theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}