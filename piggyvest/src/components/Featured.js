import React from 'react'
import guardian from '../assets/icons-logos/guardian.png'
import techpoint from '../assets/icons-logos/techpoint.png'
import techcrunch from '../assets/icons-logos/techcrunch.png'

export default function Featured() {
  return (
    <div className="lg:flex lg:px-20 py-10 bg-bgGray items-center space-y-8 lg:space-y-0">
      <h2 className="lg:w-1/3 text-2xl lg:text-4xl font-bold text-center">
        As featured in
      </h2>
      <div className="grid w-1/2 lg:w-2/3 grid-cols-1 md:grid-cols-3 gap-8 items-center m-auto">
        <img src={techpoint} alt="partners" />
        <img src={guardian} alt="partners" />
        <img src={techcrunch} alt="partners" />
      </div>
    </div>
  );
}
