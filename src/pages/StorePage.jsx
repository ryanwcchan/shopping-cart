import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import style from './StorePage.module.css'

export default function StorePage() {
  const [storeData, setStoreData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchStoreData() {
      const localKey = 'fake-store-data'
  
      if (localStorage.getItem(localKey)) {
        const storedData = JSON.parse(localStorage.getItem(localKey))
        setStoreData(storedData)
        console.log('Fetched data from cache')
        return
      }
  
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        localStorage.setItem(localKey, JSON.stringify(data))
        setStoreData(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchStoreData()
  }, [])

  function handleProductClick(id) {
    navigate(`/store/${id}`)
  }

  return (
    <div className={style.productContainer}>
      {storeData.map((product) => [
        <ProductCard 
          key={product.id}
          id={product.id}
          productName={product.title}
          price={product.price}
          image={product.image}
          onClick={() => handleProductClick(product.id)}
        />
      ])}
    </div>
  )
}
