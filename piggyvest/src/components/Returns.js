import React from 'react'
import invest from '../assets/imgs/invest.png'

export default function returns() {
  return (
    <div className="lg:grid grid-cols-3 items-center gap-12 lg:mx-24 mx-8">
      <section className="lg:w-2/3 justify-self-end">
        <img src={invest} alt="" className='m-auto'/>
      </section>
      <section className="col-span-2 space-y-8 my-8 lg:my-0 text-center lg:text-left">
        <p className="text-[#7913E5] bg-[#F7F0FF] px-6 py-2 m-auto lg:m-0 w-max rounded-3xl font-bold">
          Up To 25% Returns
        </p>
        <h2 className="lg:text-6xl text-4xl font-bold">Access investment opportunities</h2>
        <p>
          Invest securely and confidently on the go. Grow your money confidently
          by investing in pre-vetted investment opportunities.
        </p>
        <p className="text-[#7913E5] font-bold text-lg">
          Learn more about Investments &gt;
        </p>
      </section>
    </div>
  );
}
