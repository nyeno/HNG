import React from 'react'

import Room from '../comp/Room'
import data from "../data.json"

import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';

export default function PlaceToStay() {

  return (
    <div className='px-3vw md:px-5vw lg:px-7vw space-y-12 py-16'>
      <nav className='flex justify-between text-xl items-center '>
        <div className='hidden lg:flex lg:justify-between lg:w-5/6'>
          <p>Resturant</p>
          <p>Castle</p>
          <p>Cottage</p>
          <p>Fantast City</p>
          <p>Beach</p>
          <p>Cabins</p>
          <p>Off-grid</p>
          <p>Farms</p>
        </div>
        <div className='space-x-10 flex border-settingBorder border p-3.5 rounded-lg lg:hidden'>
          <p>Categories</p>
          <MenuIcon />
        </div>
        <div className='space-x-10 flex border-settingBorder border p-3.5 rounded-lg'>
          <p>Locations</p>
          <TuneIcon />
        </div>
      </nav>
      <main className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
        {data.map(nft => {
        return <Room nft={nft} key={nft.id}/>
        })}
      </main>
    </div>
  )
}
