import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OmkarPortfolio from "@/components/portfolio/omkar-portfolio";

describe("OmkarPortfolio", () => {
  it("renders key sections and content", () => {
    render(<OmkarPortfolio />);

    expect(screen.getByText("Omkar Parab")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Selected experience",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Featured work",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Email Omkar" }).length,
    ).toBeGreaterThan(0);
  });
});
