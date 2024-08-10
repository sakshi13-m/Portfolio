import React from "react"
import DevToolImg from '../../assests/intro.svg'
import FemaleDev from '../../assests/female-developer-background.jpg'
import './main.scss'

const Main = () => {
  return (
    <section id="home" className="intro-div">
      <div style={{ width: 'inherit', margin: '48px'}}>
        <img src={FemaleDev} alt="female-dev" className="avatar-div" />
        <h2>Hi, I'm Sakshi</h2>
        <h3>Frontend Developer</h3>
        <span>I design and code beautifully simple things, and I love what I do.</span>
      </div>
      <div className="devtool-div">
        <img src={DevToolImg} alt="devtool" className="devtool-img" />
      </div>
    </section>
  )
}

export default Main;