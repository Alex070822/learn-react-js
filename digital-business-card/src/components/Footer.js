import "../App.css"
import twitterIcon from "../media/twitter-icon.png"
import facebookIcon from "../media/facebook-icon.png"
import instagramIcon from "../media/instagram-icon.png"
import linkedinIcon from "../media/linkedin-icon.png"
import githubIcon from "../media/github-icon.png"

function Footer() {
  return (
    <footer>
      <img src={twitterIcon} alt="Twitter icon" />
      <img src={facebookIcon} alt="Facebook icon" />
      <img src={instagramIcon} alt="Instagram icon" />
      <img src={linkedinIcon} alt="Linkedin icon" />
      <a
        href="https://github.com/Alex14683"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="Github icon" />
      </a>
    </footer>
  )
}

export default Footer
