import React from 'react'

export default function Intro() {
  return (
    <div className='flex'>
        <section className='w-1/2'>
            <h1 className='text-6xl'>
                Rent a <span className='text-primary'>Place</span> away from <span className='text-primary'>Home</span> in the <span className='text-primary'>Metaverse</span>
            </h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form>
                <input />
                <button>Search</button>
            </form>
        </section>
        <section className='grid grid-cols-2 '>
            <div className='grid-area-1 w-60 h-44 bg-center bg-contain'></div>
            <div className='grid-area-2 w-60 h-44 bg-center bg-contain'></div>
            <div className='grid-area-3 w-60 h-44 bg-center bg-contain'></div>
            <div className='grid-area-4 w-60 h-44 bg-center bg-contain'></div>
        </section>
    </div>
  )
}
