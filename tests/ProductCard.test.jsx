import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard"; // Import the component
import { describe, it, expect, vi } from "vitest";

describe("Product Card", () => {
  it("renders correct name, price and image", () => {
    const mockOnClick = vi.fn(); // Mock function for image and name click
    const mockUpdateCartData = vi.fn(); // Mock function for adding to cart

    const product = {
      productId: "1",
      name: "Sneakers",
      price: 99.99,
      image: "https://example.com/sneakers.jpg",
    };

    render(
      <ProductCard
        productId={product.productId}
        productName={product.name}
        price={product.price}
        image={product.image}
        onClick={mockOnClick}
        updateCartData={mockUpdateCartData}
        loading={false}
      />
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: product.name })).toHaveAttribute(
      "src",
      product.image
    );
  });
});
