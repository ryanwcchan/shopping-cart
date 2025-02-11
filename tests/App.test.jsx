import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import "@testing-library/jest-dom";

import App from "../src/App";

describe("App", () => {
  it("renders Browse Top Quality Clothing", () => {
    render(<App />);

    expect(screen.getByText(/Browse Top Quality Clothing/)).toBeInTheDocument();
  });
});
