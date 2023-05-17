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
        scryfallId: '',
        imgURL: 'https://cards.scryfall.io/large/front/a/7/a736df42-18e9-4259-b0b8-54d21143e72e.jpg?1608909239',
      },
      {
        owned: false,
        code: 'cmr',
        number: 42,
        scryfallId: '',
        imgURL: 'https://cards.scryfall.io/large/front/4/6/46975250-950f-4f5d-a7c5-f61aec8e40ad.jpg?1608908966',
      },
      {
        owned: false,
        code: 'mh1',
        number: 116,
        scryfallId: '',
        imgURL: 'https://cards.scryfall.io/large/front/8/6/8690cbcc-f8fd-41f7-9e28-e61c12b04014.jpg?1665611812',
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
        scryfallId: '',
        imgURL: 'https://cards.scryfall.io/large/front/a/7/a736df42-18e9-4259-b0b8-54d21143e72e.jpg?1608909239',
      },
      {
        owned: false,
        code: 'cmr',
        number: 42,
        scryfallId: '',
        imgURL: 'https://cards.scryfall.io/large/front/4/6/46975250-950f-4f5d-a7c5-f61aec8e40ad.jpg?1608908966',
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
