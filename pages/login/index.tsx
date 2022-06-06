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
import {auth, signInWithEmailAndPassword} from '../../firebase'

const Signup = () => {
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   showPassword: false,
  // });
  const router = useRouter()

  const signIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error)
    });
  }

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
      // TODO: insert backend logic for creating a new user
      signIn(auth, values.email, values.password)
      router.push('/support')
    }
  })

  // console.log("logging touched ",touched)
  // console.log(values)
  // console.log(errors)

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              color="#8E3D57"
              sx={{ fontWeight: 'bold' }}
            >
              Welcome Back!
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Login
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
            >
              Log in with Google
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
            >
              Log in with Facebook
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
          <Grid container item xs={12} md={8} justifyContent='space-between' >
            <Typography variant="caption" color="#8E3D57">
              <Link href="/signup">Don't have an account?</Link>
            </Typography>
            <Typography variant="caption" color="#8E3D57">
              <Link href="/login/forgot-password">Forgot password</Link>
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
