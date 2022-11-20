import React from 'react'
import security from '../assets/imgs/security.png'

export default function Security() {
  return (
    <div className="lg:grid grid-cols-3 gap-8 h-32 items-center justify-center">
      <section className=" justify-self-end">
        <img src={security} alt="" className="h-32" />
      </section>
      <section className='space-y-4 mx-6 col-span-2'>
        <h2 className='lg:text-3xl font-bold'>Your security is our priority</h2>
        <p>
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <p className='text-brightBlue'>Learn More &gt;</p>
      </section>
    </div>
  );
}
