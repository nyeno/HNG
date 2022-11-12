import React from 'react'
import logo from '../assets/logo.png'
import {  Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <Link to="/">
            <img src={logo}/>
        </Link>
        <div>
            <Link to="/">Home</Link>
            <Link to="/place-to-stay">Place to stay</Link>
            <Link to="/nfts">NFTs</Link>
            <Link to="/community">Community</Link>
        </div>
        <Link to="/">Connect Wallet</Link>
    </nav>
  )
}