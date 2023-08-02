import {
  Box,
  Container,
  Typography,
} from '@mui/material'

import { defaultSectionStyles } from 'lib/constants'

import { ABOUT } from './content'


const sectionStyles = {
  ...defaultSectionStyles,
}


const AboutSection = () => (
  <Container
    id="about"
    component="section"
    fixed
    sx={sectionStyles}
  >
    <Box>
      <Typography variant="h1">
        {ABOUT.titleA}
      </Typography>
      <Typography variant="h2">
        {ABOUT.titleB}
      </Typography>

      <Typography
        variant="body1"
        sx={{ my: 3 }}
        >
        {ABOUT.body}
      </Typography>
    </Box>
  </Container>
)

export default AboutSection
