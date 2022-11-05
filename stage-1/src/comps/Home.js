import React from 'react'
import slack from '../icons/slack.png'
import github from '../icons/github.png'
import share from '../icons/share.png';
import './Home.css'
import {  Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="App">
      <header>
        <div>
          <img src="https://raw.githubusercontent.com/nyeno/nyeno/main/me.png" alt="avatar" id="profile__img"/>
          <h3>Nyenooke Eno</h3>
          <h1 id="slack">
            nyenooke
          </h1>
        </div>
        <button className='button'>
          <img src={share} alt="share" id="share"/>
        </button>
      </header>
      <main className="links">
        <a id="twitter" href="https://twitter.com/_laurae" target="_blank" rel="noreferrer">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri" target="_blank" rel="noreferrer">
          Zuri Team
        </a>
        <a href="http://books.zuri.team/" id="books" target="_blank" rel="noreferrer">
          Zuri Books
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=nyenooke" id="book__python" target="_blank" rel="noreferrer">
          Python Books
        </a>
        <a href="https://background.zuri.team/" id="pitch" target="_blank" rel="noreferrer">
          Background Checks for coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank" rel="noreferrer">
          Design Books
        </a>
        <Link to='/contact' id='contact' target="_blank">Contact Me</Link>
        <div className="socials" id="">
          <img src={slack} alt="icons"/> 
          <img src={github} alt="icons"/>        
        </div>
      </main>
  
    
    </div>
  )
}
