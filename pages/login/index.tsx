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
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged
} from '../../firebase'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const GoogleProvider = new GoogleAuthProvider()
  const FacebookProvider = new FacebookAuthProvider()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user is logged in')
      router.push('/')
    } else {
      console.log('user is not logged in')
    }
  })

  const signIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const signInWithProvider = (provider) => {
    signInWithRedirect(auth, provider)

    getRedirectResult(auth)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      })

    router.push('/signup/success')
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
      email: yup.string().email('Invalid email').required('Required'),
      password: yup
        .string()
        .required('Required')
        .min(7, 'Password needs to be at least 7 characters long')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      signIn(auth, values.email, values.password)
      router.push('/support')
    }
  })

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={11} md={8}>
            <Typography
              variant="h3"
              color="#8E3D57"
              sx={{ fontWeight: 'bold' }}
            >
              Welcome Back!
            </Typography>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={11} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="black">
              Login
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
              onClick={() => signInWithProvider(GoogleProvider)}
            >
              Log in with Google
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
              onClick={() => signInWithProvider(FacebookProvider)}
            >
              Log in with Facebook
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
            <Box height={8} />
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
          <Grid container item xs={11} md={8} justifyContent="space-between">
            <InputLabel sx={{ color: '#8E3D57' }}>
              <Link href="/signup">Don't have an account?</Link>
            </InputLabel>
            <InputLabel sx={{ color: '#8E3D57' }}>
              <Link href="/login/forgot-password">Forgot password</Link>
            </InputLabel>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={24} />
          </Grid>
          <Grid container xs={11} md={8}>
            <Button
              type="submit"
              text="Submit"
              disabled={!isValid || !dirty}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Login
