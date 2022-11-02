import "../App.css"

function Main() {
  return (
    <main>
      <h1>Alexis González</h1>
      <h3>Frontend Developer</h3>
      <h4>alexisgonzalez.website</h4>
      <button>
        <img src={require("../media/icon.png")} alt="Email icon" /> Email
      </button>
      <h2 className="about">About</h2>
      <p>
        I am a frontend developer who loves minimalist and functional designs,
        and am always looking for new things to learn.
      </p>
      <h2 className="interests">Interests</h2>
      <p>
        Guitar player and drummer. Food lover. Gamer. Movie and Anime Fanatic.
      </p>
    </main>
  )
}

export default Main
