import useMediaQuery from '@mui/material/useMediaQuery'
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


const Event = ({ cards, cols, date, description, title }: any) => {
  const CardTiles = cards.map((card: any) => <CardTile key={`${card.code}-${card.number}`} {...card} />)

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <ImageList cols={cols}>
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
        {description.map((line, index) => <p key={`${date}-${index}`} >{line}</p>)}
      </TimelineContent>
    </TimelineItem>
  )
}

function TimelineSection () {
  const matches = useMediaQuery('(min-width:900px)')
  const eventColsNum = matches ? 3 : 1

  const events = EVENTS.map(
    (event) => <Event key={`event-${event.date}`} cols={eventColsNum} {...event} />
  )

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
