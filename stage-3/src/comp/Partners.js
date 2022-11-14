import React from 'react'

import mbtoken from'../assets/icons/mbtoken.svg'
import metamask from'../assets/icons/metamask.svg'
import opensea from'../assets/icons/opensea.svg'

export default function Partners() {
  return (
    <div className='bg-primary flex justify-between'>
        <img src={mbtoken} alt="mbtoken logo"/>
        <img src={metamask} alt="metamask logo"/>
        <img src={opensea} alt="opeansea logo"/>
    </div>
  )
}
