import style from './CartItem.module.css'

export default function({ productName, quantity }) {
  return (
    <div className={style.itemContainer}>
      <p className={style.name}>{productName}</p>
      <p className={style.quantity}>Qty: {quantity}</p>
    </div>
  )
}
