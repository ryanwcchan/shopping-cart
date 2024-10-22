import { useNavigate } from "react-router-dom"
import btnStyle from '../pages/ProductPage.module.css'

export default function BackButton() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1); // This goes back one step in the history
  };


  return (
    <button onClick={handleBack} className={btnStyle.backBtn}>
        Back
    </button>
  )
}
