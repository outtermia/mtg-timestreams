import {
  Box,
  ImageList,
} from '@mui/material'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab'

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

const sectionStyles = {
  m: -1,
  px: {
    xs: 4,  // 0px
    sm: 15, // 600px
    md: 30, // 900px
    lg: 46, // 1200px
    xl: 50, // 1536px
  },
}


function TimelineSection () {
  const events = EVENTS.map((event) => <Event {...event} />)

  return (
    <Box
      id="timeline"
      component="section"
    >
      <Timeline>
        {events}
      </Timeline>
    </Box>
  )
}

export default TimelineSection
