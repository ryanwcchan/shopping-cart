import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import style from '../src/Root.module.css'
import { useState } from "react"

export default function Root() {
  const [cartData, setCartData] = useState([])
  const [cartCounter, setCartCounter] = useState(0)

  function emptyCart() {
    setCartData([])
    console.log('Emptied cart')
    setCartCounter(0)
  }

  function updateCartData(product) {
    console.log(product)

    if (product.quantity < 1) {
      return
    }

    setCartData((prevData) => {
      const index = cartData.findIndex(item => item.productId === product.productId)
    
      if (index === -1) {
        return [...prevData, product]
      }

      const updatedCartData = [...prevData]
      updatedCartData[index] = {
        ...prevData[index],
        quantity: prevData[index].quantity + product.quantity
      }

      return updatedCartData
    })

    setCartCounter(prev => prev + product.quantity)
  }

  function deleteCartItem(productId) {
    const product = cartData.find(item => item.productId === productId)

    if(product) {
      setCartData((prevCart) => {
        const updatedCart = prevCart.filter(item => item.productId !== productId)
        console.log(updatedCart)
        return updatedCart
      })
    }

    setCartCounter((prevCount) => prevCount - product.quantity)
  }

  function incrementQuantity(productId) {
    
    setCartCounter((prevCount) => prevCount + 1)

  }

  return (
    <div>
        <Header 
          cartCounter={cartCounter}
        />
        <div className={style.outletContainer}>
            <Outlet context={{ cartData, emptyCart, updateCartData, deleteCartItem }}/>
        </div>
    </div>
  )
}
