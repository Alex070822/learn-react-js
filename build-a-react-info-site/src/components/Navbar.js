import "../App.css"
import logo from "../images/react-icon-small.png"

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="React logo" className="navIcon" />
      <h3 className="navLogoText">ReactFacts</h3>
      <h4 className="navTitle">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
