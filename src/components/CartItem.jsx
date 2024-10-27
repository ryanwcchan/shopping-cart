import style from './CartItem.module.css'
import { useOutletContext } from 'react-router-dom'
import QtyInput from './QtyInput'
import { useState } from 'react'

export default function CartItem({ productName, productId, quantity, productImg, deleteCartItem, incrementQuantity, decreaseQuantity }) {
  const { handleProductClick, editQuantity } = useOutletContext()

  return (
    <div className={style.itemContainer}>
      <img onClick={() => handleProductClick(productId)} className={style.productImg} src={productImg} alt="" />
      <p onClick={() => handleProductClick(productId)} className={style.productName}>{productName}</p>
      <div className={style.buttonWrapper}>
        <div className={style.quantity}>
          <span className={style.qty}>Qty:</span>
          {quantity === 1 ? (
            <i className={`${style.button} fa-solid fa-trash`} onClick={() => deleteCartItem(productId)}></i>
          ) : (
            <i onClick={() => decreaseQuantity(productId)} className={`${style.button} fa-solid fa-minus`}></i>
          )}
          <p className={style.qtyDisplay}>
            <QtyInput 
              quantity={quantity}
              productId={productId}
              editQuantity={editQuantity}
            />
          </p>
          <i onClick={() => incrementQuantity(productId)} className={`${style.button} fa-solid fa-plus`}></i>
        </div>
        <button className={style.deleteBtn} onClick={() => deleteCartItem(productId)}>
          <i className='fa-solid fa-trash' />
          <span className={style.deleteText}>Delete</span>
        </button>
      </div>
    </div>
  )
}
