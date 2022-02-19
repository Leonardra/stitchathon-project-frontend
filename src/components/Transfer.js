import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, Typography, Stack, Box, MenuItem, Link, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Logo from "../assets/Vector.svg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  height: '70vh',
  bgcolor: 'background.paper',
  boxShadow: "5%",
  p: 8,
};
const validationSchema = yup.object({
  method: yup
    .string('Choose a method')
    .required('method is required'),
  transferTo: yup
    .string('Enter Acount number you wish to transfer to')
    .required('Account Number is required'),
  transferAmount: yup
    .string('Enter Amount you wish to transfer ')
    .required('Amount is required'),
  spreadAmount: yup
    .string('Enter Amount you wish to transfer now')
    .required('Spread Amount is required')

});

const Transfer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      transferAmount: '',
      transferTo: '',
      method: '',
      spreadAmount: '000'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleOpen()
    },
  });
  return (
    <Grid container justifyContent="center" direction="column" alignItems="center">
      <Stack textAlign="center" marginTop={10}>
        <Typography fontSize="86px" fontWeight="700" lineHeight="105px" color="#eee">
          Transfer
        </Typography>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Grid container marginTop={10} >
          <Grid item lg={12} marginTop={5}>
            <TextField
              fullWidth
              variant="outlined"
              id="transferAmount"
              name="transferAmount"
              label="Amount (NGN)"
              type="number"
              placeholder='Enter Amount in Naira'
              value={formik.values.transferAmount}
              onChange={formik.handleChange}
              error={formik.touched.transferAmount && Boolean(formik.errors.transferAmount)}
              helperText={formik.touched.transferAmount && formik.errors.transferAmount}
            />
          </Grid>
          <Grid item lg={12} marginTop={5}>
            <TextField
              fullWidth
              variant="outlined"
              id="transferTo"
              name="transferTo"
              label="Transfer To"
              type="transferTo"
              placeholder='Enter Account Number'
              value={formik.values.transferTo}
              onChange={formik.handleChange}
              error={formik.touched.transferTo && Boolean(formik.errors.transferTo)}
              helperText={formik.touched.transferTo && formik.errors.transferTo}
            />
          </Grid>
          <Grid Item lg={12} marginTop={5}>
            <TextField
              error={formik.touched.method && Boolean(formik.errors.method)}
              helperText={formik.touched.method && formik.errors.method}
              fullWidth
              id="method"
              name="method"
              label="Transfer Method"
              variant="outlined"
              select
              onChange={formik.handleChange}
              value={formik.values.method}

            >
              <MenuItem value="Spread">Spread</MenuItem>
              <MenuItem value="Full">Full</MenuItem>
            </TextField>
          </Grid>
          {formik.values.method.match("Spread") &&
            <Grid item lg={12} marginTop={5}>
              <TextField
                fullWidth
                variant="outlined"
                id="spreadAmount"
                name="spreadAmount"
                label="Spread Amount"
                type="number"
                placeholder='Enter Amount You wish to pay now'
                value={formik.values.spreadAmount}
                onChange={formik.handleChange}
                error={formik.touched.spreadAmounto && Boolean(formik.errors.spreadAmount)}
                helperText={formik.touched.spreadAmount && formik.errors.spreadAmount}
              />
            </Grid>
          }
          <Grid item lg={12} marginTop={5}>
            <Button variant="contained" fullWidth type="submit" sx={{
              background: "#000", height: 60,
              ":hover": {
                background: "#fff",
                color: "#000"
              }
            }}>
              Proceed
            </Button>
          </Grid>
        </Grid>
      </form>
      <Modal
        open={open}
        onClose={!open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={() => { handleClose() }}>Close</Button>
          <Typography fontSize="86px" fontWeight="700" lineHeight="105px" color="rgba(0,0,0,0.4)">
            Pay with 3rd Party
          </Typography>
          <Typography fontSize="24px" fontWeight="400" color="#000">
            We accept all types of payments and see more
          </Typography>

          <Grid
            lg={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop="50px"
          >
            <Grid item>
              <Card sx={{
                padding: 7
              }} >
                <Link
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                  onClick={() => navigate("/recharge")}
                >
                  <Stack direction="row" spacing={2}>
                    <img src={Logo} />
                    <Typography
                      fontWeight="400"
                      color="#000"
                      fontSize="50px"
                      sx={{
                        transition: "font-size 0.5s ease",
                        pointer: "cursor",
                        "&:hover": {
                          color: "#000",
                          fontWeight: "700",
                        },
                      }}
                    >
                      Stitch
                    </Typography>
                  </Stack>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid >

  );
};

export default Transfer;
