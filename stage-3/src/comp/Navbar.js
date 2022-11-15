import React from 'react'
import logo from '../assets/logo.png'
import {  Link } from 'react-router-dom';

export default function Navbar({wallet}) {
  return (
    <nav className='flex justify-between items-center px-7vw py-6 z-50 drop-shadow-md sticky top-0 bg-white'>
        <Link to="/">
            <img src={logo} alt="MetaBnB logo"/>
        </Link>
        <div className='space-x-10'>
            <Link to="/">Home</Link>
            <Link to="/place-to-stay">Place to stay</Link>
            <Link to="/nfts">NFTs</Link>
            <Link to="/community">Community</Link>
        </div>
        <Link to="/" onClick={wallet} className='bg-primary text-white py-3 px-4 rounded-xl '>Connect Wallet</Link>
    </nav>
  )
}
