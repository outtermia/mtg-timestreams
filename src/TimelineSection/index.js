import {
  Container,
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
        <ImageList>
          {CardTiles}
        </ImageList>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3>{title}</h3>
        <p>{date}</p>
        {description.map((line) => <p>{line}</p>)}
      </TimelineContent>
    </TimelineItem>
  )
}

function TimelineSection () {
  const events = EVENTS.map((event) => <Event {...event} />)

  return (
    <Container
      id="timeline"
      component="section"
      fixed
    >
      <Timeline>
        {events}
      </Timeline>
    </Container>
  )
}

export default TimelineSection
