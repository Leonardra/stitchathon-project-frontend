import React from "react";
import { Grid, Container, Box, Card, Typography } from "@mui/material";
import Picture from "../assets/DSC06229.jpg";

const Team = () => {
  return (
    <Container sx={{ mt: "56px" }}>
      <Grid container lg="12">
        <Box backgroundColor="#f0f0f0" direction="row">
          <Card height="360px" width="380px" elevation="none">
            <img src={Picture} width="20%" height="100%" />
          </Card>
          <Typography>Oluwatobi Jolayemi</Typography>
        </Box>
      </Grid>
    </Container>
  );
};

export default Team;
