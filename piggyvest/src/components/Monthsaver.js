import React from 'react'
import monthSaver from '../assets/imgs/monthsaver.jpg'

export default function Monthsaver() {
  return (
    <div>
      <section>
        <h1>Meet the saver of the month!</h1>
        <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
        <div>
          <button></button>
          <p>Meet Tito</p>
        </div>
      </section>
      <section>
        <img src={monthSaver} alt='Saver of the month'/> 
      </section>
    </div>
  )
}
