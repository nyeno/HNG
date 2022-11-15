import React from 'react'

import Room from '../comp/Room'
import data from "../data.json"

export default function PlaceToStay() {
  return (
    <div>
      <nav>
        <p>Resturant</p>
        <p>Castle</p>
        <p>Cottage</p>
        <p>Fantast City</p>
        <p>Beach</p>
        <p>Cabins</p>
        <p>Off-grid</p>
        <p>Farms</p>
      </nav>
      <main className=''>
        {data.map(nft => {
        return <Room nft={nft} key={nft.id}/>
        })}
      </main>
    </div>
  )
}
