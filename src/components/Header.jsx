import styles from '../components/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.headerText}>
          <Link to="home">ESSENTIALS MART</Link>
        </h1>
        <nav className={styles.headerNav}>
            <ul className={styles.navList}>
                <li>
                  <Link to="about" className={styles.link}>ABOUT</Link>
                </li>
                <li>
                  <Link to="store" className={styles.link}>STORE</Link>
                </li>
                <li>
                  <Link to="cart" className={styles.link}>CART</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
