import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ProductPage.module.css'
import BackButton from "../components/BackButton"
import QuantityButtons from "../components/QuantityButtons"
import AddToCartButton from "../components/AddToCartButton"
import { useOutletContext } from "react-router-dom"

export default function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const { updateCartData } = useOutletContext();

  function handleAddQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  function handleSubtractQuantity() {
    if (quantity > 0) {
        setQuantity(prevQuantity => prevQuantity - 1)
    }
  }
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('fake-store-data'))
    const productData = storedData.find(item => item.id == productId)

    setProduct(productData)
  }, [productId])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.pageContainer}>   
      <div className={styles.wrapper}>
        <BackButton />
        <div className={styles.container}>
            <div className={styles.imgContainer}>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.header}>{product.title}</h1>
              <p className={styles.price}>Price: ${product.price}</p>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.quantityWrapper}>
                <QuantityButtons
                  quantity={quantity}
                  add={handleAddQuantity}
                  sub={handleSubtractQuantity}
                />
                <AddToCartButton
                  quantity={quantity}
                  productId={productId}
                  productName={product.title}
                  updateCartData={updateCartData}
                  price={product.price}
                  image={product.image}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
