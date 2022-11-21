import React from "react";


export default function PhoneNav() {


  return (
    <nav className="fixed top-18 bg-white h-full w-full z-50 text-center py-12 px-6">
      <section className="space-y-6">
        <p>Save</p>
        <p>Invest</p>
        <p>Stories</p>
        <p>FAQs</p>
        <p>Blog</p>
      </section>
      <section className="space-y-6 py-6">
        <button className=" block w-full py-2 font-bold rounded-lg border border-slate-600 hover:border-brightBlue">
          Sign In
        </button>
        <button className=" block w-full py-2.5 font-bold rounded-lg border bg-bluePrimary text-white hover:bg-brightBlue">
          Create free account
        </button>
      </section>
    </nav>
  );
}
