import style from "./CartItem.module.css";
import { useOutletContext } from "react-router-dom";
import QtyInput from "./QtyInput";

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

  return (
    <tr key={productId}>
      {/* Product column (Image and Name) */}
      <tr className={style.productCell}>
        <td>
          <div>
            <img
              onClick={() => handleProductClick(productId)}
              className={style.productImg}
              src={productImg}
              alt="Product image"
            />
          </div>
        </td>
        <td>
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
        </td>
      </tr>

      {/* Quantity column */}
      <td className={style.priceContainer}>
        <div className={style.buttonWrapper}>
          <div className={style.quantity}>
            <button
              onClick={() => decreaseQuantity(productId)}
              className={`${style.button} fa-solid fa-minus`}
              disabled={quantity === 1}
            ></button>
            <p className={style.qtyDisplay}>
              <QtyInput
                quantity={quantity}
                productId={productId}
                editQuantity={editQuantity}
              />
            </p>
            <button
              onClick={() => incrementQuantity(productId)}
              className={`${style.button} fa-solid fa-plus`}
            ></button>
          </div>
        </div>
      </td>

      {/* Price column */}
      <td>
        <p className={style.price}>${price}</p>
      </td>

      {/* Total column */}
      <td>
        <p className={style.total}>${price * quantity}</p>
      </td>
    </tr>
  );
}
