import React from 'react'
import monthSaver from '../assets/imgs/monthsaver.jpg'

import EastIcon from "@mui/icons-material/East";

export default function Monthsaver() {
  return (
    <div className="lg:flex">
      <section className="bg-brightBlue text-white lg:px-20 p-6 lg:p-12 space-y-10 text-center lg:text-left">
        <h1 className="lg:text-6xl text-2xl font-bold w-5/6">
          Meet the saver of the month!
        </h1>
        <p className="lg:text-xl text-sm w-5/6">
          Every month, we shine a spotlight on one saver, asking them questions
          about their savings culture and how the product is specifically
          helping them shape how they spend and save for future
          responsibilities.
        </p>
        <div className="flex items-center cursor-pointer space-x-4 transition ease-in-out delay-150 hover:translate-x-6 duration-300">
          <button
            className={`bg-white text-brightBlue px-1.5 py-1 rounded-full font-bold text-sm lg:text-lg`}
          >
            <EastIcon />
          </button>
          <p className="font-bold text-sm lg:text-lg">Meet Tito</p>
        </div>
      </section>
      <section className="bg-black">
        <img
          className="object-cover h-full"
          src={monthSaver}
          alt="Saver of the month"
        />
      </section>
    </div>
  );
}
