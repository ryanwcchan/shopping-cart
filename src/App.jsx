import style from "../src/App.module.css";
import React from "react";

function App() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <h1>New clothing collection!</h1>
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="homepage image"
        />
      </div>
    </div>
  );
}

export default App;
