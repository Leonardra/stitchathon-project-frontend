import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  userName: yup.string("Enter your username").required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Stack textAlign="center" marginTop={10}>
        <Typography
          fontSize="86px"
          fontWeight="400"
          lineHeight="105px"
          color="#000"
        >
          Sign Up
        </Typography>
        <Stack direction="row" marginTop={6}>
          <Typography
            fontWeight="400"
            color="rgba(0, 0, 0, 0.5)"
            fontSize="18px"
          >
            Already Have An Account ? &nbsp;
          </Typography>
          <Link
            sx={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            <Typography fontWeight="400" color="#000" fontSize="18px">
              Log In
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Grid container marginTop={10}>
          <Grid item lg={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              id="userName"
              name="userName"
              label="Username"
              type="userName"
              placeholder="enter username"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
          </Grid>
          <Grid Item lg={12} marginTop={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              placeholder="enter email address (ex. mail@send.com)"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item lg={12} marginTop={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item lg={12} marginTop={5}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ background: "#000", height: 60 }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default RegisterForm;
