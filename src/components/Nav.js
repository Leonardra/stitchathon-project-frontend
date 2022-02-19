import React, { useState } from "react";
import Logo from "../assets/Vector.svg";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Grid, Container, Link, Stack, Typography, Card } from "@mui/material";
import { Box } from "@mui/system";

const Nav = () => {
  const [rotate, setRotate] = useState(0);
  const [space, setSpace] = useState(7);
  return (
    <Container sx={{ mt: "56px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Typography fontWeight="400" fontSize="18px" color="#000">
              about
            </Typography>
          </Link>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing="12px"
          >
            <Typography fontWeight="400" fontSize="18px">
              menu
            </Typography>
            <Card
              elevation={0}
              onMouseEnter={() => {
                setRotate(45);
                setSpace(0);
              }}
              onMouseLeave={() => {
                setRotate(0);
                setSpace(7);
              }}
              sx={{
                background: space === 7 ? "#fff" : "#000",
                borderRadius: "100%",
              }}
            >
              <Stack
                sx={{ height: "70px", width: "70px" }}
                spacing={`${space}px`}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width="45px"
                  height="2px"
                  sx={{
                    background: space === 7 ? "#000" : "#fff",
                    transform: `rotate(${rotate}deg)`,
                  }}
                />
                <Box
                  width="45px"
                  height="2px"
                  backgroundColor="#000"
                  sx={{
                    background: space === 7 ? "#000" : "#fff",
                    transform: `rotate(-${rotate}deg)`,
                  }}
                />
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Nav;
