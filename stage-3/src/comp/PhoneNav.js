import React from "react";

import {  Link } from 'react-router-dom';

const PhoneNav = ({ closeMenu }) => {
  
  return (
    <div className='rounded-2xl flex flex-col'>
        <Link onClick={closeMenu} to="/"  className="py-4 border-b border-inputBorder px-12 hover:bg-primary">Home</Link>
        <Link onClick={closeMenu} to="/place-to-stay" className="py-4 border-b border-inputBorder px-12 hover:bg-primary">Place to stay</Link>
        <Link onClick={closeMenu} to="/nfts"  className="py-4 border-b border-inputBorder px-12 hover:bg-primary">NFTs</Link>
        <Link onClick={closeMenu} to="/community" className="py-4 px-12 hover:bg-primary">Community</Link>
    </div>
  )
};

export default PhoneNav;