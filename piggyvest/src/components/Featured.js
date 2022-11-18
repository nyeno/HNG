import React from 'react'
import guardian from '../assets/icons-logos/guardian.png'
import techpoint from '../assets/icons-logos/techpoint.png'
import techcrunch from '../assets/icons-logos/techcrunch.png'

export default function Featured() {
  return (
    <div>
      <h2>As featured in</h2>
      <div>
          <img src={techpoint} alt='partners'/>
          <img src={guardian} alt='partners'/>
          <img src={techcrunch} alt='partners'/>
      </div>
    </div>
  )
}
