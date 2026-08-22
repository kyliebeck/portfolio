import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Navbar from "./Navbar";

function renderNavbar(props = {}) {
  return render(
    <Navbar isDark toggleTheme={vi.fn()} {...props} />
  );
}

describe("Navbar", () => {
  it("starts with the mobile drawer closed", () => {
    renderNavbar();

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("opens and closes the drawer from the burger", async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const close = screen.getByRole("button", { name: "Close menu" });
    expect(close).toHaveAttribute("aria-expanded", "true");

    await user.click(close);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("freezes the page behind the open drawer and restores it after", async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(document.body.style.overflow).toBe("hidden");

    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("closes the drawer on Escape", async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.keyboard("{Escape}");

    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("closes the drawer when a nav link is followed", async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    // The drawer duplicates each link, so target the one inside it.
    const drawer = document.getElementById("mobile-menu");
    await user.click(drawer.querySelector('a[href="#projects"]'));

    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
  });

  it("links the burger to the drawer it controls", () => {
    renderNavbar();

    // aria-controls has to name a real element or the relationship is a lie.
    const burger = screen.getByRole("button", { name: "Open menu" });
    const id = burger.getAttribute("aria-controls");

    expect(document.getElementById(id)).toBeInTheDocument();
  });
});
