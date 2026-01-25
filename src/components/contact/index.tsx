import { Avatar, Button, Box, Card, Divider, TextField } from "@mui/material"
import { actions } from "../../constants"
import './index.scss'
import { useState } from "react"
import { ResumeDownload } from "../resume/ResumeDownload"

export const Contact = () => {
  const [userDetail, setUserDetails] = useState({
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const handleChange = (key: string, value: string) => {
    setUserDetails({
      ...userDetail,
      [key]: value
    });
    
    // Clear error when user starts typing
    if (errors[key as keyof typeof errors]) {
      setErrors({
        ...errors,
        [key]: ''
      });
    }
  }

  const validateForm = () => {
    const newErrors = { email: '', message: '' };
    let isValid = true;

    if (!userDetail.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetail.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!userDetail.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = encodeURIComponent('Portfolio Reachout');
      const body = encodeURIComponent(`Email: ${userDetail.email}\n\nMessage: ${userDetail.message}`);
      window.location.href = `mailto:sakshiwork8@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id='contact' className="main-div" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Say Hello</h2>
      <ResumeDownload />
      <Divider />
      <Card sx={{ margin: 2, padding: 2 }} className="exp-card">
        <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
          <Box className='input'>
            <TextField 
              label='Email' 
              color="secondary" 
              type="email" 
              required 
              value={userDetail.email}
              onChange={(e) => handleChange('email', e.target.value)} 
              placeholder="Your email"
              error={!!errors.email}
              helperText={errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              inputProps={{
                'aria-label': 'Your email address'
              }}
            />
            <TextField 
              label='Message' 
              multiline 
              rows={5} 
              color="secondary" 
              required 
              value={userDetail.message}
              onChange={(e) => handleChange('message', e.target.value)} 
              placeholder="Your message"
              error={!!errors.message}
              helperText={errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              inputProps={{
                'aria-label': 'Your message'
              }}
            />
          </Box>
          <Button 
            className="input-button" 
            type="submit" 
            color="secondary" 
            variant="contained" 
            disabled={!userDetail.email || !userDetail.message}
            aria-label="Send message via email"
          >
            Send Message
          </Button>
        </form>
      </Card>
      <div className="contact-div" role="list" aria-label="Social media links">
        {actions.map((item, index) => (
          item.isSocial && 
          <button 
            key={`${item.name}-${index}`}
            onClick={() => window.open(item.link)} 
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(item.link);
              }
            }}
            className="icon-button"
            aria-label={`Visit my ${item.name} profile (opens in new tab)`}
            role="listitem"
          >
            <Avatar src={item.icon} alt={`${item.name} icon`} variant="square" />
          </button>
        ))}
      </div>
    </section>
  )
}