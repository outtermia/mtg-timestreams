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

import { EVENTS } from 'data/mock'

import CardTile from './CardTile'


const Event = ({ title, date, description, cards }: any) => {
  const CardTiles = cards.map((card: any) => <CardTile {...card} />)

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <h3>{title}</h3>
        <p>{date}</p>
        {description.map((line) => <p>{line}</p>)}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <ImageList>
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
