import { Chip, Paper } from "@mui/material"
import React from "react"
import './index.scss'
import { skills } from "../../constants"

export const Skills = () => {
  const width = ['70%', '80%', '90%', '96%']

  return (
    <section id='skills' className="main-div" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <div className="table" role="list" aria-label="Technical skills organized by category">
        {
          Object.keys(skills).map((type, i) => (
            <Paper key={type} className={`skill-box`} style={{ width: width[i] }} role="listitem">
              <h3 className="skill-title">{type}</h3>
              <div className="skill-div" role="list" aria-label={`${type} skills`}>
                {skills[type].map((skill, index) => 
                  <Chip 
                    key={`${skill.name}-${index}`}
                    avatar={skill.icon} 
                    label={skill.name} 
                    variant="outlined" 
                    className="skill-tag"
                    role="listitem"
                    aria-label={`${skill.name} skill`}
                  />
                )}
              </div>
            </Paper>
          ))
        }
      </div>
    </section>
  )
}