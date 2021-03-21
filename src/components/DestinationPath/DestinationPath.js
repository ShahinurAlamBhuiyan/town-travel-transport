import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const DestinationPath = (props) => {
    console.log(props.from, props.to)
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot  color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{props.from}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot   color="secondary" />
                </TimelineSeparator>
                <TimelineContent>{props.to}</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
export default DestinationPath;