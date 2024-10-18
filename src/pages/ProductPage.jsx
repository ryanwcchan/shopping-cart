import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img src={product.image} alt={product.title} />
    </div>
  )
}
