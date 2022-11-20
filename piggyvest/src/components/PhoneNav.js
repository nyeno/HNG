import React, { useState } from "react";
import logo from "../assets/icons-logos/piggy-logo.svg";

export default function PhoneNav() {
  const [dispNav, setDispNav] = useState(false);
  const menuClicked = () => {
    setDispNav(!dispNav);
  };

  return (
    <nav>
      <section>
        <img src={logo} alt="PiggyVest Logo" />
        <button onClick={menuClicked} className="bg-blue-100 lg:hidden">
          Open
        </button>
      </section>
      <div className={`bg-white w-full h-full ${dispNav ? "fixed" : "static"}`}>
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
  );
}
