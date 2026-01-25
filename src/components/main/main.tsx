import React from "react"
import DevToolImg from '../../assests/intro.svg'
import FemaleDev from '../../assests/female-developer-background.jpg'
import './main.scss'

const Main = () => {
  return (
    <main id="home" className="intro-div">
      <div style={{ width: 'inherit'}}>
        <img src={FemaleDev} alt="Portrait of Sakshi Mahajan, Frontend Developer" className="avatar-div" />
        <h1>Hi, I'm Sakshi</h1>
        <h2>Frontend Developer</h2>
        <p>I design and code beautifully simple things, and I love what I do.</p>
      </div>
      <div className="devtool-div">
        <img src={DevToolImg} alt="Developer tools and coding environment illustration" className="devtool-img" />
      </div>
    </main>
  )
}

export default Main;