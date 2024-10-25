import style from '../src/App.module.css'

function App() {
  return (
    <div>
      <h1 className={style.title}>Go to the store tab to browse products!</h1>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <h1>
            From Food to Clothing, Always Fresh.
          </h1>
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={style.imgContainer}>
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>
            Browse Top Quality Clothing
          </h1>
        </div>
      </div>
    </div>
  )
}

export default App
