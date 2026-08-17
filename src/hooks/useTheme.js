import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/** Read whatever the inline script in index.html already resolved. */
function currentTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/**
 * Theme state, mirrored onto <html data-theme> and localStorage.
 *
 * index.html sets the attribute before first paint, so this hook seeds itself
 * from the DOM instead of a hardcoded default — otherwise a saved light theme
 * would flash back to dark on hydration.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#fafafc" : "#07080c");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode — the theme still applies for this session */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, isDark: theme === "dark", toggleTheme };
}
