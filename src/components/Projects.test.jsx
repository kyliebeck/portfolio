import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "./Projects";

/**
 * The projects array is the resume section that matters most, so these tests
 * guard the things a broken card would cost: a dead link, a missing screenshot,
 * or an external link that silently drops its security attributes.
 */
describe("Projects", () => {
  it("renders a card for every project", () => {
    render(<Projects />);
    // One <article> per project, each titled by an <h3>.
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual([
      "Nightstand",
      "Pixby",
      "Marquee",
      "Sudoku",
    ]);
  });

  it("points every demo and code link at a real absolute URL", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);

    links.forEach((link) => {
      expect(link.getAttribute("href")).toMatch(/^https:\/\//);
    });
  });

  it("opens external links safely", () => {
    render(<Projects />);

    // rel=noreferrer alongside target=_blank is what stops the opened tab from
    // reaching back through window.opener.
    screen.getAllByRole("link").forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
      expect(link.getAttribute("rel")).toContain("noreferrer");
    });
  });

  it("gives each screenshot alt text and intrinsic dimensions", () => {
    render(<Projects />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);

    images.forEach((img) => {
      expect(img).toHaveAccessibleName(/screenshot$/);
      // Both attributes present means the browser can reserve the space and
      // the grid won't shift as the webp files arrive.
      expect(Number(img.getAttribute("width"))).toBeGreaterThan(0);
      expect(Number(img.getAttribute("height"))).toBeGreaterThan(0);
    });
  });

  it("distinguishes each link by project for screen readers", () => {
    render(<Projects />);

    // Four cards each expose a "Live demo" and a "Code" link. Without the
    // visually-hidden suffix they'd be eight identically-named links.
    const names = screen.getAllByRole("link").map((l) => l.textContent);
    const unique = new Set(names);
    expect(unique.size).toBe(names.length);
  });

  it("shows the build notes on every project that has them", () => {
    const { container } = render(<Projects />);

    const cards = screen.getAllByRole("article");
    for (const card of cards) {
      expect(within(card).getByText(/How it/)).toBeInTheDocument();
    }

    // The label and the text are rendered together, so one block per card.
    expect(container.querySelectorAll(".project__build")).toHaveLength(
      cards.length
    );
  });

  it("applies the zoom crop only to the project that opts in", () => {
    const { container } = render(<Projects />);

    const zoomed = container.querySelectorAll(".project--zoom");
    expect(zoomed).toHaveLength(1);
    expect(within(zoomed[0]).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Pixby"
    );
  });

  it("features exactly one project", () => {
    const { container } = render(<Projects />);

    const featured = container.querySelectorAll(".project--featured");
    expect(featured).toHaveLength(1);
    expect(within(featured[0]).getByRole("heading", { level: 3 })).toHaveTextContent(
      "Nightstand"
    );
  });
});
