import React from 'react'

import i4g from '../icons/I4G.png'
import vector from '../icons/Vector.png'
import './Footer.css'


export default function Footer() {
  return (
    <footer className="footer" id="">
        <img src={vector} id="vector" alt="logo"/>  
        <p className='fp'>HNG Internship 9 Frontend Task</p>
        <img src={i4g} id="i4g" alt="logo"/> 
    </footer>
  )
}
