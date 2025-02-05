import style from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>About</h1>
        <p className={style.desc}>
          This project was created to serve as a practical exercise of React
          Router concepts.
        </p>
        <p className={style.desc}>Made by: Ryan Chan</p>
        <p className={style.desc}>
          <a href="https://github.com/ryanwcchan">My Github</a>
        </p>
      </div>
    </div>
  );
}
