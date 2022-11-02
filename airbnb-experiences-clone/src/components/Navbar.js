import "../App.css"
import logo from "../media/logo.png"

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Airbnb logo" className="logo" />
    </nav>
  )
}

export default Navbar
