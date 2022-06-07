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
import { auth, signInWithEmailAndPassword } from '../../firebase'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PasswordReset = () => {
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   showPassword: false,
  // });

  // TODO: use formik form submitted status if there is
  const [formSubmitted, setFormSubmitted] = useState(false)
  const router = useRouter()

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
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .required('Required')
        .min(7, 'Password needs to be at least 7 characters long'),
      passwordConfirmation: yup.string().oneOf(
        [yup.ref('password'), null],
        'Passwords must match'
      )
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      setFormSubmitted(true)
      // TODO: insert backend logic for resetting password
      
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
              Password reset
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={24} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Please enter a new password.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputLabel>New Password</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputLabel>Confirm Password</InputLabel>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              id="passwordConfirmation"
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={handleChange}
              error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
              helperText={touched.passwordConfirmation && errors.passwordConfirmation}
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

export default PasswordReset
