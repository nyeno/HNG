import React from 'react'
import rotated1 from '../assets/rotate/rotated1.png'
import rotated2 from '../assets/rotate/rotated2.png'
import rotated3 from '../assets/rotate/rotated3.png'

export default function More() {
  return (
    <div>
        <section>
            <h3>Metabnb NFTs</h3>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button>Learn More</button>
        </section>
        <section>
            <div className='w-96 h-64 rotate-[342deg]'><img src={rotated2} alt='Metabnb rooms'/></div>
            <div className='w-96 h-64 rotate-[26deg]'><img src={rotated1} alt='Metabnb rooms'/></div>
            <div className='w-96 h-64 rotate-[9deg]'><img src={rotated3} alt='Metabnb rooms'/></div>
        </section>
    </div>
  )
}
