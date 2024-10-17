import '../components/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <h1>
          <Link to="home" className='headerText'>MART-B-FRESH</Link>
        </h1>
        <nav>
            <ul>
                <li>
                  <Link to="about">ABOUT</Link>
                </li>
                <li>
                  <Link to="store">STORE</Link>
                </li>
                <li>
                  <Link to="cart">CART</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
