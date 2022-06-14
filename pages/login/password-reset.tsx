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
  Alert
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
import { auth, signInWithEmailAndPassword } from '../../firebase'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const PasswordReset = () => {
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   showPassword: false,
  // });

  // TODO: use formik form submitted status if there is
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const router = useRouter()

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
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .required('Required')
        .min(7, 'Password needs to be at least 7 characters long'),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      setFormSubmitted(true)
      // TODO: insert backend logic for resetting password
      setAlertVisible(true)
      setTimeout(() => setAlertVisible(false), 2000)
    }
  })

  // console.log("logging touched ",touched)
  // console.log(values)
  // console.log(errors)

  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit}>
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
              height: '80px',
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
              zIndex: 10,
              position: 'absolute',
              top: '0px',
              width: '100vw'
            }}
          >
            Password reset successfully! Please login again.
          </Alert>
        ) : (
          <></>
        )}
        <Grid container justifyContent="center">
          <Grid item xs={11} md={8}>
            <Box height={160} />
          </Grid>
          <Grid item xs={11} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Password reset
            </Typography>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={11} md={8}>
            <Typography variant="h6">Please enter a new password.</Typography>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={11} md={8}>
            <InputLabel>New Password</InputLabel>
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
              onBlur={handleBlur}
              sx={{
                '& fieldset': {
                  borderRadius: '8px'
                }
              }}
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
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={11} md={8}>
            <InputLabel>Confirm Password</InputLabel>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={11} md={8}>
            <TextField
              fullWidth
              id="passwordConfirmation"
              name="passwordConfirmation"
              type={showPasswordConfirmation ? 'text' : 'password'}
              value={values.passwordConfirmation}
              onChange={handleChange}
              error={
                touched.passwordConfirmation &&
                Boolean(errors.passwordConfirmation)
              }
              helperText={
                touched.passwordConfirmation && errors.passwordConfirmation
              }
              onBlur={handleBlur}
              sx={{
                '& fieldset': {
                  borderRadius: '8px'
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPasswordConfirmation(!showPasswordConfirmation)
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPasswordConfirmation ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={11} md={8}>
            <Box height={8} />
          </Grid>
          <Grid
            container
            xs={11}
            md={8}
            sx={{
              height: 160,
              marginBottom: '48px',
              display: 'flex',
              alignItems: 'flex-end'
            }}
          >
            {formSubmitted ? (
              <InputLabel
                sx={{
                  color: '#8E3D57',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Link href="/login">Return to login</Link>
              </InputLabel>
            ) : (
              <></>
            )}
          </Grid>
          <Grid container xs={11} md={8}>
            <Button
              type="submit"
              text="Submit"
              disabled={!isValid || !dirty || formSubmitted}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default PasswordReset
