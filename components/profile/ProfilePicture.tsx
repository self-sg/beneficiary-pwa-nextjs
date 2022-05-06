import profileStyles from '../../styles/Profile.module.css'

// TO-DO: need to fix styling for uploaded profile photo
export default function ProfilePicture({ selectedPhoto }) {
  if (selectedPhoto) {
    return (
      <div className={profileStyles.profilePictureBubble}>
        <img alt="profile picture" src={URL.createObjectURL(selectedPhoto)} className={profileStyles.profilePicture} />
      </div>
    )
  } else {
    return <div className={profileStyles.profilePictureBubble}></div>
  }
}
