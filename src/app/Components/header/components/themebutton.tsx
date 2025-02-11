"use client";

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null; 

  return (
    <button
      onClick={toggleTheme}
      className=" transition duration-900"
    >
       {theme === "dark" ? (
                <img src={`/images/light.png`} alt="" className="w-5 grayscale hover:grayscale-0 transition duration-300"/>
        ) : (
          <img src={`/images/dark.png`} alt="" className="w-5 grayscale hover:grayscale-0 transition duration-300"/>
      )}
    </button>
  );
};

export default ThemeToggle;
