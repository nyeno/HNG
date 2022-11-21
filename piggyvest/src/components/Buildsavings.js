import React from 'react'
import flex from '../assets/icons-logos/flex.png'
import safelock from '../assets/icons-logos/safelock.png'
import piggy from '../assets/icons-logos/piggy.png'
import target from '../assets/icons-logos/target.png'
import EastIcon from "@mui/icons-material/East";

export default function Buildsavings() {

 const features = [
   {
     name: "Piggybank",
     image: piggy,
     title: "Automated Savings",
     info: "Build a dedicated savings faster on your own terms automatically or manually",
     color: "bg-[#E5F1FE]",
     text: "text-[#305AAB]",
   },
   {
     name: "Safelock",
     image: safelock,
     title: "Fixed Savings",
     info: "Lock money away for a fixed duration with no access to it until maturity. It's like having a custome fixed deposit",
     color: "bg-[#E7F6FE]",
     text: "text-[#59A9FE]",
   },
   {
     name: "Target Savings",
     image: target,
     title: "Goal-oriented Savings",
     info: "Reach your savings goals faster. Save towards multiple goals on your own or with a group",
     color: "bg-[#E8FEF2]",
     text: "text-[#8ED5AA]",
   },
   {
     name: "Flex Naira",
     image: flex,
     title: "Flexible Savings",
     info: "Save, transfer, withdraw, manage and organize your money for free at any time",
     color: "bg-[#FDE7F5]",
     text: "text-[#EA5AA8]",
   },
 ];

  return (
    <div className="lg:mx-24 mx-8 block lg:flex items-center lg:space-x-12">
      <section className="space-y-8 my-8 lg:my-0 lg:w-1/3 m-auto text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          4 ways to build your savings
        </h2>
        <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
        <button className="py-3 px-6 font-bold rounded-lg bg-bluePrimary text-white hover:bg-brightBlue">
          Start Saving
        </button>
      </section>
      <section className="lg:w-2/3 md:grid grid-cols-2 gap-8 space-y-8 md:space-y-0">
        {features.map((feature) => {
          return (
            <div className="bg-bgGray p-8 rounded-xl space-y-8">
              <img
                src={feature.image}
                alt={feature.info}
                className="h-12 w-12"
              />
              <h3 className="font-bold text-xl">{feature.title}</h3>
              <p>{feature.info}</p>
              <div className="flex items-center cursor-pointer space-x-4 transition ease-in-out delay-150 hover:translate-x-6 duration-300">
                <button
                  className={`${feature.color} ${feature.text} px-1.5 py-1 rounded-full font-bold text-lg`}
                >
                  <EastIcon />
                </button>
                <p className="font-bold text-lg">{feature.name}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
