import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { color } from "@mui/system";
const Hero = () => {
  return (
    <Container>
      <Stack direction="column">
        <Stack
          direction="column"
          spacing="16px"
          sx={{ mt: "150px" }}
          alignContent="center"
        >
          <Typography variant="h6">We make it happen</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignContent="center"
          >
            <Box>

            </Box>
         
            <Typography
              variant="h3"
              color="#d3d3d3"
              spacing="71px"
              sx={{
                "&:hover": {
                  color: "#000",
                  textDecoration: "underline",
                  textDecorationThickness: "15%",
                  fontWeight: "bold",
                },
              }}
            >
              Recharge
            </Typography>
            <Typography
              variant="h3"
              color="#d3d3d3"
              transition="font-weight .4s ease-out-in"
              sx={{
                "&:hover": {
                  color: "#000",
                  textDecoration: "underline",
                  textDecorationThickness: "15%",
                  fontWeight: "100",
                  fontWeight: "900 cursor: pointer",
                },
              }}
            >
              Transfer
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ mt: "100px" }} width="800px">
          <Typography variant="p" fontWeight="semi-bold">
            Leading payment system with one solid payment
          </Typography>
          <Typography variant="p" fontWeight="semi-bold">
            infrastructure. We help you pay with your stitched accounts.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
