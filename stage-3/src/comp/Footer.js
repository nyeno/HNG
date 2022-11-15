import React from 'react'
import metabnb from '../assets/icons/metabnb.svg'
import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'
import twitter from '../assets/icons/twitter.png'

export default function Footer() {
  return (
    <footer className='bg-[#1D1D1E] text-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 py-16 px-3vw md:px-5vw lg:px-7vw'>
        <section className='space-y-16'>
            <img src={metabnb} alt='meta bnb logo'/>
            <div className='flex space-x-8'>
                <span><img src={fb} alt='Facebook logo'/></span>
                <span><img src={ig} alt='Instagram logo'/></span>
                <span><img src={twitter} alt='Twitter logo'/></span>
            </div>
            <p className=''>© 2022 Metabnb</p>
        </section>
        <section>
            <h3 className='text-lg font-bold my-6'>Community</h3>
            <nav className='space-y-5'>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </nav>
        </section>
        <section>
            <h3 className='text-lg font-bold my-6'>Places</h3>
            <nav className='space-y-5'>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn More</p>
            </nav>
        </section>
        <section>
            <h3 className='text-lg font-bold my-6'>About Us</h3>
            <nav className='space-y-5'>
                <p>Road Map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact Us</p>
            </nav>
        </section>

    </footer>
  )
}
