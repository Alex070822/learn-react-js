import "../App.css";

function Header() {
  return (
    <header>
      <img
        src={require("../media/troll-face.png")}
        alt="Troll face"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
