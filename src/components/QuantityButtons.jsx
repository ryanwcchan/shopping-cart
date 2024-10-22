import btnStyle from './QuantityButtons.module.css'

export default function QuantityButtons({ quantity, add, sub }) {

  return (
    <div className={btnStyle.quantity}>
        <i 
          className="fa-solid fa-minus"
          onClick={sub}
        ></i>
        {quantity}
        <i 
          className="fa-solid fa-plus"
          onClick={add}
        ></i>
    </div>
  )
}