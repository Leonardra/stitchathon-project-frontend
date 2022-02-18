import React from "react";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
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
          <Typography
            fontWeight="400"
            fontSize="18px"
          >We make it happen</Typography>
          <Grid
            lg={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid>
              <Box>
                <Typography
                  fontWeight="400"
                  color="#d3d3d3"
                  fontSize="100px"
                  sx={{
                    transition: "font-size 0.5s ease",
                    pointer: "cursor",
                    "&:hover": {
                      color: "#000",
                      fontWeight: "700"
                    },
                  }}
                >
                  Recharge
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography
                  fontWeight="400"
                  color="#d3d3d3"
                  fontSize="100px"
                  sx={{
                    transition: "font-size 0.5s ease",
                    pointer: "cursor",
                    "&:hover": {
                      color: "#000",
                      fontWeight: "700"
                    },
                  }}
                >
                  Transfer
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography
                  fontWeight="400"
                  color="#d3d3d3"
                  fontSize="100px"
                  sx={{
                    transition: "font-size 0.5s ease",
                    pointer: "cursor",
                    "&:hover": {
                      color: "#000",
                      fontWeight: "700"
                    },
                  }}
                >
                  Bills
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ mt: "300px" }} width="800px">
          <Typography fontWeight="400"
            fontSize="18px">
            Leading payment system with one solid payment
          </Typography>
          <Typography fontWeight="400"
            fontSize="18px">
            infrastructure. We help you pay with your stitched accounts.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
