import React from "react";
import Logo from "../assets/Vector.svg";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Grid, Container, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Nav = () => {
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
          <Typography variant="h4">Stitchr</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing="50px"
        >
          <Link>about</Link>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing="12px"
          >
            <Typography variant="p">menu</Typography>
            <Stack
              spacing={`${7}px`}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="45px"
                height="2px"
                backgroundColor="#000"
                sx={{ transform: "rotate(45deg)" }}
              />
              <Box
                width="45px"
                height="2px"
                backgroundColor="#000"
                sx={{ transform: "rotate(-45deg)" }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Nav;
