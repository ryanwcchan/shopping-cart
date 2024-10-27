import { useState, useEffect } from "react"
import style from './QtyInput.module.css'

export default function QtyInput({ quantity, productId, editQuantity }) {
  const [inputValue, setInputValue] = useState(quantity)

  useEffect(() => {
    setInputValue(quantity)
  }, [quantity])

  function handleChange(event) {
    const input = event.target.value
    setInputValue(input)
  }

  function handleBlur() {
    if (inputValue === '') {
      setInputValue(quantity)
    } else {
      const parsedValue = parseInt(inputValue, 10);
      if (isNaN(parsedValue) || parsedValue < 1) {
        setInputValue(quantity);
      } else {
        editQuantity(productId, parsedValue);
      }
    }
  }

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text" 
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
    </div>
  )
}
