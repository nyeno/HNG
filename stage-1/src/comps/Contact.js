import {React, useState }from 'react'
import './Contact.css'

export default function Contact() {
  const name = "Nyenooke Eno"
  const [focused, setFocused] = useState(false);
  const [blur, setBlur] = useState({
    first: false,
    last: false,
    email: false,
    message: false,
    checked: false,
    
  });

  const handleFocus = (e) => {
    setFocused(true);
    setBlur({ ...blur, [e.target.name]: true });
    //console.log(blur)
  };


  return (
    <div className='contact-me'>
        <h2>
            Contact Me
        </h2>
        <h3>Hi there, contact me to ask me about anything you have in mind.</h3>
        <form>
            <div className='names'>
                <div>
                    <label>First Name</label>
                    <input id="first_name" name='first' type="text" required placeholder='Enter your first name' onBlur={handleFocus} focused={blur['first'].toString()}/>
                    <p>Please enter your first name</p>
                </div>
                <div>
                    <label>Last Name</label>
                    <input id="last_name" name='last' type="text" required placeholder='Enter your last name' onBlur={handleFocus} focused={blur['last'].toString()}/>
                    <p>Please enter your last name</p>
                </div>
            </div>
            <div>
                <label>Email</label>
                <input id="email" name='email' type="email" required placeholder='yourname@gmail.com' onBlur={handleFocus} focused={blur['email'].toString()}/>
                <p>Please provide a valid email address</p>
            </div>
            <div>
                <label>Message</label>
                <textarea id="message" name='message' required placeholder="Send me a message and I'll reply you as soon as possible" onBlur={handleFocus} onFocus={handleFocus} focused={focused.toString()}/>
                <p>Please enter a message</p>  
                
            </div>
            <div>
                <input type="checkbox" name='checked' required/>
                <label>You agree to sending your data to {name} who may contact you.</label>
                <p>Please check the box</p>
            </div>
            <button id="btn__submit">Send Message</button>
        </form>
    </div>
  )
}
