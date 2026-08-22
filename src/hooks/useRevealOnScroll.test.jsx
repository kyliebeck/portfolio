import { render } from "@testing-library/react";
import { act } from "react";
import { describe, expect, it, vi } from "vitest";
import { MockIntersectionObserver } from "../test/setup";
import useRevealOnScroll from "./useRevealOnScroll";

function Fixture() {
  useRevealOnScroll();
  return (
    <>
      <p data-reveal data-testid="a">first</p>
      <p data-reveal data-testid="b">second</p>
    </>
  );
}

describe("useRevealOnScroll", () => {
  it("reveals elements as they scroll into view", () => {
    const { getByTestId } = render(<Fixture />);

    expect(getByTestId("a")).not.toHaveClass("is-revealed");

    const observer = MockIntersectionObserver.instances.at(-1);
    act(() => {
      observer.trigger([{ isIntersecting: true, target: getByTestId("a") }]);
    });

    expect(getByTestId("a")).toHaveClass("is-revealed");
    // Untouched — reveals are per-element, not all-or-nothing.
    expect(getByTestId("b")).not.toHaveClass("is-revealed");
  });

  it("shows everything immediately under reduced motion", () => {
    // The critical failure this guards: if the hook bailed out without
    // revealing, a reduced-motion visitor would get a blank page.
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({ matches: true, addEventListener: vi.fn() })
    );

    const { getByTestId } = render(<Fixture />);

    expect(getByTestId("a")).toHaveClass("is-revealed");
    expect(getByTestId("b")).toHaveClass("is-revealed");
  });

  it("shows everything when IntersectionObserver is unavailable", () => {
    // Delete rather than stub to undefined: the hook guards with an `in`
    // check, and a browser that lacks the API has no property at all. The
    // setup file re-stubs it before the next test.
    delete window.IntersectionObserver;

    const { getByTestId } = render(<Fixture />);

    expect(getByTestId("a")).toHaveClass("is-revealed");
    expect(getByTestId("b")).toHaveClass("is-revealed");
  });
});
