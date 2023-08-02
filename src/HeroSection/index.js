import { Box } from '@mui/material'

const HeroSection = () => (
  <Box
    id="main"
    component="section"
    sx={{
      backgroundColor: '#3f51b5',
      position: 'relative',
      mt: -1,
      mx: -1,
      py: {
        xs: 8,  // 0px
        sm: 10, // 600px
        md: 13, // 900px
        lg: 14, // 1200px
        xl: 16, // 1536px
      },
    }}
  >
    <Box
      sx={{
        backgroundImage: 'url(/backgrounds/mock_hero.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        opacity: 0.7,
        position: 'absolute',
      }}
    ></Box>
  </Box>
)

export default HeroSection
