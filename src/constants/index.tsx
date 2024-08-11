import React from 'react'
import call from '../assests/call.jpg'
import github from '../assests/github_PNG40.png'
import linkedIn from '../assests/linkedIn.png'
import mail from '../assests/mail.jpg'
import stackoverflow from '../assests/stackoverflow.webp'
import natwestLogo from '../assests/natwest.png'
import deqodeLogo from '../assests/deqode.png'
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiSass, SiPython, SiReact, SiRedux, SiNextdotjs, SiBootstrap, SiGit, SiVisualstudiocode, SiPostman, SiJira, SiAuth0, SiTeamcity, SiSentry, SiGitlab, SiJest, SiCypress, SiStorybook } from 'react-icons/si';
import MuiLogo from '../assests/mui-logo.svg';

export const actions = [
  { icon: github, name: 'Github', link: 'https://github.com/sakshi13-m' },
  { icon: linkedIn, name: 'LinkedIn', link: 'https://www.linkedin.com/in/sakshi-mahajan-13d99/' },
  { icon: mail, name: 'Gmail', link: 'mailto:sakshi1913@gmail.com' },
  { icon: stackoverflow, name: 'StackOverFlow', link: 'https://stackoverflow.com/users/17497509/sakshi-mahajan' },
  { icon: call, name: 'Phone', link: 'tel:91-6264101835' }
];


export const skills: { [key: string]: Array<Record<any, any>> } = {
  Languages: [
    { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
    { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178C6' }} /> },
    { name: "HTML", icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
    { name: "CSS", icon: <SiCss3 style={{ color: '#1572B6' }} /> },
    { name: "SCSS", icon: <SiSass style={{ color: '#CC6699' }} /> },
    { name: "Python", icon: <SiPython style={{ color: '#3776AB' }} /> }
  ],
  'Frameworks / Libraries': [
    { name: "React.js", icon: <SiReact style={{ color: '#61DAFB' }} /> },
    { name: "Redux Toolkit", icon: <SiRedux style={{ color: '#764ABC' }} /> },
    { name: "Next.js", icon: <SiNextdotjs style={{ color: '#ffffff' }} /> },
    { name: "Bootstrap", icon: <SiBootstrap style={{ color: '#7952B3' }} /> },
    { name: "Material-UI", icon: <img src={MuiLogo} alt='' style={{ color: '#0081CB' }} /> },
    { name: "Lerna", icon: null } // No specific icon in react-icons for Lerna
  ],
  Testing: [
    { name: "Jest", icon: <SiJest style={{ color: '#C21325' }} /> },
    { name: "Cypress", icon: <SiCypress style={{ color: '#ffffff' }} /> },
    { name: "Storybook", icon: <SiStorybook style={{ color: '#FF4785' }} /> }
  ],
  'DeveloperTools': [
    { name: "Git", icon: <SiGit style={{ color: '#F05032' }} /> },
    { name: "VS Code", icon: <SiVisualstudiocode style={{ color: '#007ACC' }} /> },
    { name: "Postman", icon: <SiPostman style={{ color: '#FF6C37' }} /> },
    { name: "Jira", icon: <SiJira style={{ color: '#0052CC' }} /> },
    { name: "Auth0", icon: <SiAuth0 style={{ color: '#EB5424' }} /> },
    { name: "Team City", icon: <SiTeamcity style={{ color: '#ffffff' }} /> },
    { name: "Sentry", icon: <SiSentry style={{ color: '#FB4226' }} /> },
    { name: "NVDA", icon: null }, // NVDA has no icon in react-icons
    { name: "GitLab", icon: <SiGitlab style={{ color: '#FC6D26' }} /> }
  ],
};

export const Experiences = [
  {
    "title": "Software Engineer",
    "company": "Natwest Group",
    "location": "Bangalore, India",
    "dates": "Sep 2022 - Present",
    link: 'https://www.natwestgroup.com/',
    logo: natwestLogo,
    "responsibilities": [
      "Engineered a micro-frontend application enabling seamless integration of third-party apps with SSO logins, enhancing user accessibility.",
      "Developed UI modules using React.js and TypeScript for a carbon footprint tracking application, contributing to feature releases and ensuring smooth deployments.",
      "Built responsive and accessible components/pages, significantly improving the user experience.",
      "Reduced API calls by 40% using React Context and Redux, optimizing load time.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Mentored junior developers, enhancing team capabilities and code quality.",
      "Authored comprehensive technical documentation to support development and knowledge transfer."
    ]
  },
  {
    "title": "Solution Engineer",
    "company": "Deqode",
    "location": "Indore, India",
    "dates": "Jan 2021 – Sep 2022",
    link: 'https://deqode.com/',
    logo: deqodeLogo,
    "responsibilities": [
      "Designed user interfaces with React.js, incorporating Auth0 for authentication and Sentry for log analytics.",
      "Built a component library using StoryBook & connected it to the Redux store for efficient state management.",
      "Integrated Google Places API for location services and used Material UI for component design.",
      "Combined React applications and the component library into a cohesive Lerna repository."
    ]
  }
]
