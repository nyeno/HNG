import React from 'react'
import appleLogo from '../assets/icons-logos/apple_icon.svg'
import androidLogo from '../assets/icons-logos/google_icon.svg'
import frame from '../assets/imgs/frame.png'
import headerImg from '../assets/imgs/header_Img.png'
import rentCard from '../assets/imgs/rent-card.png'
import investifyCard from '../assets/imgs/investify-card.png'

export default function Landing() {
  return (
    <div>
      <section>
        <h1>The Better Way to Save & Invest</h1>
        <p>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
        <button>Create free account</button>
        <div>
          <button className='flex'>
            <img src={appleLogo} alt="Download on App store"/>
            <p>Get on iPhone</p>
          </button>
          <button className='flex'>
            <img src={androidLogo} alt="Download on App store"/>
            <p>Get on Android</p>
          </button>
        </div>
      </section>
      <section>
        <img src={frame} alt=''/>
        <img src={headerImg} alt=''/>
        <img src={rentCard} alt=''/>
        <img src={investifyCard} alt=''/>
      </section>
    </div>
  )
}
