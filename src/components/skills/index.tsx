import React, { useState } from "react"

type skillCard = {
  [key: string]: boolean
}

export const Skills = () => {
  const skillSet: { [key: string]: Array<string> } = {
    'Languages': ['JavaScript', 'HTML', 'CSS', 'Typescript', 'Python'],
    'FrameWorks': ['React', 'Redux', 'Next', 'Webpack', 'Bootstrap', 'Material UI', 'Lerna'],
    'Dev Tools': ['Git', 'VS Code', 'Sublime Text', 'Postman', 'Jupyter Notebook', 'Jira', 'Auth0', 'Team city', 'Sentry', 'NVDA'],
  }
  const [showSkillCard, setShowSkillCard] = useState<skillCard>({ 'Languages': false, 'FrameWorks': false, 'Dev Tools': false })

  const handleSkillCard = (type: string) => {
    setShowSkillCard({
      ...showSkillCard,
      [type]: !showSkillCard[type]
    })
  }
  return (
    <div className="table">
      {
        Object.keys(skillSet).map((type) => (
          <div className={`skill-box ${showSkillCard[type] && 'skill-card-open'}`} onClick={() => handleSkillCard(type)}>
            {!showSkillCard[type] ? <label>{type}</label>
              : skillSet[type].map((skill) => <span>{skill}</span>)}
          </div>
        ))
      }
    </div>
  )
}