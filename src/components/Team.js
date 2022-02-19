import React from "react";
import { Grid, Container, Box, Card, Typography, Stack, Link } from "@mui/material";
import Picture from "../assets/DSC06229.jpg";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const Team = () => {
  return (
    <Container sx={{ mt: "56px" }}>
      <Grid spacing={5} container lg={12}>
        <Grid item lg={6} spacing={10}>
          <Card sx={{ maxWidth: 745 }} elevation="2">
            <CardContent>
              <Typography gutterButton fontSize="76px" fontWeight="700" lineHeight="110px" color="rgba(0, 0, 0, 0.38)">
                Shola Oretan
              </Typography>
              <Typography fontSize="24px" mt="0" fontWeight="500" color="#000">
                Software Engineer / Product Designer
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1} padding={1.4}>
                <Typography fontWeight="400" fontSize="18px" color="#000">Github</Typography>
                <Link sx={{ textDecoration: "none", cursor: "pointer" }} >
                  <Typography fontWeight="400" fontSize="18px" color="blue">@omimiCode</Typography>
                </Link>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6} spacing={10}>
          <Card sx={{ maxWidth: 745 }} elevation="2">
            <CardContent>
              <Typography gutterButton fontSize="76px" fontWeight="700" lineHeight="110px" color="rgba(0, 0, 0, 0.38)">
                Oluwanishola
              </Typography>
              <Typography fontSize="24px" mt="0" fontWeight="500" color="#000">
                Software Engineer / Product Designer
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1} padding={1.4}>
                <Typography fontWeight="400" fontSize="18px" color="#000">Github</Typography>
                <Link sx={{ textDecoration: "none", cursor: "pointer" }} >
                  <Typography fontWeight="400" fontSize="18px" color="blue">@omimiCode</Typography>
                </Link>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6} spacing={10}>
          <Card sx={{ maxWidth: 745 }} elevation="2">
            <CardContent>
              <Typography gutterButton fontSize="76px" fontWeight="700" lineHeight="110px" color="rgba(0, 0, 0, 0.38)">
                Dimeji
              </Typography>
              <Typography fontSize="24px" mt="0" fontWeight="500" color="#000">
                Software Engineer (Heavy: backend)
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1} padding={1.4}>
                <Typography fontWeight="400" fontSize="18px" color="#000">Github</Typography>
                <Link sx={{ textDecoration: "none", cursor: "pointer" }} >
                  <Typography fontWeight="400" fontSize="18px" color="blue">@omimiCode</Typography>
                </Link>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6} spacing={10}>
          <Card sx={{ maxWidth: 745 }} elevation="2">
            <CardContent>
              <Typography gutterButton fontSize="76px" fontWeight="700" lineHeight="110px" color="rgba(0, 0, 0, 0.38)">
                Ehi
              </Typography>
              <Typography fontSize="24px" mt="0" fontWeight="500" color="#000">
                Software Engineer (Heavy: backend)
              </Typography> 
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={1} padding={1.4}>
                <Typography fontWeight="400" fontSize="18px" color="#000">Github</Typography>
                <Link sx={{ textDecoration: "none", cursor: "pointer" }} >
                  <Typography fontWeight="400" fontSize="18px" color="blue">@omimiCode</Typography>
                </Link>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Team;
