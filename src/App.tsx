import {
  Container,
  ImageList,
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';

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
];

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
  const events = EVENTS.map((event) => <Event {...event} />);

  return (
    <Container maxWidth="sm">
      <Timeline>
        {events}
      </Timeline>
    </Container>
  );
}

export default App;
