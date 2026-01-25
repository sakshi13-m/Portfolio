import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material"
import { ProjectsList } from "../../constants"
import LaunchIcon from '@mui/icons-material/Launch';
import './index.scss'

export const Projects = () => {

  return(
    <section id="projects" className="main-div" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div className="projects-list" role="list" aria-label="Portfolio projects">
        {ProjectsList.map((project, i) => (
          <Card key={`${project.title}-${i}`} sx={{ margin: 2, padding: 2 }} className="project-card" role="listitem">
            <CardContent>
              <Box className="content">
                <Box className="title-div">
                  <Typography variant="h3" className="logo-div">
                    <a 
                      target="_blank" 
                      rel="noreferrer" 
                      href={project.links.live_demo}
                      aria-label={`View ${project.title} live demo (opens in new tab)`}
                    >
                      {project.title}
                      <LaunchIcon aria-hidden="true" />
                    </a>
                  </Typography>
                  <Box className="project-links">
                    <span>{project.date}</span>
                    {project.links.source_code && (
                      <a 
                        href={project.links.source_code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                        style={{ marginLeft: '10px', color: '#fff', textDecoration: 'underline' }}
                      >
                        GitHub
                      </a>
                    )}
                  </Box>
                </Box>
                <Divider className="divider" sx={{ marginY: 2 }} />
                <Box className="skills-box" role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.technologies.map((tech, index) => 
                    <Chip 
                      key={`${tech}-${index}`}
                      label={tech} 
                      variant="outlined" 
                      className="skill-tag"
                      role="listitem"
                      aria-label={`${tech} technology`}
                    />
                  )}
                </Box>
                <Box className="project-details">
                  <p>{project.description}</p>
                  <ul aria-label={`Key features of ${project.title}`}>
                    {
                      project.details.map((item, index) => <li key={index}>{item}</li>)
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