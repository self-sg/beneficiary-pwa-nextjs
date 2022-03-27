import styles from '../../styles/Page.module.css'
import profileStyles from '../../styles/Profile.module.css'
import TopNav from '../../components/TopNav'
import ProfilePicture from '../../components/profile/ProfilePicture'
import Button from '../../components/Button'
import React, { useEffect, useState } from "react";


// Credits to https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 for 
// the styling of the photo upload button 
const AlertMessage = ({messageType, messageContent, visible}) => {
  if (visible) {
    return (
      <div className={profileStyles[messageType]}>
          {messageContent}
      </div>
    )
  } else {
    return null;
  }  
}

// TO-DO: Alert message should display error if there is error in saving info (instead of always displaying saved successfully)
export default function EditProfile() {
  const hiddenFileInput = React.useRef(null);
  const [formName, setFormName] = useState('')
  const [formPhoneNumber, setFormPhoneNumber] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formProfilePhoto, setFormProfilePhoto] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000)
  }

  return (
    <div className={styles.container}>
      <TopNav pageName={'Edit Account Profile'} displayBackButton={true} />
      <div className={profileStyles.uploadPhotoContainer}>
        <AlertMessage messageType='success' messageContent='Saved successfully.' visible={alertVisible} />
        <ProfilePicture selectedPhoto={formProfilePhoto}/>
        
        <button onClick={event=>{hiddenFileInput.current.click()}} className={`text-s ${profileStyles.uploadPhotoButton}`}>
          Upload new photo 
        </button>
        <input
          type="file"
          name="myImage"
          ref={hiddenFileInput}
          onChange={(event) => {
            console.log(event.target.files[0]);
            setFormProfilePhoto(event.target.files[0]);
            setFormSubmitted(false);
          }}
          style={{display: 'none'}}
        />
      </div>
      <form className={profileStyles.formContainer} onSubmit={handleSubmit}>
          <label className={profileStyles.formField}>
            Name
            <input 
              className={profileStyles.inputBox} 
              type="text" 
              name="name" 
              value={formName}
              onChange={(e) => {setFormName(e.target.value); setFormSubmitted(false);}}
              />
          </label>
          <label className={profileStyles.formField}>
            Mobile
            <input 
              className={profileStyles.inputBox} 
              type="text" 
              name="name" 
              value={formPhoneNumber}
              onChange={(e) => {setFormPhoneNumber(e.target.value); setFormSubmitted(false);}}
              />
          </label>
          <label className={profileStyles.formField}>
            Email
            <input 
              className={profileStyles.inputBox} 
              type="text" 
              name="name" 
              value={formEmail}
              onChange={(e) => {setFormEmail(e.target.value); setFormSubmitted(false);}}
              />
          </label>
          <div className={profileStyles.saveButtonContainer}>
            <Button
            type={formSubmitted ? "saveDisabled" : "saveActive"}
            text="Save"
            />
          </div>
      </form>
    </div>
  )
}