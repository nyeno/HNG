import React, {useState} from 'react'
import logo from '../assets/icons-logos/piggy-logo.svg'
import PhoneNav from './PhoneNav';
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
   const [dispNav, setDispNav] = useState(false);
   const menuClicked = () => {
     setDispNav(!dispNav);

   };

  return (
    <div className=" z-20 sticky top-0 bg-white w-full">
      <nav className="lg:flex items-center justify-between shadow-md py-4 px-6 lg:px-12 ">
        <section className="flex items-center justify-between lg:space-x-12 ">
          <img src={logo} alt="PiggyVest Logo" className="" />
          <button onClick={menuClicked} className="lg:hidden ">
            <MenuIcon />
          </button>
        </section>
        <section className="hidden lg:flex items-center space-x-10 justify-self-start">
          <p className="font-bold text-lg">Save</p>
          <p className="font-bold text-lg">Invest</p>
          <p className="font-bold text-lg">Stories</p>
          <p className="font-bold text-lg">FAQs</p>
          <p className="font-bold text-lg">Blog</p>
        </section>
        <section className="hidden lg:block space-x-4">
          <button className="py-2.5 px-6 font-bold rounded-lg border border-slate-600 hover:border-brightBlue hover:text-brightBlue">
            Sign In
          </button>
          <button className="py-3 px-6 font-bold rounded-lg bg-bluePrimary text-white hover:bg-brightBlue">
            Create free account
          </button>
        </section>
      </nav>
      {dispNav && <PhoneNav />}
    </div>
  );
}

