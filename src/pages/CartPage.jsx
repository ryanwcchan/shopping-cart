import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import style from './CartPage.module.css'
import cartStyle from '../components/CartItem.module.css'

export default function CartPage() {
  const { cartData = [], emptyCart, deleteCartItem, incrementQuantity, decreaseQuantity } = useOutletContext();

  return (
    <div className={style.cartContainer}>
      <button onClick={emptyCart} className={cartStyle.deleteBtn}>Empty Cart</button>
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
