import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, Typography, Stack, Link, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const validationSchema = yup.object({
    biller: yup
        .string('Choose a biller')
        .required('biller is required'),
    product: yup
        .string('Choose a product')
        .required('product is required'),
    phone: yup
        .string('Enter your phone number')
        .min(11, 'Phone Number should be of 11 characters length')
        .required('Phone Number is required'),
});

const Register = () => {
    const formik = useFormik({
        initialValues: {
            biller: '',
            product: '',
            phone: ''
           

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const navigate = useNavigate();

    return (
        <Grid container justifyContent="center" direction="column" alignItems="center">
            <Stack textAlign="center" marginTop={10}>
                <Typography fontSize="86px" fontWeight="700" lineHeight="105px" color="#eee">
                    Recharge
                </Typography>
            </Stack>
            <form onSubmit={formik.handleSubmit}>
                <Grid container marginTop={10} >
                    <Grid Item lg={12}>
                        <TextField
                            error={formik.touched.biller && Boolean(formik.errors.biller)}
                            helperText={formik.touched.biller && formik.errors.biller}
                            fullWidth
                            id="biller"
                            name="biller"
                            label="Biller"
                            variant="outlined"
                            select
                            onChange={formik.handleChange}
                            value={formik.values.biller}

                        >
                            <MenuItem value="MTN">MTN</MenuItem>
                            <MenuItem value="9Mobile">9Mobile</MenuItem>
                            <MenuItem value="GLO">GLO</MenuItem>
                            <MenuItem value="Airtel">Airtel</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid Item lg={12} marginTop={5}>
                        <TextField
                            error={formik.touched.product && Boolean(formik.errors.product)}
                            helperText={formik.touched.product && formik.errors.product}
                            fullWidth
                            id="product"
                            name="product"
                            label="Product"
                            variant="outlined"
                            select
                            onChange={formik.handleChange}
                            value={formik.values.product}

                        >
                            <MenuItem value="Postpaid">Postpaid</MenuItem>
                            <MenuItem value="Prepaid">Prepaid</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item lg={12} marginTop={5}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="phone"
                            placeholder='enter Phone Number'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </Grid>
                    <Grid item lg={12} marginTop={5}>
                        <Button variant="contained" fullWidth type="submit" sx={{
                            background: "#000", height: 60,
                            ":hover": {
                                background: "#fff",
                                color: "#000"
                            }
                        }}>
                           Proceed to Buy
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>

    );
};

export default Register;
