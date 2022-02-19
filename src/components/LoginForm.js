import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, Typography, Stack, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { retrieveClientToken, generateClientAssertion } from "../components/TokenGenerator"


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const navigate = useNavigate();

    const GenerateToken = () => {
        const clientId = "test-e2a28368-5431-4e7e-b6bd-dc45ac5dfa71";
        const clientAssertion = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjgwNDE2MDQ5QzE0MjZDNDI0MzFGOERDMEUyRjUyQ0JEMDM1RjU1RUMifQ.eyJpYXQiOjE1OTg0NTQ0OTAsIm5iZiI6MTU5ODQ1NDQ5MCwiZXhwIjoxNTk4NDU0NzkwLCJhdWQiOiJodHRwczovL3NlY3VyZS5zdGl0Y2gubW9uZXkvY29ubmVjdC90b2tlbiIsImlzcyI6InRlc3QtZTJhMjgzNjgtNTQzMS00ZTdlLWI2YmQtZGM0NWFjNWRmYTcxIiwic3ViIjoidGVzdC1lMmEyODM2OC01NDMxLTRlN2UtYjZiZC1kYzQ1YWM1ZGZhNzEiLCJqdGkiOiJjMTZjMzAzMTcxMGI1MDk3ZDA5MmI3MmI3MGY1Yjc4NSJ9.tYFABuPfLXImaOPO8GszCijcnO3j91103JegFU2LORrXTp6EkreVKEuMmWGHxqbiFmY8m03WbFHb_thM6Vhe0pKkwHDktH7JaYvLoaEIy4R4Bj_obtJDRgEB1t1xsQGzyU4LigqVaRjoEPEOtf6LQeGYztiIPojzrKnnw8Dx404KCBGBp51L_VX_N410s3QgckYfMfjALXGkTgNYP-qvcSi4yV8tBTGaLYAbe65w1t8MNUCk9WGjT4zSHxySPIn7ILsBulVf75-Ro4SKU1Rhk9X534-NLHmgyR_syvXVwTQy_Z8PgHtihOCSSbrkrW-y-q2SFOEe5qmpKMEmQragNw";
        const resultFromPromise = retrieveClientToken(clientId = clientId, clientAssertion = clientAssertion);
        alert(JSON.stringify(resultFromPromise, null, 2));
    };

    return (
        <Grid container justifyContent="center" direction="column" alignItems="center">
            <Stack textAlign="center" marginTop={10}>
                <Typography fontSize="86px" fontWeight="400" lineHeight="105px" color="#000">
                    Log In
                </Typography>
                <Stack direction="row" marginTop={6}>
                    <Typography
                        fontWeight="400"
                        color="rgba(0, 0, 0, 0.5)"
                        fontSize="18px"
                    >
                        Don't have an account ? &nbsp;
                    </Typography>
                    <Link sx={{ textDecoration: "none", cursor: "pointer" }}
                        onClick={
                            () => navigate('/register')
                        } >
                        <Typography
                            fontWeight="400"
                            color="#000"
                            fontSize="18px"
                        >
                            Sign Up
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
            <form onSubmit={formik.handleSubmit}>
                <Grid container marginTop={10}>
                    <Grid Item lg={12}>
                        <TextField
                            fullWidth
                            id="outlined-basic" variant="outlined"
                            id="email"
                            name="email"
                            label="Email"
                            placeholder='enter email address (ex. mail@send.com)'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item lg={12} marginTop={5}>
                        <TextField
                            fullWidth
                            id="outlined-basic" variant="outlined"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder='enter password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>
                    <Grid item lg={12} marginTop={5}>
                        <Button variant="contained" fullWidth type="submit" sx={{ background: "#000", height: 60 }}
                            onClick={GenerateToken}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>

    );
};

export default LoginForm;
