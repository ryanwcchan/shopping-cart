import style from './ProductCard.module.css'

export default function ProductCard({ id, productName, price, image, desc }) {
  return (
    <div className={style.productCard}>
        <img src={image} className={style.productImage}/>
        <h1 className={style.productTitle}>{productName}</h1>
    </div>
  )
}