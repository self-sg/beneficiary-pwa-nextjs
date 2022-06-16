import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  InputLabel,
  Box,
  makeStyles
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
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const GoogleProvider = new GoogleAuthProvider()
  const FacebookProvider = new FacebookAuthProvider()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user is logged in')
      router.push('/signup/success')
    } else {
      console.log('user is not logged in')
    }
  })

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

  const signUpWithProvider = (provider) => {
    signInWithRedirect(auth, provider)

    getRedirectResult(auth)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      })

    
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
      name: '',
      email: '',
      password: ''
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
      signUp(auth, values.email, values.password, values.name)
    }
  })

  return (
    <div style={{ padding: '30px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={11} md={8} container justifyContent="space-between">
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
          <Grid item xs={11} md={8}>
            <Box height={6} />
          </Grid>
          <Grid item xs={11} md={8}>
            <Typography
              variant="h3"
              color="#8E3D57"
              sx={{ fontWeight: 'bold' }}
            >
              Women
            </Typography>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={11} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="black">
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={11} md={8}>
            <MUIButton
              variant="outlined"
              fullWidth
              startIcon={
                <FcGoogle style={{ marginRight: '20px' }} size="30px" />
              }
              size="large"
              sx={{
                justifyContent: 'start',
                borderColor: '#737373',
                height: '52px',
                textTransform: 'none',
                color: '#737373',
                fontSize: '16px',
                borderRadius: '8px'
              }}
              onClick={() => signUpWithProvider(GoogleProvider)}
            >
              Sign up with Google
            </MUIButton>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={6} />
          </Grid>
          <Grid item xs={11} md={8}>
            <MUIButton
              variant="outlined"
              fullWidth
              startIcon={
                <BsFacebook
                  style={{ color: 'blue', marginRight: '20px' }}
                  size="30px"
                />
              }
              size="large"
              sx={{
                justifyContent: 'start',
                borderColor: '#737373',
                height: '52px',
                textTransform: 'none',
                color: '#737373',
                fontSize: '16px',
                borderRadius: '8px'
              }}
              onClick={() => signUpWithProvider(FacebookProvider)}
            >
              Sign up with Facebook
            </MUIButton>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={11} md={8}>
            <Divider sx={{ borderBottomWidth: 10 }}>
              <Typography variant="h6" color="#737373">
                OR
              </Typography>
            </Divider>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={16} />
          </Grid>
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
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              InputLabelProps={{ shrink: true }}
              onBlur={handleBlur}
              sx={{
                '& fieldset': {
                  borderRadius: '8px'
                }
              }}
            />
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={16} />
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
              onChange={handleChange}
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
            <Box height={16} />
          </Grid>
          <Grid item xs={11} md={8}>
            <InputLabel>Password</InputLabel>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={11} md={8}>
            <TextField
              fullWidth
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
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
            <InputLabel sx={{ color: '#8E3D57' }}>
              <Link href="/login">Already have an account?</Link>
            </InputLabel>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={24} />
          </Grid>
          <Grid container xs={11} md={8}>
            <Button type="submit" text="Submit" disabled={!isValid || !dirty} />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Signup
