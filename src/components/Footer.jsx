import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>Ryan Chan</div> | <a href="mailto:ryanwcchan@gmail.com">Email</a> |
      <a href="https://linkedin.com/in/ryanwcchan" target="_blank">
        LinkedIn
      </a>
      |
      <a href="https://github.com/ryanwcchan" target="_blank">
        GitHub
      </a>
    </footer>
  );
}
