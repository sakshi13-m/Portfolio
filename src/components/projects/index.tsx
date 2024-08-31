import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material"
import { ProjectsList } from "../../constants"
import LaunchIcon from '@mui/icons-material/Launch';
import './index.scss'

export const Projects = () => {

  return(
    <section id="projects" className="main-div">
      <h2>Projects</h2>
      <div className="projects-list">
        {ProjectsList.map((project, i) => (
          <Card sx={{ margin: 2, padding: 2 }} className="project-card">
            <CardContent>
              <Box className="content">
                <Box className="title-div">
                  <Typography variant="h5" className="logo-div"><a target="_blank" rel="noreferrer" href={project.links.live_demo}>{project.title}<LaunchIcon /></a></Typography>
                <span>{project.date}</span>
                </Box>
                <Divider className="divider" sx={{ marginY: 2 }} />
                <Box className="skills-box">{project.technologies.map((tech) => <Chip label={tech} variant="outlined" className="skill-tag" />)}</Box>
                <Box className="project-details">
                  <p>{project.description}</p>
                  <ul>
                    {
                      project.details.map((item) => <li>{item}</li>)
                    }
                  </ul>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}