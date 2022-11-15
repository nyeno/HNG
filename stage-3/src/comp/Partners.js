import React from 'react'

import mbtoken from'../assets/icons/mbtoken.svg'
import metamask from'../assets/icons/metamask.svg'
import opensea from'../assets/icons/opensea.svg'

export default function Partners() {
  return (
    <div className='bg-primary lg:space-y-0 space-y-6 flex flex-col lg:flex-row justify-between py-6 lg:py-3 px-10 lg:px-12'>
        <img src={mbtoken} alt="mbtoken logo"/>
        <img src={metamask} alt="metamask logo"/>
        <img src={opensea} alt="opeansea logo"/>
    </div>
  )
}
