import styles from '../../styles/Page.module.css'
import profileStyles from '../../styles/Profile.module.css'
import TopNav from '../../components/TopNav'
import ProfilePicture from '../../components/profile/ProfilePicture'
import Button from '../../components/Button'
import React, { useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  auth,
  updateProfile,
  updateEmail,
  updatePhoneNumber,
  storage
} from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  InputLabel,
  Box,
  Alert
} from '@mui/material'
import TextField from '@mui/material/TextField'
// import { Button as MUIButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Avatar from '@mui/material/Avatar'
import { securityRules } from 'firebase-admin'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

// Credits to https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 for
// the styling of the photo upload button
const AlertMessage = ({ messageType, messageContent, visible }) => {
  if (visible) {
    return <div className={profileStyles[messageType]}>{messageContent}</div>
  } else {
    return null
  }
}

export default function EditProfile() {
  const hiddenFileInput = React.useRef(null)
  const [user, setCurrUser] = useState(null)
  const [url, setUrl] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const router = useRouter()

  const handleUploadImage = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0]
      console.log(image)
      const imageRef = ref(storage, `${user.displayName} profile picture`)
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setUrl(url)
            })
            .catch((error) => {
              console.log(error.message, 'error getting the image url')
            })
        })
        .catch((error) => {
          console.log(error.message, 'error uploading the image')
        })
    }
  }

  const updateUserProfile = (auth, newName, newPhoneNumber, newEmail, url) => {
    updateProfile(auth.currentUser, {
      displayName: newName,
      photoURL: url
    })
      .then(() => {
        console.log(auth.currentUser)
      })
      .catch((error) => {
        console.log(error)
      })

    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        console.log(auth.currentUser)
      })
      .catch((error) => {
        console.log(error)
      })

    console.log('updated profile details')
  }

  const {
    handleSubmit,
    values,
    handleChange,
    touched,
    errors,
    handleBlur,
    isValid,
    dirty,
    setFieldValue,
    submitCount
  } = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: ''
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Required'),
      email: yup.string().email('Invalid email').required('Required')
    }),
    onSubmit: (values) => {
      setFormSubmitted(true)
      setAlertVisible(true)
      setTimeout(() => setAlertVisible(false), 2000)
      updateUserProfile(
        auth,
        values.name,
        values.phoneNumber,
        values.email,
        url
      )
    }
  })

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          setCurrUser(user)
          setFieldValue('name', user.displayName)
          setFieldValue('email', user.email)
          setUrl(user.photoURL)
          setLoggedIn(true)
        } else {
          router.push('/login')
        }
      }),
    []
  )

  return loggedIn ? (
    <div className={styles.container}>
      <TopNav pageName={'Edit Account Profile'} displayBackButton={true} />
      <div style={{position: 'relative'}}>
        {formSubmitted && alertVisible ? (
          <Alert
            iconMapping={{
              success: (
                <CheckCircleOutlineIcon sx={{ color: 'white', fontSize: 24 }} />
              )
            }}
            sx={{
              backgroundColor: '#32693B',
              color: 'white',
              height: '60px',
              width: '100vw',
              position: 'absolute',
              top: '0px',
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            Saved successfully.
          </Alert>
        ) : (
          <></>
        )}
        <form onSubmit={handleSubmit}>
          <Grid container justifyContent="center" sx={{ padding: '20px' }}>
            <Grid item container xs={11} md={8} justifyContent="center">
              <Avatar src={url} sx={{ width: 150, height: 150, zIndex: 1 }} />
            </Grid>
            <Grid item container xs={11} md={8} justifyContent="center">
              <button
                onClick={(event) => {
                  hiddenFileInput.current.click()
                  setFormSubmitted(false)
                }}
                className={`text-s ${profileStyles.uploadPhotoButton}`}
                type="button"
              >
                Upload new photo
              </button>
            </Grid>
            <input
              type="file"
              name="myImage"
              ref={hiddenFileInput}
              onChange={handleUploadImage}
              style={{ display: 'none' }}
            />
            <Grid item xs={11} md={8}>
              <InputLabel>Name</InputLabel>
            </Grid>
            <Grid item xs={11} md={8}>
              <Box height={8} />
            </Grid>
            <Grid item xs={11} md={8}>
              <TextField
                fullWidth
                id="name"
                name="name"
                value={values.name}
                onChange={(event) => {
                  handleChange(event)
                  setFormSubmitted(false)
                }}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                onBlur={handleBlur}
                sx={{
                  '& fieldset': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={11} md={8}>
              <Box height={8} />
            </Grid>
            <Grid item xs={11} md={8}>
              <InputLabel>Mobile</InputLabel>
            </Grid>
            <Grid item xs={11} md={8}>
              <Box height={8} />
            </Grid>
            <Grid item xs={11} md={8}>
              <TextField
                fullWidth
                id="mobile"
                name="phoneNumber"
                type="phoneNumber"
                value={values.phoneNumber}
                onChange={(event) => {
                  handleChange(event)
                  setFormSubmitted(false)
                }}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
                onBlur={handleBlur}
                sx={{
                  '& fieldset': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={11} md={8}>
              <Box height={8} />
            </Grid>
            <Grid item xs={11} md={8}>
              <InputLabel>Email</InputLabel>
            </Grid>
            <Grid item xs={11} md={8}>
              <Box height={8} />
            </Grid>
            <Grid item xs={11} md={8}>
              <TextField
                fullWidth
                id="email"
                name="email"
                value={values.email}
                onChange={(event) => {
                  handleChange(event)
                  setFormSubmitted(false)
                }}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                sx={{
                  '& fieldset': {
                    borderRadius: '8px'
                  }
                }}
              />
            </Grid>
            <Grid item xs={11} md={8}>
              <Box height={24} />
            </Grid>
            <Grid container xs={11} md={8}>
              <Button
                type="submit"
                text="Save"
                disabled={!isValid || !dirty || formSubmitted}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  ) : null
}
