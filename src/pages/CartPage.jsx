import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import style from './CartPage.module.css'

export default function CartPage() {
  const { cartData = [], emptyCart, deleteCartItem, incrementQuantity, decreaseQuantity } = useOutletContext();

  return (
    <div className={style.cartContainer}>
      <button onClick={emptyCart}>Empty Cart</button>
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
  )
}
