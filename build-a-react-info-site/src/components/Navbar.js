import "../App.css"

function Navbar() {
  return (
    <nav>
      <img
        src={require("../images/react-icon-small.png")}
        alt="React logo"
        className="nav__icon"
      />
      <h3 className="nav__logo-test">ReactFacts</h3>
      <h4 className="nav__title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar
