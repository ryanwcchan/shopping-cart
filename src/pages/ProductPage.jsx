import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ProductPage.module.css'
import BackButton from "../components/BackButton"

export default function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  
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
            </div>
        </div>
      </div>
    </div>
  )
}
