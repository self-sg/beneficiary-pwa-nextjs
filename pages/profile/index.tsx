import BottomNav from '../../components/BottomNav'
import styles from '../../styles/Page.module.css'
import profileStyles from '../../styles/Profile.module.css'
import TopNav from '../../components/TopNav'
import MenuButton from '../../components/profile/MenuButton'
import star from '../../public/assets/icon/star-outlined.svg'
import share from '../../public/assets/icon/share.svg'
import edit from '../../public/assets/icon/edit.svg'
import settings from '../../public/assets/icon/settings.svg'
import file from '../../public/assets/icon/file.svg'
import shield from '../../public/assets/icon/shield.svg'
import logout from '../../public/assets/icon/logout.svg'
import ProfilePicture from '../../components/profile/ProfilePicture'
import React, { useState } from 'react'
import { onAuthStateChanged, auth, signOut } from '../../firebase'
import { useRouter } from 'next/router'

// TODO: handle storing of phone number 
export default function Profile() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [profilePhoto, setProfilePhoto] = useState(null)

  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.displayName
      const email = user.email
      setName(name)
      setEmail(email)
    } else {
      console.log("not signed in ")
    }
  })

  const menuButtonsDict = [
    [
      star,
      'Saved Support',
      'saved-support',
      'block-button-container',
      () => {}
    ],
    [
      share,
      'Share this App',
      'share-this-app',
      'block-button-container',
      () => {}
    ],
    [
      edit,
      'Edit Account Profile',
      'edit-profile',
      'slim-button-container',
      () => {router.push('/profile/edit-profile')}
    ],
    [settings, 'Settings', 'settings', 'slim-button-container', () => {}],
    [
      file,
      'Terms and Conditions',
      'terms-and-conditions',
      'slim-button-container',
      () => {}
    ],
    [
      shield,
      'Privacy Policy',
      'privacy-policy',
      'slim-button-container',
      () => {}
    ],
    [logout, 'Logout', 'login', 'slim-button-container', () => {
      console.log("hey")
      signOut(auth)
        .then(() => {
          console.log("sign out successful")
          router.push('/login')
        })
        .catch((error) => {
          console.log("there was en error logging out")
          console.log(error)
        })
    }]
  ]

  return (
    <div className={styles.container}>
      <TopNav pageName={'My Profile'} displayBackButton={false} />
      <div className={profileStyles.infoContainer}>
        <ProfilePicture selectedPhoto={false} />
        <h3 className={profileStyles.name}>{name}</h3>
        <p className={`text-s ${profileStyles.contactDetails}`}>
          {phoneNumber}
        </p>
        <p className={`text-s ${profileStyles.contactDetails}`}>{email}</p>
      </div>
      <div className={profileStyles.menuContainer}>
        {menuButtonsDict.map((menuButtonInfo, index) => {
          return (
            <MenuButton
              imgSrc={menuButtonInfo[0]}
              buttonText={menuButtonInfo[1]}
              url={menuButtonInfo[2]}
              buttonStyle={menuButtonInfo[3]}
              onClick={menuButtonInfo[4]}
            />
          )
        })}
      </div>
      <BottomNav featureName="profile" />
    </div>
  )
}
