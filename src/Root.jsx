import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useState } from "react"

export default function Root() {
  const [storeData, setStoreData] = useState([])

  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
    </div>
  )
}
