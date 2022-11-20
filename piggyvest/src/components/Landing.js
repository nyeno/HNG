import React from 'react'
import appleLogo from '../assets/icons-logos/apple_icon.svg'
import androidLogo from '../assets/icons-logos/google_icon.svg'
import frame from '../assets/imgs/frame.png'
import headerImg from '../assets/imgs/header_Img.png'
import rentCard from '../assets/imgs/rent-card.png'
import investifyCard from '../assets/imgs/investify-card.png'

export default function Landing() {
  return (
    <div className="lg:flex items-center justify-between">
      <section className="lg:w-1/2 space-y-8 ">
        <h1 className="font-bold lg:text-6xl my-6">
          The Better Way to Save & Invest
        </h1>
        <p className="m-">
          PiggyVest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <button className="py-3 px-6 font-bold rounded-lg bg-bluePrimary text-white hover:bg-brightBlue">
          Create free account
        </button>
        <div className='flex space-x-4'>
          <button className="flex space-x-4 py-3 px-6 font-bold rounded-lg border-grey-500 border transition ease-in-out delay-150 hover:-translate-y-2.5 duration-300">
            <img src={appleLogo} alt="Download on App store" />
            <p>Get on iPhone</p>
          </button>
          <button className="flex space-x-4 py-3 px-6 font-bold rounded-lg border-grey-500 border transition ease-in-out delay-150 hover:-translate-y-2.5 duration-300">
            <img src={androidLogo} alt="Download on App store" />
            <p>Get on Android</p>
          </button>
        </div>
      </section>
      <section className="relative px-8">
        <img src={frame} alt="" />
        <img src={headerImg} alt="" className="absolute top-12 right-16" />
        <img src={rentCard} alt="" className="absolute top-28 right-80 w-56" />
        <img
          src={investifyCard}
          alt=""
          className="absolute bottom-20 left-60 w-56"
        />
      </section>
    </div>
  );
}
