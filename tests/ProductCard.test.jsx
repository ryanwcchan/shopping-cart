import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "../src/components/ProductCard"; // Import the component
import { describe, it, expect, vi } from "vitest";

describe("Product Card", () => {
  const mockOnClick = vi.fn(); // Mock function for image and name click
  const mockUpdateCartData = vi.fn(); // Mock function for adding to cart

  const product = {
    productId: "1",
    name: "Test Product",
    price: 49.99,
    image: "https://example.com/sneakers.jpg",
  };

  it("renders correct name, price and image", () => {
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

  it("increments and decrements quantity when buttons are clicked", () => {
    const { container } = render(
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

    const quantityDisplay = screen.getByText("1");

    const incrementIcon = container.querySelector(".fa-plus");
    const decrementIcon = container.querySelector(".fa-minus");

    fireEvent.click(incrementIcon);
    expect(quantityDisplay).toHaveTextContent("2");

    fireEvent.click(decrementIcon);
    expect(quantityDisplay).toHaveTextContent("1");
  });

  it("triggers onClick when name or image is clicked", () => {
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

    fireEvent.click(screen.getByText(product.name));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("triggers updateCartData when Add to Cart button is clicked", () => {
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

    expect(mockUpdateCartData).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText("Add"));
    expect(mockUpdateCartData).toHaveBeenCalledTimes(1);
  });
});
