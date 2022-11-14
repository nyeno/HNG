import React from 'react'
import metabnb from '../assets/icons/metabnb.svg'
import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'
import twitter from '../assets/icons/twitter.png'

export default function Footer() {
  return (
    <footer className='bg-[#1D1D1E] flex justify-between'>
        <section>
            <img src={metabnb} alt='meta bnb logo'/>
            <div className='flex'>
                <span><img src={fb} alt='Facebook logo'/></span>
                <span><img src={ig} alt='Instagram logo'/></span>
                <span><img src={twitter} alt='Twitter logo'/></span>
            </div>
            <p>© 2022 Metabnb</p>
        </section>
        <section>
            <h3>Community</h3>
            <nav>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </nav>
        </section>
        <section>
            <h3>Places</h3>
            <nav>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn More</p>
            </nav>
        </section>
        <section>
            <h3>About Us</h3>
            <nav>
                <p>Road Map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact Us</p>
            </nav>
        </section>

    </footer>
  )
}
