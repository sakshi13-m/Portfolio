import React from "react"
import DevToolImg from '../assests/intro.svg'
import FemaleDev from '../assests/female-developer-background.avif'
import './main.scss'

const Main = () => {
    return (
        <div className="intro-div">
            <h1>Frontend Developer</h1>
            <span>I design and code beautifully simple things, and I love what I do.</span>
            <img src={FemaleDev} alt="female-dev" className="avatar-div" />
            <img src={DevToolImg} alt="devtool" className="devtool-img" />
        </div>
    )
}

export default Main;