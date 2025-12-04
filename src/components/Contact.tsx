import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');

  const form = useRef();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || '');
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message,
        'g-recaptcha-response': recaptchaToken
      };

      console.log(templateParams);
      emailjs.send('service_3twdyz9', 'template_554cqjg', templateParams, '-MUHXq1IRPep8NK80').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully! I will get back to you soon.');
          setName('');
          setEmail('');
          setMessage('');
          setRecaptchaToken('');
          recaptchaRef.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again or contact me directly.');
          recaptchaRef.current?.reset();
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div className="form-submit-row">
              <div className="recaptcha-container">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Ldc4SAsAAAAAKoAw7iOehR3ZKFwQRAIh03fkEcC"
                  onChange={handleRecaptchaChange}
                />
              </div>
              <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                Send
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;