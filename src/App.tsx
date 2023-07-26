import { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'lib/theme'

import HeroSection from 'HeroSection'
import TimelineSection from 'TimelineSection'

function App() {
  useEffect(() => {
      const { NODE_ENV } = process.env

      let pageTitle = document.title
      if (NODE_ENV === 'development') {
        pageTitle = `[DEV] MTG Time Streams`
      }

      document.title = pageTitle
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <HeroSection />

      <TimelineSection />
    </ThemeProvider>
  )
}

export default App
