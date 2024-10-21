import { useOutletContext } from "react-router-dom";

export default function CartPage() {
  const { cartData } = useOutletContext();
  
  console.log(cartData)

  return (
    <div>
      {cartData.map((item) => {
        return (
          <div>
            <p>{item.productName}</p>
            <p>{item.quantity}</p>
          </div>
        )
      })}
    </div>
  )
}
