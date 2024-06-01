import React from "react";
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import './experience.scss';

export const Experience = () => {
  const experiences = [
    {
      timeline: 'Sep 2022 - Present',
      title: 'Software Engineer • Natwest Group',
      link: 'https://www.natwestgroup.com/',
      description: 'Developed multiple UI modules using React js and TypeScript for an application based on carbon footprint tracking for organizations and helped in various feature release deployments.'
        + 'Created Responsive and accessible components/pages to make the application more user-friendly.'
        + 'Reduced API calls using context and redux by 40 % and optimized the application`s load time.'
    },
    { timeline: 'Jan 2021 – Sep 2022',
    title: 'Solution Engineer • Deqode',
    link: 'https://deqode.com/',
    description: 'Developed UI using React js and added Auth0 authentication for security and sentry for log analytics.'
    +'Created Component Library using StoryBook and integrated Redux store to the application.'
    +'Used Google Places API for location and material UI for the components.'
  }
  ]
  return (
    <div className="main-div">
      <h2>Journey</h2>
      <Timeline>
        {experiences.map((exp) => (
          <TimelineItem className="list-item">
            <TimelineOppositeContent className="timeline-left">
              {exp.timeline}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="timeline-right">
              <a href={exp.link} target="_blank" rel="noreferrer"><h3>{exp.title}</h3></a>
              <p>{exp.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
} 