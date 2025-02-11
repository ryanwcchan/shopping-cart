import React from "react";
import { useState } from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CartItem from "../src/components/CartItem";
import { useOutletContext } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

describe("Cart Item", () => {
  const mockHandleProductClick = vi.fn();
  const mockEditQuantity = vi.fn();
  const mockDeleteItem = vi.fn();
  const mockIncreaseQuantity = vi.fn();
  const mockDecreaseQuantity = vi.fn();

  const product = {
    productId: "1",
    name: "Test Product",
    quantity: 3,
    price: 49.99,
    image: "https://example.com/sneakers.jpg",
  };

  beforeEach(() => {
    // ✅ Provide mock implementation for useOutletContext
    useOutletContext.mockReturnValue({
      handleProductClick: mockHandleProductClick,
      editQuantity: mockEditQuantity,
    });
  });

  it("renders cart item details", () => {
    render(
      <CartItem
        productName={product.name}
        productId={product.productId}
        quantity={product.quantity}
        productImg={product.image}
        deleteCartItem={mockDeleteItem}
        incrementQuantity={mockIncreaseQuantity}
        decrementQuantity={mockDecreaseQuantity}
        price={product.price}
      />
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  it("displays the current quantity", () => {
    render(
      <CartItem
        productName={product.name}
        productId={product.productId}
        quantity={product.quantity}
        productImg={product.image}
        deleteCartItem={mockDeleteItem}
        incrementQuantity={mockIncreaseQuantity}
        decrementQuantity={mockDecreaseQuantity}
        price={product.price}
      />
    );

    // Check if input value shows correct quantity
    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
  });

  it("calls increment quantity function when buttons are clicked", () => {
    const { container } = render(
      <CartItem
        productName={product.name}
        productId={product.productId}
        quantity={product.quantity}
        productImg={product.image}
        deleteCartItem={mockDeleteItem}
        incrementQuantity={mockIncreaseQuantity}
        decrementQuantity={mockDecreaseQuantity}
        price={product.price}
      />
    );

    const incrementButton = container.querySelector(".fa-plus");

    fireEvent.click(incrementButton);

    expect(mockIncreaseQuantity).toHaveBeenCalledTimes(1);
  });

  it("decrements quantity when decrement button is clicked", () => {
    const { container } = render(
      <CartItem
        productName={product.name}
        productId={product.productId}
        quantity={product.quantity}
        productImg={product.image}
        deleteCartItem={mockDeleteItem}
        incrementQuantity={mockIncreaseQuantity}
        decrementQuantity={mockDecreaseQuantity}
        price={product.price}
      />
    );

    const decrementButton = container.querySelector(".fa-minus");

    fireEvent.click(decrementButton);
    console.log(mockDecreaseQuantity.mock.calls);
    expect(mockDecreaseQuantity).toHaveBeenCalledTimes(1);
  });
});
