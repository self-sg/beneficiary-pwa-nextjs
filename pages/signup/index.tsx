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
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../../components/Button'

const Signup = () => {
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   showPassword: false,
  // });
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

  const { handleSubmit, values, handleChange, touched, errors, handleBlur, isValid, dirty } = useFormik({
    initialValues: {
      name: 'foo',
      email: 'foobar@example.com',
      password: 'foobar'
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Required"),
      email: yup.string().email('Invalid email').required("Required"),
      password: yup.string().required("Required").min(7, "Password needs to be at least 7 characters long"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      // TODO: insert backend logic for creating a new user 
      router.push("/signup/success")
    }
  })

  // console.log("logging touched ",touched)
  // console.log(values)
  // console.log(errors)

  return (
    <div style={{ padding:"20px"}}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={12} container justifyContent="space-between">
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
                <Link href="/support">
                  Skip
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box height={6} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              color="#8E3D57"
              sx={{ fontWeight: 'bold' }}
            >
              Women
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box height={24} />
          </Grid>
          <Grid item xs={12}>
            <MUIButton variant="outlined" fullWidth startIcon={<FcGoogle />} size="large" sx={{justifyContent: 'start' }}>
              Sign up with Google
            </MUIButton>
          </Grid>
          <Grid item xs={12}>
            <Box height={6} />
          </Grid>
          <Grid item xs={12}>
            <MUIButton variant="outlined" fullWidth startIcon={<BsFacebook />} size="large" sx={{justifyContent: 'start' }}>
              Sign up with Facebook
            </MUIButton>
          </Grid>
          <Grid item xs={12}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12}>
            <Divider>OR</Divider>
          </Grid>
          <Grid item xs={12}>
            <Box height={16} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Name</InputLabel>
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Email</InputLabel>
          </Grid>
          <Grid item xs={12}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Password</InputLabel>
          </Grid>
          <Grid item xs={12}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Typography variant="caption" color="#8E3D57">
              <Link href="/login">Already have an account?</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box height={8} />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="primary"
              text="Submit"
              disabled={! isValid || ! dirty}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Signup
