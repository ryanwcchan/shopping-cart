import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>Copyright © 2024 - Made by Ryan Chan</div>
      <div className={style.links}>
        <a href="https://linkedin.com/in/ryanwcchan" target="_blank">
          LinkedIn
        </a>
        |
        <a href="https://github.com/ryanwcchan" target="_blank">
          GitHub
        </a>
      </div>
    </footer>
  );
}
