import "../App.css"

function Footer() {
  return (
    <footer>
      <img src={require("../media/twitter-icon.png")} alt="Twitter icon" />
      <img src={require("../media/facebook-icon.png")} alt="Facebook icon" />
      <img src={require("../media/instagram-icon.png")} alt="Instagram icon" />
      <img src={require("../media/linkedin-icon.png")} alt="Linkedin icon" />
      <a
        href="https://github.com/Alex14683"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("../media/github-icon.png")} alt="Github icon" />
      </a>
    </footer>
  )
}

export default Footer
