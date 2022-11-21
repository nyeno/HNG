import React from 'react'
import appleLogo from '../assets/icons-logos/apple_icon.svg'
import androidLogo from '../assets/icons-logos/google_icon.svg'

import full from '../assets/imgs/full.jpg'

export default function Landing() {
  return (
    <div className="lg:flex lg:mx-24 mx-8 items-center lg:text-left text-center justify-between">
      <section className="lg:w-1/2 space-y-8 ">
        <h1 className="font-bold lg:text-6xl text-4xl my-6">
          The Better Way to Save & Invest
        </h1>
        <p className="">
          PiggyVest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <button className="py-3 px-6 font-bold rounded-lg bg-bluePrimary text-white hover:bg-brightBlue">
          Create free account
        </button>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <button className="flex lg:space-x-4 py-3 px-1.5 lg:px-6 lg:font-bold rounded-lg border-grey-500 border transition ease-in-out delay-150 hover:-translate-y-2.5 duration-300">
            <img src={appleLogo} alt="Download on App store" />
            <p>Get on iPhone</p>
          </button>
          <button className="flex lg:space-x-4 py-3 px-1.5 lg:px-6 lg:font-bold rounded-lg border-grey-500 border transition ease-in-out delay-150 hover:-translate-y-2.5 duration-300">
            <img src={androidLogo} alt="Download on App store" />
            <p>Get on Android</p>
          </button>
        </div>
      </section>
      <section className="relative px-8 mt-8 lg:mt-0">
        <img src={full} alt="" />
      </section>
    </div>
  );
}
