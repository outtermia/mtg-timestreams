import {
  Box,
  Typography,
} from '@mui/material'


import { HERO } from './content'


const sectionStyles = {
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  m: -1,
  px: {
    xs: 4,  // 0px
    sm: 15, // 600px
    md: 30, // 900px
    lg: 46, // 1200px
    xl: 50, // 1536px
  },
}


const HeroSection = () => (
  <Box
    id="main"
    component="section"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
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
  </Box>
)

export default HeroSection
