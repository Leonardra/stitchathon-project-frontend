import { Typography, Grid, Stack, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/stitchr");
  };

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
          About Us
        </Typography>
        <Typography
          alignText="center"
          fontSize="25px"
          marginTop={6}
          width={700}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </Typography>
      </Stack>

      <Grid item lg={12} marginTop={5}>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ background: "#000", height: 60 }}
          onClick={GoHome}
        >
          Go Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default About;
