import style from "./CartItem.module.css";
import { useOutletContext } from "react-router-dom";
import QtyInput from "./QtyInput";
import React from "react";

export default function CartItem({
  productName,
  productId,
  quantity,
  productImg,
  deleteCartItem,
  incrementQuantity,
  decreaseQuantity,
  price,
}) {
  const { handleProductClick, editQuantity } = useOutletContext();

  console.log("decreaseQuantity:", decreaseQuantity);

  return (
    <div key={productId} className={style.container}>
      {/* Product column (Image and Name) */}
      <div className={style.productContainer}>
        <img
          onClick={() => handleProductClick(productId)}
          className={style.productImg}
          src={productImg}
          alt="Product image"
        />
        <div className={style.nameContainer}>
          <p
            onClick={() => handleProductClick(productId)}
            className={style.productName}
          >
            {productName}
          </p>
          <button
            className={style.deleteBtn}
            onClick={() => deleteCartItem(productId)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className={style.quantityPriceContainer}>
        {/* Quantity column */}
        <div className={style.buttonWrapper}>
          <div className={style.quantity}>
            <button
              onClick={() => decreaseQuantity(productId)}
              className={`${style.button} fa-solid fa-minus`}
              disabled={quantity === 1}
            ></button>
            <span className={style.qtyDisplay}>
              <QtyInput
                quantity={quantity}
                productId={productId}
                editQuantity={editQuantity}
              />
            </span>
            <button
              onClick={() => incrementQuantity(productId)}
              className={`${style.button} fa-solid fa-plus`}
            ></button>
          </div>
        </div>
        {/* Price column */}
        <div>
          <p className={style.price}>${price}</p>
        </div>
        {/* Total column */}
        <div>
          <p className={style.total}>${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
