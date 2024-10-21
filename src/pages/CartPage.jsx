import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import style from './CartPage.module.css'

export default function CartPage() {
  const { cartData } = useOutletContext();
  
  function deleteItem() {
    
  }

  return (
    <div className={style.cartContainer}>
      {cartData.map((item) => {
        return (
          <CartItem
            productName={item.productName}
            quantity={item.quantity}
          />
        )
      })}
    </div>
  )
}
