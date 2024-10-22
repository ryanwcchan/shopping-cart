import styles from '../components/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header({ cartCounter }) {

  return (
    <header className={styles.header}>
        <h1 className={styles.headerText}>
          <Link to="home">FAKE STORE</Link>
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
                  <Link to="cart" className={styles.link}>
                    <i className="fa-solid fa-cart-shopping">
                      <span className={styles.cartBadge}>{cartCounter}</span>
                    </i>
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
