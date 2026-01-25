import React from "react";
import './experience.scss';
import { Box, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Experiences } from "../../constants";
import CodeIcon from '@mui/icons-material/Code';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleIcon from '@mui/icons-material/People';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import BuildIcon from '@mui/icons-material/Build';

export const Experience = () => {
  const icons = [
    <CodeIcon color="secondary" />,
    <DashboardIcon style={{ color: '#FFF' }} />,
    <BuildIcon color="secondary" />,
    <PeopleIcon style={{ color: '#FFF' }} />,
    <SpeedIcon color="secondary" />,
    <DocumentScannerIcon style={{ color: '#FFF' }} />,
  ];

  return (
    <section id="experience" className="main-div" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <Box role="list" aria-label="Work experience timeline">
        {Experiences.map((exp, i) => (
          <Card key={`${exp.company}-${i}`} sx={{ margin: 2, padding: 2 }} className="exp-card" role="listitem">
            <CardContent>
              <Box className="title-div">
                <Box>
                  <Typography variant="h3" className="logo-div">
                    <img className="logo" src={exp.logo} alt={`${exp.company} company logo`} />
                    {exp.company}
                  </Typography>
                  <Typography 
                    variant="h4" 
                    component="button"
                    onClick={() => window.open(exp.link)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.open(exp.link);
                      }
                    }}
                    tabIndex={0}
                    aria-label={`Visit ${exp.company} website`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    {exp.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">
                    {exp.location}
                  </Typography>
                  <Typography variant="body2">
                    {exp.dates}
                  </Typography>
                </Box>
              </Box>
              <Divider className="divider" sx={{ marginY: 2 }} />
              <List role="list" aria-label={`Responsibilities at ${exp.company}`}>
                {exp.responsibilities.map((responsibility, index) => (
                  <ListItem key={index} role="listitem">
                    <ListItemIcon aria-hidden="true">
                      {icons[index % icons.length]}
                    </ListItemIcon>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    </section>
  )
} 