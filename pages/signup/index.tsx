import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  InputLabel,
  Box
} from '@mui/material'
import TextField from '@mui/material/TextField'
import { Button as MUIButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged
} from '../../firebase'

const Signup = () => {
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   showPassword: false,
  // });
  const router = useRouter()
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/")
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const signUp = (auth, email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
        const currUser = userCredential.user
        updateProfile(currUser, {
          displayName: name
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const signUpWithGoogle = () => {
    signInWithRedirect(auth, GoogleProvider)

    router.push('/signup/success')
    // getRedirectResult(auth)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access Google APIs.
    //     const credential =  GoogleAuthProvider.credentialFromResult(result)
    //     const token = credential.accessToken

    //     // The signed-in user info.
    //     const user = result.user
    //     console.log("hey")
    //     console.log(user)
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //     // The email of the user's account used.
    //     const email = error.customData.email
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error)
        
    //     console.log(error)
    //   })
  }

  const signUpWithFacebook = () => {
    signInWithRedirect(auth, FacebookProvider)

    router.push('/signup/success')
    // getRedirectResult(auth)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access Google APIs.
    //     const credential =  GoogleAuthProvider.credentialFromResult(result)
    //     const token = credential.accessToken

    //     // The signed-in user info.
    //     const user = result.user
    //     console.log("hey")
    //     console.log(user)
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //     // The email of the user's account used.
    //     const email = error.customData.email
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error)
        
    //     console.log(error)
    //   })
  }

  const {
    handleSubmit,
    values,
    handleChange,
    touched,
    errors,
    handleBlur,
    isValid,
    dirty
  } = useFormik({
    initialValues: {
      name: 'foo',
      email: 'foobar@example.com',
      password: 'foobar'
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Required'),
      email: yup.string().email('Invalid email').required('Required'),
      password: yup
        .string()
        .required('Required')
        .min(7, 'Password needs to be at least 7 characters long')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      // TODO: insert backend logic for creating a new user
      signUp(auth, values.email, values.password, values.name)
      router.push('/signup/success')
    }
  })

  // console.log("logging touched ",touched)
  // console.log(values)
  // console.log(errors)

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} container justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h3"
                color="#8E3D57"
                sx={{ fontWeight: 'bold' }}
              >
                Empowering
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" color="#8E3D57">
                <Link href="/support">Skip</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={6} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              color="#8E3D57"
              sx={{ fontWeight: 'bold' }}
            >
              Women
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={12} md={8}>
            <MUIButton
              variant="outlined"
              fullWidth
              startIcon={<FcGoogle />}
              size="large"
              sx={{ justifyContent: 'start' }}
              onClick={signUpWithGoogle}
            >
              Sign up with Google
            </MUIButton>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={6} />
          </Grid>
          <Grid item xs={12} md={8}>
            <MUIButton
              variant="outlined"
              fullWidth
              startIcon={<BsFacebook />}
              size="large"
              sx={{ justifyContent: 'start' }}
              onClick={signUpWithFacebook}
            >
              Sign up with Facebook
            </MUIButton>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Divider>OR</Divider>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputLabel>Name</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              InputLabelProps={{ shrink: true }}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputLabel>Email</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputLabel>Password</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="caption" color="#8E3D57">
              <Link href="/login">Already have an account?</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Button
              type="primary"
              text="Submit"
              disabled={!isValid || !dirty}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Signup
