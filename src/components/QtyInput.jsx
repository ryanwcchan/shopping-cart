import { useState } from "react"
import style from './QtyInput.module.css'

export default function QtyInput({ quantity }) {
  const [isEditing, setIsEditing] = useState(false)
  const [prevQuantity, setPrevQuantity] = useState(quantity)
  const [newQuantity, setNewQuantity] = useState(quantity)

  function turnOnEdit() {
    setIsEditing(true)
    setPrevQuantity(quantity)
  }

  function handleChange(e) {
    let input = e.target.value

    if (/^\d*$/.test(input)) {  // Only allows digits
      console.log('Update quantity to', input)
      setNewQuantity(input)
    }
  }

  function handleBlur() {
    setIsEditing(false)
    // if(quantity === '') {
    //   setQuantity(productId, prevQuantity)
    // }
    if(newQuantity === '') {
      setNewQuantity(prevQuantity)
    } 
  }

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text" 
        value={newQuantity}
        readOnly={!isEditing}
        onClick={turnOnEdit}
        onBlur={handleBlur}
        onChange={handleChange}
      ></input>
    </div>
  )
}
