import React, { useEffect, useState } from "react";
import Logo from "../assets/Vector.svg";
import {
  Grid,
  Container,
  Link,
  Stack,
  Typography,
  Card,
  Drawer,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Nav = () => {
  const navigate = useNavigate();
  const [rotate, setRotate] = useState(0);
  const [space, setSpace] = useState(7);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Container sx={{ mt: "56px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing="10px"
          >
            <img src={Logo} alt="logo" />
            <Typography fontWeight="500" fontSize="40px">
              Stitchr
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing="50px"
          >
            <Link
              sx={{ textDecoration: "none", cursor: "pointer" }}
              onClick={() => {
                navigate("/about-us");
              }}
            >
              <Typography fontWeight="400" fontSize="18px" color="#000">
                about
              </Typography>
            </Link>
            <Card
              elevation={0}
              onClick={() => setOpenDrawer(!openDrawer)}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              sx={{ background: hover ? "#000" : "#fff", borderRadius: "10%" }}
            >
              <Stack
                sx={{ height: "70px", width: "70px" }}
                spacing={`7px`}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width="45px"
                  height="2px"
                  sx={{ background: hover ? "#fff" : "#000" }}
                />
                <Box
                  width="45px"
                  height="2px"
                  sx={{ background: hover ? "#fff" : "#000" }}
                />
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
      <Container></Container>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            minWidth: "100vw",
            minHeight: "100vh",
            backgroundColor: "#fff",
          }}
        >
          <Grid
            container
            marginTop="56px"
            paddingRight={10}
            justifyContent="flex-end"
          >
            <Card
              elevation={0}
              onClick={() => setOpenDrawer(!openDrawer)}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              sx={{ background: hover ? "#000" : "#fff", borderRadius: "100%" }}
            >
              <Stack
                sx={{ height: "70px", width: "70px" }}
                spacing={`0`}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width="45px"
                  height="2px"
                  sx={{
                    background: hover ? "#fff" : "#000",
                    transform: `rotate(45deg)`,
                  }}
                />
                <Box
                  width="45px"
                  height="2px"
                  sx={{
                    background: hover ? "#fff" : "#000",
                    transform: `rotate(-45deg)`,
                  }}
                />
              </Stack>
            </Card>
          </Grid>
          <Grid
            container
            marginTop="40px"
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={7}
          >
            <Grid item data-aos="fade-left">
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  navigate("/contact-us");
                  setOpenDrawer(false);
                }}
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
                  Contact
                </Typography>
              </Link>
            </Grid>
            <Grid item data-aos="fade-right">
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  navigate("/team");
                  setOpenDrawer(false);
                }}
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
                  Our Team
                </Typography>
              </Link>
            </Grid>
            <Grid item data-aos="fade-left">
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  navigate("/sponsor");
                  setOpenDrawer(false);
                }}
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
                  Sponsor
                </Typography>
              </Link>
            </Grid>
            <Stack direction="row" spacing={7} marginTop={8} alignText="center">
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  navigate("/login");
                  setOpenDrawer(false);
                }}
              >
                <Typography fontWeight="400" fontSize="25px" color="#000">
                  Log in
                </Typography>
              </Link>
              <Link
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  navigate("/register");
                  setOpenDrawer(false);
                }}
              >
                <Typography fontWeight="400" fontSize="25px" color="#000">
                  Sign up
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default Nav;
