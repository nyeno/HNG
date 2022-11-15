import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {  Link } from 'react-router-dom';
import PhoneNav from './PhoneNav'

import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar({wallet}) {
  const [dispNav, setDispNav] = useState(false)

  const menuClicked = () => {
    setDispNav(!dispNav)
    console.log("clicked")
  }
  const closeMenu = () => {
    setDispNav(false)
    console.log("clicked")
  }
  

  return (
    <nav className='sticky top-0 flex justify-between items-center px-3vw md:px-5vw lg:px-7vw py-6 z-50 drop-shadow-md bg-white'>
        <Link to="/">
            <img src={logo} alt="MetaBnB logo"/>
        </Link>
        <div className='space-x-10 hidden lg:block'>
            <Link to="/">Home</Link>
            <Link to="/place-to-stay">Place to stay</Link>
            <Link to="/nfts">NFTs</Link>
            <Link to="/community">Community</Link>
        </div>
        <div className='flex justify-between items-center'>
          <div onClick={menuClicked}  className='px-4 block lg:hidden'> <MenuIcon /></div>
          <Link to="/" onClick={wallet} className='bg-primary text-white py-3 px-4 rounded-xl '>Connect Wallet</Link> 
        </div>
        <div className='absolute bg-white w-5/6 rounded-l-xl top-28 right-0 '>
          {dispNav && <PhoneNav closeMenu={closeMenu}/>}
        </div>
        
        
    </nav>
  )
}
