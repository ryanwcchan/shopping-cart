import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import style from './StorePage.module.css'
import { useOutletContext } from "react-router-dom"

export default function StorePage() {
  const { updateCartData, handleProductClick } = useOutletContext();
  const [storeData, setStoreData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStoreData(apiUrl, localKey) { 
      if (localStorage.getItem(localKey)) {
        const storedData = JSON.parse(localStorage.getItem(localKey))

        const normalizeData = storedData.map(product => ({
          ...product,
          image: product.image || product.images[0]
        }))

        setStoreData(normalizeData)
        setLoading(false)
        console.log('Fetched data from cache')
        return
      }
  
      try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        const normalizeData = data.map(product => ({
          ...product,
          image: product.image || product.images[0]
        }))

        localStorage.setItem(localKey, JSON.stringify(normalizeData))
        setStoreData(normalizeData)
        setLoading(false)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchStoreData('https://fakestoreapi.com/products', 'fake-store-data')
  }, [])

  return (
    <div className={style.productContainer}>
      {storeData.map((product) => 
        <ProductCard 
          key={product.id}
          productId={product.id}
          productName={product.title}
          price={product.price}
          image={product.image}
          onClick={() => handleProductClick(product.id)}
          updateCartData={updateCartData}
          loading={loading}
        />
      )}
    </div>
  )
}
