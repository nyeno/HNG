import React from "react";
import logo from "../assets/icons-logos/piggy-logo.svg";
import compliance from "../assets/icons-logos/compliance-mark.jpg";
import ig from "../assets/icons-logos/ig.png";
import fb from "../assets/icons-logos/fb.png";
import twitter from "../assets/icons-logos/twitter.png";

export default function Footer() {
  return (
    <div className="lg:mx-24 mx-8 grid gap-4 grid-cols-1 lg:grid-cols-5 md:gap-12">
      <section>
        <img src={logo} alt="PiggyVest logo" />
        <img
          src={compliance}
          alt="Compliance logo"
          className="w-1/3 lg:w-2/3"
        />
      </section>
      <section className="space-y-2">
        <h3 className="text-lg font-bold">Products</h3>
        <p className="text-sm">Piggybank</p>
        <p className="text-sm">Invest</p>
        <p className="text-sm">Safelock</p>
        <p className="text-sm">Target Savings</p>
        <p className="text-sm">Flex Naira</p>
      </section>
      <section className="space-y-2">
        <h3 className="text-lg font-bold">Company</h3>
        <p className="text-sm">About</p>
        <p className="text-sm">FAQs</p>
        <p className="text-sm">Blog</p>
      </section>
      <section className="space-y-2">
        <h3 className="text-lg font-bold">Legal</h3>
        <p className="text-sm">Terms</p>
        <p className="text-sm">Privacy</p>
        <p className="text-sm">Security</p>
      </section>
      <section className="space-y-2 lg:text-right ">
        <div className="flex lg:justify-around space-x-2">
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
        <p className="text-sm">
          Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
          Nigeria.
        </p>
        <p className="text-sm">contact@piggyvest.com</p>
        <p className="text-sm">+234 700 933 933 933</p>
      </section>
      <section className="lg:col-span-5 col-span-1 text-center">
        <p className="text-sm">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="text-sm">
          2016 - 2022 PiggyTech Global Limited - RC 1405222
        </p>
      </section>
    </div>
  );
}
