import {
  Box,
  Container,
  Typography,
} from '@mui/material'


import { HERO } from './content'


const sectionStyles = {
  // backgroundImage: 'url(/backgrounds/mock_hero.jpg)',
  // backgroundPosition: 'center center',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // m: -1,
  // pl: {
  //   lg: 12
  // },
  // pr: {
  //   lg: 60,
  //   xl: 116,
  // },
  px: {
    xs: 4,  // 0px
    sm: 15, // 600px
    md: 30, // 900px
    lg: 46, // 1200px
    xl: 25, // 1536px
  },
  // py: {
  //   xs: 10,  // 0px
  //   sm: 15, // 600px
  //   md: 20, // 900px
  //   lg: 20, // 1200px
  //   xl: 30, // 1536px
  // },
}


const HeroSection = () => (
  <Container
    id="main"
    component="section"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    fixed
    sx={sectionStyles}
  >
    <Box>
      <Typography variant="h1">
        {HERO.titleA}
      </Typography>
      <Typography variant="h2">
        {HERO.titleB}
      </Typography>

      <Typography
        variant="body1"
        sx={{ my: 3 }}
        >
        {HERO.body}
      </Typography>
    </Box>
  </Container>
)

export default HeroSection
