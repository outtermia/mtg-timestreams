import { useEffect } from 'react'
import {
  Container,
  ImageList,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab'

import theme from 'lib/theme'

import HeroSection from 'HeroSection'
import CardTile from './CardTile'


const EVENTS = [
  {
    title: 'Event 1',
    date: '2021-10-01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cards: [
      {
        owned: false,
        code: 'cmr',
        number: 72,
      },
      {
        owned: false,
        code: 'cmr',
        number: 42,
      },
      {
        owned: false,
        code: 'mh1',
        number: 116,
      },
    ],
  },
  {
    title: 'Event 2',
    date: '2021-10-02',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cards: [
      {
        owned: false,
        code: 'cmr',
        number: 72,
      },
      {
        owned: false,
        code: 'cmr',
        number: 42,
      },
    ],
  },
]

const Event = ({ title, date, description, cards }: any) => {
  const CardTiles = cards.map((card: any) => <CardTile {...card} />)

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <ImageList sx={{ width: 500 }}>
          {CardTiles}
        </ImageList>
      </TimelineContent>
    </TimelineItem>
  )
}

function App() {
  const events = EVENTS.map((event) => <Event {...event} />)

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

      <Container>
        <Timeline>
          {events}
        </Timeline>
      </Container>
    </ThemeProvider>
  )
}

export default App
