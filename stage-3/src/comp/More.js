import React from 'react'
import rotated1 from '../assets/rotate/rotate.png'


export default function More() {
  return (
    <div className='flex justify-between bg-primary items-center py-16 px-7vw text-white'>
        <section className='space-y-12 w-1/3'>
            <h3 className='text-5xl font-bold'>Metabnb NFTs</h3>
            <p className='text-lg text-justify leading-9'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button className='text-primary bg-white py-3.5 px-8 rounded-lg'>Learn More</button>
        </section>
        <section className=''>
            <div className=''><img src={rotated1} alt='Metabnb rooms'/></div>
        </section>
    </div>
  )
}
