import { Container } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
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
]

function App() {
  return (
    <Container maxWidth="sm">
      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>Success</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
export default App;
