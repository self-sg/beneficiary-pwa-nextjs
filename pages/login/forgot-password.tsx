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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ForgotPassword = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

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
      email: 'foobar@example.com'
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Invalid email').required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      setFormSubmitted(true)
      // TODO: insert backend logic for sending verification email
    }
  })

  // console.log("logging touched ",touched)
  // console.log(values)
  // console.log(errors)

  return (
    <div style={{ padding: '20px' }}>
      {formSubmitted ? <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />
        }}
      >
        We have sent a password reset link to your email. Please check your inbox.
      </Alert> : <></>}
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Forgot password?
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Please enter your email address to receive a password reset link.
            </Typography>
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
          {formSubmitted ? (
            <Grid item xs={12} md={8}>
              <Typography variant="h5">
                <Link href="/login">Return to login</Link>
              </Typography>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Button
              type="primary"
              text="Submit"
              disabled={!isValid || !dirty || formSubmitted}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default ForgotPassword
