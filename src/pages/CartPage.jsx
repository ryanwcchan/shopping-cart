import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import style from './CartPage.module.css'
import cartStyle from '../components/CartItem.module.css'
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cartData = [], emptyCart, deleteCartItem, incrementQuantity, decreaseQuantity } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalPrice(cartData)
  }, [cartData])

  function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  function updateTotalPrice() {
    setTotalPrice(calculateTotal(cartData));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.cartInfo}>
        <button onClick={emptyCart} className={cartStyle.deleteBtn}>Empty Cart</button>
        <p className={style.totalPrice}>${totalPrice.toFixed(2)}</p>
      </div>
      <div className={style.cartContainer}>
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
            />
          )
        })}
      </div>
    </div>
  )
}
