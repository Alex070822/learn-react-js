import "../App.css";

function Navbar() {
  return (
    <nav>
      <img src={require("../media/logo.png")} alt="Journal logo" />
      <h2 className="navbar--title">my travel journal.</h2>
    </nav>
  );
}

export default Navbar;
