import React from 'react'
import logo from '../assets/icons-logos/piggy-logo.svg'
import compliance from '../assets/icons-logos/compliance-mark.jpg'
import ig from '../assets/icons-logos/ig.png'
import fb from '../assets/icons-logos/fb.png'
import twitter from '../assets/icons-logos/twitter.png'

export default function Footer() {
  return (
    <div>
      <section>
        <img src={logo} alt="PiggyVest logo" />
        <img src={compliance} alt="Compliance logo" />
      </section>
      <section>
        <h3>Products</h3>
        <p>Piggybank</p>
        <p>Invest</p>
        <p>Safelock</p>
        <p>Target Savings</p>
        <p>Flex Naira</p>
      </section>
      <section>
        <h3>Company</h3>
        <p>About</p>
        <p>FAQs</p>
        <p>Blog</p>
      </section>
      <section className="">
        <h3>Legal</h3>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
      </section>
      <section>
        <div>
          <span>
            <img src={fb} alt="fb" className="bg-black p-2 rounded-lg" />
          </span>
          <span>
            <img src={twitter} alt="fb" className="bg-black p-2 rounded-lg" />
          </span>
          <span>
            <img src={ig} alt="fb" className="bg-black p-2 rounded-lg" />
          </span>
        </div>
        <p>
          Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
          Nigeria.
        </p>
        <p>contact@piggyvest.com</p>
        <p>+234 700 933 933 933</p>
      </section>
      <section>
        <p>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p>2016 - 2022 PiggyTech Global Limited - RC 1405222</p>
      </section>
    </div>
  );
}
