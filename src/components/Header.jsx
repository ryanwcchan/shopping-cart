import styles from "../components/Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ cartCounter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>
        <Link to="store">FAKE STORE</Link>
      </h1>

      {/* Hamburger Icon */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <i className="fa-solid fa-bars">
          <span className={styles.cartBadge}>{cartCounter}</span>
        </i>
      </button>

      <nav className={`${styles.headerNav} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link to="home" className={styles.link}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="store" className={styles.link}>
              STORE
            </Link>
          </li>
          <li>
            <Link to="cart" className={styles.link}>
              <i className="fa-solid fa-cart-shopping">
                <span className={styles.cartBadge}>{cartCounter}</span>
              </i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
