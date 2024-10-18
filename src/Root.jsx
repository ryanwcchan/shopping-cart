import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import style from '../src/Root.module.css'

export default function Root() {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
    </div>
  )
}
