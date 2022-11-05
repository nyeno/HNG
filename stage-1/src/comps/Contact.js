import {React, useState }from 'react'
import './Contact.css'

export default function Contact() {
  const name = "Nyenooke Eno"
 const [submitted, setSubmitted] = useState(false);
  const [blur, setBlur] = useState({
    first: false,
    last: false,
    email: false,
    message: false,
    checked: false,
    
  });

  const handleFocus = (e) => {
    setBlur({ ...blur, [e.target.name]: true });
  };
  const handleSubmit = (e) => {
    //e.preventDefault();
    setSubmitted(true)
  };

  return (
    <div className='contact-me'>
        <h2>
            Contact Me
        </h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form className='form' onSubmit={handleSubmit}>
            <div className='first'>
                <label>First Name</label>
                <input id="first_name" name='first' type="text" required placeholder='Enter your first name' onBlur={handleFocus} focused={blur['first'].toString()}/>
                <p className='error-message'>Please enter your first name</p>
            </div>
            <div className='last'>
                <label>Last Name</label>
                <input id="last_name" name='last' type="text" required placeholder='Enter your last name' onBlur={handleFocus} focused={blur['last'].toString()}/>
                <p className='error-message'>Please enter your last name</p>
            </div>
            <div>
                <label>Email</label>
                <input id="email" name='email' type="email" required placeholder='yourname@gmail.com' onBlur={handleFocus} focused={blur['email'].toString()}/>
                <p className='error-message'>Please provide a valid email address</p>
            </div>
            <div>
                <label>Message</label>
                <textarea id="message" name='message' required placeholder="Send me a message and I'll reply you as soon as possible..." onBlur={handleFocus} focused={blur['message'].toString()}/>
                <p className='error-message'>Please enter a message</p>  
            </div>
            <div className='check'>
                <input type="checkbox" name='checked' id='checked' required/>
                <label>You agree to sending your data to {name} who may contact you.</label>
            </div>
            <button id="btn__submit" type='submit'>Send Message</button>
            {submitted && (<p className='submitted'>Thank you contacting me. I will get back to you as soon as I can</p>)}
        </form>
        <p></p>
    </div>
  )
}
