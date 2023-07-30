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
  ...defaultSectionStyles,
}


const HeroSection = () => (
  <Container
    id="main"
    component="section"
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
