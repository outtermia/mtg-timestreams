import {
  Box,
  Container,
  Typography,
} from '@mui/material'

import { defaultSectionStyles } from 'lib/constants'

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
  // py: {
  //   xs: 10,  // 0px
  //   sm: 15, // 600px
  //   md: 20, // 900px
  //   lg: 20, // 1200px
  //   xl: 30, // 1536px
  // },
  ...defaultSectionStyles,
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
