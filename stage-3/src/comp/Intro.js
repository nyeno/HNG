import React from 'react'
import nft1 from "../assets/nfts/nft9.png"
import nft2 from "../assets/nfts/nft2.png"
import nft3 from "../assets/nfts/nft3.png"
import nft4 from "../assets/nfts/nft4.png"

export default function Intro() {
  return (
    <div className='flex justify-between px-7vw py-16'>
        <section className='w-1/2'>
            <h1 className='text-6xl leading-snug'>
                Rent a <span className='text-primary'>Place</span> away from <span className='text-primary'>Home</span> in the <span className='text-primary'>Metaverse</span>
            </h1>
            <p className='my-12 text-2xl leading'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form className='my-12'>
                <input placeholder='Search for location' type="text" className='w-1/2 border-inputBorder rounded-l-lg border border-r-0 px-3 py-3.5 '/>
                <button className='bg-primary py-3.5 border-primary rounded-r-lg border border-l-0 text-white px-20'>Search</button>
            </form>
        </section>
        <section className='grid grid-cols-2 gap-1 place-items-stretch'>
            <div className='w-60 h-24'></div>
            <div className='row-span-2 place-self-end'>
                <img src={nft2} className="h-44 w-60 rounded-xl" alt='sample locations'/>
            </div>
            <div className='row-span-2'>
                <img src={nft1} className="h-44 w-60 rounded-xl" alt='sample locations'/>               
            </div>
            <div className='row-span-2'>
                <img src={nft4} className="h-44 w-60 rounded-xl" alt='sample locations'/>
            </div>
            <div className='row-span-2'>
                <img src={nft3} className="h-44 w-60 rounded-xl" alt='sample locations' />
            </div>
            <div className='w-60 h-24 bg-center bg-contain'></div>
        </section>
    </div>
  )
}
