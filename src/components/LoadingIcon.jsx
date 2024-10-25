import style from './LoadingIcon.module.css'

export default function LoadingIcon({ children }) {
  return (
    <div className={style.container}>
      <h1>{children}</h1>
      <i className="fa-solid fa-spinner"></i>
    </div>
  )
}
