import React from 'react'
import Intro from '../comp/Intro'
import More from '../comp/More'
import NextAdventure from '../comp/NextAdventure'
import Partners from '../comp/Partners'

export default function Home() {
  
  return (
    <div>
       <Intro/>
       <Partners/>
       <NextAdventure/>
       <More/>
    </div>
  )
}
