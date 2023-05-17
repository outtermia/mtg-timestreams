import { Container } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';

const EVENTS = [
  {
    title: 'Event 1',
    date: '2021-10-01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Event 2',
    date: '2021-10-02',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Event = ({ title, date, description }: any) => (
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
      {/* Cards related to the event will go here */}
    </TimelineContent>
  </TimelineItem>
);

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
