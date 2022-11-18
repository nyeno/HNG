import React from 'react'
import security from '../assets/imgs/security.png'

export default function Security() {
  return (
    <div>
      <section>
        <img src={security} alt=''/>
      </section>
      <section>
        <h2>Your security is our priority</h2>
        <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
        <p>Learn More &gt;</p>
      </section>
    </div>
  )
}
