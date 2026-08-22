import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

// jsdom ships no IntersectionObserver, and both useRevealOnScroll and the
// Navbar's scroll-spy construct one on mount. Without a stand-in, every render
// of a component that reveals on scroll would throw.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }
  observe() {}
  unobserve() {}
  disconnect() {}

  /** Let a test drive the callback as if elements had scrolled into view. */
  trigger(entries) {
    this.callback(entries, this);
  }
}
MockIntersectionObserver.instances = [];

beforeEach(() => {
  MockIntersectionObserver.instances = [];
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

  // Default to "no preference" so reveals follow the animated path. Tests that
  // care about reduced motion override this themselves.
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

export { MockIntersectionObserver };
