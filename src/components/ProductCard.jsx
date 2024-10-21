import { useState } from 'react'
import style from './ProductCard.module.css'

export default function ProductCard({ productId, productName, price, image, onClick, updateCartData }) {
  const [quantity, setQuantity] = useState(1)

  function handleAddQuantity() {
    setQuantity(quantity + 1)
  }

  function handleSubtractQuantity() {
    if (quantity > 0) {
        setQuantity(quantity - 1)
    }
  }

  return (
    <div className={style.productCard} >
        <div className={style.imgContainer}>
            <img 
                src={image} 
                alt={productName}
                className={style.productImage}
                onClick={onClick}
            />
        </div>
        <div className={style.productInfo}>
            <h1 onClick={onClick}>{productName}</h1>
            <p>${price}</p>
            <div className={style.quantity}>
                <i 
                    className="fa-solid fa-minus"
                    onClick={handleSubtractQuantity}
                ></i>
                {quantity}
                <i 
                    className="fa-solid fa-plus"
                    onClick={handleAddQuantity}
                ></i>
            </div>
            <button
                className={style.addButton}
                onClick={() => updateCartData({ productId, productName, price, quantity, image })}
            >
                Add to Cart
            </button>
        </div>
    </div>
  )
}