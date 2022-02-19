import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, Typography, Stack, Link, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';

const Register = () => {

    const navigate = useNavigate();
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
    const RechargeForm = () => {
        const formik = useFormik({
            initialValues: {
                biller: '',
                product: '',
                phone: ''


            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                console.log("values ::::: ", values)
                alert(JSON.stringify(values, null, 2));
            },
        });
        return (
            <form onSubmit={formik.handleSubmit, handleNext}>
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
            </form >
        );

    };

    const steps = [
        {
            label: 'Select campaign settings',
            description: <RechargeForm />,
        },
        {
            label: 'Create an ad group',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Grid container justifyContent="center" direction="column" alignItems="center">
            <Stack textAlign="center" marginTop={10}>
                <Typography fontSize="86px" fontWeight="700" lineHeight="105px" color="#eee">
                    Recharge
                </Typography>
            </Stack>
            {/* stepper */}
            <>

                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>


            </>

        </Grid>

    );
};

export default Register;
