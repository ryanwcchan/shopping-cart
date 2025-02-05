import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import style from "./CartPage.module.css";
import cartStyle from "../components/CartItem.module.css";
import { useEffect, useState } from "react";

export default function CartPage() {
  const {
    cartData = [],
    emptyCart,
    deleteCartItem,
    incrementQuantity,
    decreaseQuantity,
  } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalPrice(cartData);
  });

  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function updateTotalPrice() {
    setTotalPrice(calculateTotal(cartData));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.cartTableContainer}>
          <table className={style.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => {
                return (
                  <CartItem
                    key={item.productId}
                    productId={item.productId}
                    productImg={item.image}
                    productName={item.productName}
                    quantity={item.quantity}
                    deleteCartItem={deleteCartItem}
                    incrementQuantity={incrementQuantity}
                    decreaseQuantity={decreaseQuantity}
                    price={item.price}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Order Summary */}
        <div className={style.orderSummary}>
          <h1>Order Summary</h1>

          <div className={style.cartInfo}>
            <button onClick={emptyCart} className={cartStyle.deleteBtn}>
              Empty Cart
            </button>
            <p className={style.totalPrice}>
              Subtotal: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
