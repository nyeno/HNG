import React from 'react'
import flex from '../assets/icons-logos/flex.png'
import safelock from '../assets/icons-logos/safelock.png'
import piggy from '../assets/icons-logos/piggy.png'
import target from '../assets/icons-logos/target.png'

export default function Buildsavings() {

 const features = [
  {
  name: 'Piggybank',
  image: piggy,
  title: 'Automated Savings',
  info: 'Build a dedicated savings faster on your own terms automatically or manually',
  color: ''
 },
 {
  name: 'Safelock',
  image: safelock,
  title: 'Fixed Savings',
  info: 'Lock money away with no withdrawals ',
  color: ''
 },
 {
  name: 'Piggybank',
  image: piggy,
  title: 'Automated Savings',
  info: 'Build a dedicated savings faster on your own terms automatically or manually',
  color: ''
 },
 {
  name: 'Piggybank',
  image: piggy,
  title: 'Automated Savings',
  info: 'Build a dedicated savings faster on your own terms automatically or manually',
  color: ''
 }
]

  return (
    <div>
      <section>
        <h2>4 ways to build your savings</h2>
        <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
        <button>Start Saving</button>
      </section>
      <section>
        {features.map(feature => {
          return <div>
            <img src={feature.image} alt={feature.info}/>
            <h3>{feature.title}</h3>
            <p>{feature.info}</p>
            <div>
              <button></button>
              <p>{feature.name}</p>
            </div>
          </div>
        }) }
      </section>
    </div>

  )
}
