import type { FC } from 'react'
import { Box, Typography, Stack, Container, Hidden, useMediaQuery, useTheme, Grid, } from '@mui/material'
import Image from 'next/image'
import { hero } from '@/theme/content'

const { BG, title, subtitle, } = hero;
export const Hero: FC = () => {


    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));


    return (<>
        <>
            <Box
                sx={{
                    minHeight: '100vh',
                    minWidth: '100%',
                    mt: { md: '0', lg: '0', sm: '20' },
                    background: `url(${"linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'left',
                    alignItems: 'center',
                }}
            >
                <Box >
                    <Container>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        textAlign: { xs: 'center', md: 'left' }, // Center on xs, left on md and above
                                    }}
                                >
                                    <Stack
                                        sx={{ height: '100%' }}
                                        textAlign={{ xs: 'center', md: 'left' }} // Center on xs, left on md and above
                                        display={'flex'}
                                        justifyContent="center"
                                        alignItems={{ xs: 'center', md: 'flex-start' }} // Center on xs, flex-start on md and above
                                    >
                                        <Typography variant="h2" sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                                            {title}
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            sx={{
                                                background: 'linear-gradient(170deg, #FE6B8B 50%, #FF8E53 50%)',
                                                WebkitBackgroundClip: 'text',
                                                color: 'transparent',
                                                mb: 1,
                                                textFillColor: 'transparent',
                                                display: 'inline-block', // Ensures that the gradient is applied only to the text, not the entire container
                                            }}
                                        >
                                            Opalminds IT
                                        </Typography>

                                        <Typography variant="h5" sx={{ mb: 1 }}>{subtitle}</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Image
                                    src={BG}
                                    alt={"bg"}
                                    width={"100"}
                                    height={"500"}
                                    layout="responsive"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>

        </>
    </>)
}