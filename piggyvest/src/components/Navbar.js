import React from 'react'
import logo from '../assets/icons-logos/piggy-logo.svg'

export default function Navbar() {
  return (
    <nav>
        <seection>
          <img src={logo} alt='PiggyVest Logo'/>
        </seection>
        <div>
            <section>
              <p>Save</p>
              <p>Invest</p>
              <p>Stories</p>
              <p>FAQs</p>
              <p>Blog</p>
            </section>
            <section>
              <button>Sign In</button>
              <button>Create free account</button>
            </section>
        </div>
        
    </nav>
  )
}
