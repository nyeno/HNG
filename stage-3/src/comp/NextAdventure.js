import React from 'react'
import Room from '../comp/Room'
import data from "../data.json"

export default function NextAdventure() {
  return (
    <div className='px-3vw md:px-5vw lg:px-7vw'>
       <h2 className='text-center mt-16 font-bold text-5xl'>Inspiration for your next adventure</h2> 
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-16 '>
        {data.slice(0,8).map(nft => {
        return <Room nft={nft} key={nft.id}/>
        })}
    </div>
   </div>
  )
}
