import React from 'react'
import nft1 from "../assets/nfts/nft9.png"
import nft2 from "../assets/nfts/nft2.png"
import nft3 from "../assets/nfts/nft3.png"
import nft4 from "../assets/nfts/nft4.png"

export default function Intro() {
  return (
    <div className='lg:flex justify-between px-5vw lg:px-7vw py-16'>
        <section className='lg:w-1/2'>
            <h1 className='text-6xl'>
                Rent a <span className='text-primary'>Place</span> away from <span className='text-primary'>Home</span> in the <span className='text-primary'>Metaverse</span>
            </h1>
            <p className='my-12 text-2xl leading'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form className='my-12 flex'>
                <input placeholder='Search for location' type="text" className='w-1/2 border-inputBorder rounded-l-lg border border-r-0 px-3 py-3.5 '/>
                <button className='bg-primary py-3.5 border-primary rounded-r-lg border border-l-0 text-white px-8 lg:px-20'>Search</button>
            </form>
        </section>
        <section className='hidden lg:grid grid-cols-2 gap-1 place-items-stretch'>
            <div className='hidden lg:block w-60 h-24 '></div>
            <div className='row-span-2 lg:place-self-end'>
                <img src={nft2} className="h-44 w-60 rounded-xl" alt='sample locations'/>
            </div>
            <div className='row-span-2 '>
                <img src={nft1} className="h-44 w-60 rounded-xl" alt='sample locations'/>               
            </div>
            <div className='row-span-2'>
                <img src={nft4} className="h-44 w-60 rounded-xl" alt='sample locations'/>
            </div>
            <div className='row-span-2 '>
                <img src={nft3} className="h-44 w-60 rounded-xl" alt='sample locations' />
            </div>
            <div className='hidden lg:block w-60 h-24'></div>
        </section>
    </div>
  )
}
