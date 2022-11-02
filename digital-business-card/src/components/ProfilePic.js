import "../App.css"

function ProfilePic() {
  return (
    <>
      <img
        src={require("../media/profile-pic.png")}
        alt="Profile"
        className="profilePic"
      />
    </>
  )
}

export default ProfilePic
