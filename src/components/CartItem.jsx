import style from './CartItem.module.css'

export default function CartItem({ productName, productId, quantity, productImg, deleteCartItem }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.productImg} src={productImg} alt="" />
      <p className={style.name}>{productName}</p>
      <p 
        className={style.quantity}
      >
        Qty: 
        {quantity === 1 ? (
          <i className="fa-solid fa-trash" onClick={() => deleteCartItem(productId)}></i>
        ) : (
          <i className="fa-solid fa-minus"></i>
        )}
          
            {quantity}
          <i className="fa-solid fa-plus"></i>
      </p>
    </div>
  )
}
