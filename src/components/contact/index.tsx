import { Avatar } from "@mui/material"
import { actions } from "../../constants"
import './index.scss'

export const Contact = () => {
  return (
    <section id = 'contact' className="main-div">
      <h2>Contact</h2>
    <div className="contact-div">
      {actions.map((item) => (
        <button onClick={() => window.open(item.link)} className="icon-button">
          <Avatar src={item.icon} alt={item.name} variant="square" />
        </button>
      ))}
    </div>
    </section>
  )
}