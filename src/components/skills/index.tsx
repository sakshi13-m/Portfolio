import { Chip, Paper } from "@mui/material"
import React from "react"
import './index.scss'
import { skills } from "../../constants"

export const Skills = () => {
  const width = ['70%', '80%', '90%', '96%']

  return (
    <section id='skills' className="main-div">
      <h2>Skills</h2>
      <div className="table">
        {
          Object.keys(skills).map((type, i) => (
            <Paper className={`skill-box`} style={{ width: width[i] }}>
              <h3 className="skill-title">{type}</h3>
              <div className="skill-div">{skills[type].map((skill) => <Chip avatar={skill.icon} label={skill.name} variant="outlined" className="skill-tag" />)}</div>
            </Paper>
          ))
        }
      </div>
    </section>
  )
}