"use client";

import { useTheme } from "next-themes";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme((oldValue) => {
      return theme === "dark" ? "light" : "dark";
    });
  };

  return {
    toggle,
  };
};
