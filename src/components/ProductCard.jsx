import { useState } from 'react'
import style from './ProductCard.module.css'
import QuantityButtons from './QuantityButtons'
import AddToCartButton from './AddToCartButton'

export default function ProductCard({ productId, productName, price, image, onClick, updateCartData }) {
  const [quantity, setQuantity] = useState(1)

  function handleAddQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  function handleSubtractQuantity() {
    if (quantity > 0) {
        setQuantity(prevQuantity => prevQuantity - 1)
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
            <QuantityButtons 
                quantity={quantity} 
                add={handleAddQuantity} 
                sub={handleSubtractQuantity}
            />
            <AddToCartButton
              quantity={quantity}
              productId={productId}
              productName={productName}
              updateCartData={updateCartData}
              price={price}
              image={image}
            />
        </div>
    </div>
  )
}