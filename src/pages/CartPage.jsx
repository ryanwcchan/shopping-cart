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
    setTotalPrice(calculateTotal(cartData));
  }, [cartData]);

  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.cartGridContainer}>
          <div className={style.cartGridHeader}>
            <div>
              <h3 className={style.productsHeader}>Products</h3>
            </div>

            <div className={style.quantityPriceTotal}>
              <div>
                <h3 className={style.quantityHeader}>Quantity</h3>
              </div>
              <div>
                <h3 className={style.priceHeader}>Price</h3>
              </div>
              <div>
                <h3 className={style.totalHeader}>Total</h3>
              </div>
            </div>
          </div>
          <div className={style.cartItemsGrid}>
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
          </div>
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
