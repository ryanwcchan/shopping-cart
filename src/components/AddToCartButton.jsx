import addBtn from "./ProductCard.module.css";
import React from "react";

export default function AddToCartButton({
  quantity,
  productId,
  productName,
  price,
  image,
  updateCartData,
}) {
  return (
    <button
      className={addBtn.addButton}
      onClick={() =>
        updateCartData({ productId, productName, price, quantity, image })
      }
    >
      Add
    </button>
  );
}
