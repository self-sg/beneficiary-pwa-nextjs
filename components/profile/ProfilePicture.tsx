import profileStyles from '../../styles/Profile.module.css'

// TO-DO: need to fix styling for uploaded profile photo
export default function ProfilePicture({ profilePhoto }) {
  if (profilePhoto) {
    return (
      <div className={profileStyles.profilePictureBubble}>
        <img
          alt="profile picture"
          src={URL.createObjectURL(profilePhoto)}
          className={profileStyles.profilePicture}
        />
      </div>
    )
  } else {
    return <div className={profileStyles.profilePictureBubble}></div>
  }
}
