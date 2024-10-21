import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import style from '../src/Root.module.css'
import { useState } from "react"

export default function Root() {
  const [cartData, setCartData] = useState([])
  const [cartCounter, setCartCounter] = useState(0)

  function updateCartData(product) {
    if (product.quantity > 0) {
      setCartData((prevCart) => {
        const newCart = [...prevCart, product]
        setCartCounter(cartCounter + product.quantity)
        console.log('Add to cart', product.productName)
        console.log(product)
        return newCart
      })   
    }
  }

  return (
    <div>
        <Header 
          cartCounter={cartCounter}
        />
        <div className={style.outletContainer}>
            <Outlet context={{ cartData, updateCartData  }}/>
        </div>
    </div>
  )
}
