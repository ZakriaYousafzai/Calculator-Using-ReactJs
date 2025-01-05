import React from "react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className={`mb-[10px] p-[5px] text-sm border rounded cursor-pointer ${theme === "light" ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}
