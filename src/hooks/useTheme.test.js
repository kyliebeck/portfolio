import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useTheme from "./useTheme";

describe("useTheme", () => {
  it("seeds itself from the attribute index.html already set", () => {
    // The inline script resolves the saved theme before React boots. If the
    // hook ignored it, a light-mode visitor would see a dark flash on load.
    document.documentElement.setAttribute("data-theme", "light");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.isDark).toBe(false);
  });

  it("defaults to dark when nothing has been set", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("toggles the theme and mirrors it onto the document", () => {
    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());

    expect(result.current.theme).toBe("light");
    expect(document.documentElement).toHaveAttribute("data-theme", "light");

    act(() => result.current.toggleTheme());

    expect(result.current.theme).toBe("dark");
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("persists the choice so it survives a reload", () => {
    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());

    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("still applies the theme when localStorage throws", () => {
    // Safari private mode throws on setItem. The theme must still switch —
    // it just won't be remembered next visit.
    const setItem = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("QuotaExceededError");
      });

    const { result } = renderHook(() => useTheme());

    expect(() => act(() => result.current.toggleTheme())).not.toThrow();
    expect(document.documentElement).toHaveAttribute("data-theme", "light");

    setItem.mockRestore();
  });
});
