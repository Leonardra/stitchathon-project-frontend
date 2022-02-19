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
                    sx={{ mt: "100px" }}
                    alignContent="center"
                >

                    <Grid
                        lg={12}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid data-aos="flip-up">
                            <Box>
                                <Link sx={{ textDecoration: "none", cursor: "pointer" }} >
                                    <Typography
                                        fontWeight="400"
                                        color="#d3d3d3"
                                        fontSize="400px"
                                        sx={{
                                            transition: "font-size 0.5s ease",
                                            pointer: "cursor",
                                            "&:hover": {
                                                color: "#000",
                                                fontWeight: "700"
                                            },
                                        }}
                                    >
                                        404
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>

                        <Box>
                            <Link sx={{ textDecoration: "none", cursor: "pointer" }} >
                                <Typography
                                    fontWeight="400"
                                    color="#000"
                                    fontSize="60px"
                                >
                                    So Sorry 😭
                                </Typography>
                            </Link>
                        </Box>

                    </Grid >
                </Stack>

            </Stack>
        </Container>
    );
};

export default Hero;
