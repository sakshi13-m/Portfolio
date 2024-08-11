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

  const floatDir: any = ['left', 'right']
  return (
    <section id="experience" className="main-div">
      <h2>Experience</h2>
      <Box>
        {Experiences.map((exp, i) => (
          <Card sx={{ margin: 2, padding: 2 }} className="exp-card" style={{ float: floatDir[i] || 'left' }}>
            <CardContent>
              <Box className="title-div">
                <Box>
                  <Typography variant="h4" className="logo-div">
                    <img className="logo" src={exp.logo} alt={`${exp.company} Logo`} />
                    {exp.company}
                  </Typography>
                  <Typography onClick={() => window.open(exp.link)} variant="h6" component="div">
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
              <List>
                {exp.responsibilities.map((responsibility, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
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