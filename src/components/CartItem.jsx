import style from './CartItem.module.css'

export default function CartItem({ productName, productId, quantity, productImg, deleteCartItem, incrementQuantity, decreaseQuantity }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.productImg} src={productImg} alt="" />
      <p className={style.productName}>{productName}</p>
      <div className={style.quantity}>
        <span className={style.qty}>Qty:</span> 
        {quantity === 1 ? (
          <i className={`${style.button} fa-solid fa-trash`} onClick={() => deleteCartItem(productId)}></i>
        ) : (
          <i onClick={() => decreaseQuantity(productId)} className={`${style.button} fa-solid fa-minus`}></i>
        )}
        <p className={style.qtyDisplay}>{quantity}</p>
        <i onClick={() => incrementQuantity(productId)} className={`${style.button} fa-solid fa-plus`}></i>
      </div>
      <button className={style.deleteBtn} onClick={() => deleteCartItem(productId)}>Delete</button>
    </div>
  )
}
