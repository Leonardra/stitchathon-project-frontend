import React, { useEffect, useState } from "react";
import { Container, Stack, Typography, Box, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 5000
    });
    AOS.refresh();
  }, []);
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
            data-aos="fade-right"
            fontWeight="400"
            fontSize="18px"
          >
            We make it happen
          </Typography>
          <Grid
            lg={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid data-aos="fade-down-right">
              <Box>
                <Link
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                  onClick={() => navigate("/recharge")}
                >
                  <Typography
                    fontWeight="400"
                    color="#d3d3d3"
                    fontSize="100px"
                    sx={{
                      transition: "font-size 0.5s ease",
                      pointer: "cursor",
                      "&:hover": {
                        color: "#000",
                        fontWeight: "700",
                      },
                    }}
                  >
                    Recharge
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid data-aos="flip-up">
              <Box>
                <Link
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                  onClick={() => navigate("/transfer")}
                >
                  <Typography
                    fontWeight="400"
                    color="#d3d3d3"
                    fontSize="100px"
                    sx={{
                      transition: "font-size 0.5s ease",
                      pointer: "cursor",
                      "&:hover": {
                        color: "#000",
                        fontWeight: "700",
                      },
                    }}
                  >
                    Transfer
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid data-aos="fade-up-left">
              <Box>
                <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                  <Typography
                    fontWeight="400"
                    color="#d3d3d3"
                    fontSize="100px"
                    sx={{
                      transition: "font-size 0.5s ease",
                      pointer: "cursor",
                      "&:hover": {
                        color: "#000",
                        fontWeight: "700",
                      },
                    }}
                  >
                    Bills
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{ mt: "300px" }} width="800px">
          <Typography fontWeight="400" fontSize="18px">
            Leading payment system with one solid payment
          </Typography>
          <Typography fontWeight="400" fontSize="18px">
            infrastructure. We help you pay with your stitched accounts.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
