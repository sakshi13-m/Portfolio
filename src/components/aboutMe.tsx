import React, { useState } from "react";
import './aboutMe.scss';

export const AboutMe = () => {
    const skillSet = {
        'Languages': ['JavaScript', 'HTML', 'CSS', 'Typescript', 'Python'],
        'FrameWorks': ['React', 'Redux', 'Next', 'Webpack', 'Bootstrap', 'Material UI', 'Lerna'],
        'Dev Tools': ['Git', 'VS Code', 'Sublime Text', 'Postman', 'Jupyter Notebook', 'Jira', 'Auth0', 'Team city', 'Sentry', 'NVDA'],
    }
    const [showSkillCard, setShowSkillCard] = useState({'Languages': false, 'FrameWorks': false, 'Dev Tools': false})

    const handleSkillCard = (type) => {
        setShowSkillCard({
            ...showSkillCard,
            [type]: !showSkillCard[type]
        })
    }

    return (
        <div className="about-me-div">
            <span className="label">About Me</span>
            <h2>Hi, I’m Sakshi. Nice to meet you.</h2>
            <p>
                I am a Front-end Developer (React.js Developer), a passionate programmer, and a Software developer with a keen eye for design and a drive to deliver exceptional user experiences. I'm on a mission to transform ideas into interactive and visually stunning web applications.
                Currently working as a Software Engineer at Natwest Group. Having an overall 3.5 years of experiences as a Frontend Developer.
            </p>
            <ul className="list">
                <li>💻 Expert in HTML, CSS, JavaScript, typescript, and modern frontend frameworks like React and next.js.</li>
                <li>🎨 Strong design sensibilities, ensuring that not only the functionality but also the aesthetics of a website are top-notch.</li>
                <li>🛠️ Proficient with responsive web design and cross-browser compatibility.</li>
                <li>📐 Dedicated to creating intuitive and user-friendly interfaces.</li>
                <li>🧩 Always excited to collaborate with teams to turn concepts into reality.</li>
            </ul>
            <div className="table">
                {
                    Object.keys(skillSet).map((type) => (
                        <div className={`skill-box ${showSkillCard[type] && 'skill-card-open'}`} onClick={() => handleSkillCard(type)}>
                            {!showSkillCard[type] ? <label>{type}</label>
                            :skillSet[type].map((skill) => <span>{skill}</span>)}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}