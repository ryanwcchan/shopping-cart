import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import style from '../src/Root.module.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Root() {
  const [cartData, setCartData] = useState([])
  const [cartCounter, setCartCounter] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const totalQuantity = cartData.reduce((total, item) => total + item.quantity, 0)
    setCartCounter(totalQuantity)
  }, [cartData])

  useEffect(() => {
    console.log(cartData)
  }, [cartData])

  function handleProductClick(id) {
    navigate(`/store/${id}`)
  }

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
  }

  function incrementQuantity(productId) {
    setCartCounter(prevCount => prevCount + 1)
    setCartData(prevCart => {
      const index = prevCart.findIndex(item => item.productId === productId)
      const updatedCart = [...prevCart]
      updatedCart[index] = {
        ...prevCart[index], quantity: prevCart[index].quantity + 1
      }
      return updatedCart
    })
  }

  function decreaseQuantity(productId) {
    setCartData(prevCart => {
      const index = prevCart.findIndex(item => item.productId === productId)
      const updatedCart = [...prevCart]
      updatedCart[index] = {
        ...prevCart[index], quantity: prevCart[index].quantity - 1
      }
      return updatedCart
    })
  }

  function editQuantity(productId, newQuantity) {
    setCartData(prevCart => {
      return prevCart.map(item => 
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    })
  }

  return (
    <div className={style.body}>
        <Header 
          cartCounter={cartCounter}
        />
        <div className={style.outletContainer}>
            <Outlet 
              context={{ 
                cartData, 
                emptyCart, 
                updateCartData, 
                deleteCartItem,
                incrementQuantity, 
                decreaseQuantity,
                handleProductClick,
                editQuantity
              }}
            />
        </div>
    </div>
  )
}
