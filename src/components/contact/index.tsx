import { Avatar } from "@mui/material"
import { actions } from "../../constants"
import './index.scss'

export const Contact = () => {
  return (
    <div id='contact' className="contact-div">
      {actions.map((item) => (
        <button onClick={() => window.open(item.link)} className="icon-button">
          <Avatar src={item.icon} alt={item.name} variant="square" />
        </button>
      ))}
    </div>
  )
}