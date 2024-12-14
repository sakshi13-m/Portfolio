import { Avatar, Button, Box, Card, Divider, TextField } from "@mui/material"
import { actions } from "../../constants"
import './index.scss'
import { useState } from "react"

export const Contact = () => {
  const [userDetail, setUserDetails] = useState({
    email: '',
    message: ''
  });

  const handleChange = (key: string, value: string) => {
    setUserDetails({
      ...userDetail,
      [key]: value
    })
  }

  return (
    <section id='contact' className="main-div">
      <h2>Say Hello</h2>
      <Divider />
      <Card sx={{ margin: 2, padding: 2 }} className="exp-card">
        <form method="post" action={"mailto:sakshiwork8@gmail.com?subject=" + encodeURIComponent('Portfolio Reachout') + "&body=" + JSON.stringify(userDetail)}>
          <Box className='input'>
            <TextField label='Email' color="secondary" type="email" required onChange={(e) => handleChange('email', e.target.value)} placeholder="Your email" />
            <TextField label='Message' multiline rows={5} color="secondary" required onChange={(e) => handleChange('message', e.target.value)} placeholder="Message" />
          </Box>
          <Button className="input-button" type="submit" color="secondary" variant="contained" disabled={userDetail.email === '' || userDetail.message === ''}>
            Send Message
          </Button>
        </form>
      </Card>
      <div className="contact-div">
        {actions.map((item) => (
          item.isSocial && <button onClick={() => window.open(item.link)} className="icon-button">
            <Avatar src={item.icon} alt={item.name} variant="square" />
          </button>
        ))}
      </div>
    </section>
  )
}