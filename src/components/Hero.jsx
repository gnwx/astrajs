import React from "react";
import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <main className="bg-heroBG dark:bg-darkMode flex flex-col-reverse md:flex-row items-center md:justify-between px-6 md:px-20 py-5 md:py-40 gap-10">
      <section className="md:w-1/2 flex flex-col gap-6">
        <div className="flex  flex-col gap-2 md:w-[420px]">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left leading-tight dark:text-white">
            Unleash the Power of <span className="text-astra">AstraJS</span>
          </h1>
          <p className="text-description text-center md:text-left text-md md:text-xl dark:text-darkDesc">
            A high-performance JavaScript library for unlocking your web
            development potential.
          </p>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-black dark:bg-white dark:text-black rounded-md text-white  md:text-md px-2 py-2  md:px-6 md:py-2 hover:bg-white hover:text-black duration-200 hover:scale-110">
            Get Started
          </button>
          <button className="bg-white dark:bg-white dark:text-black rounded-md border border-description md:text-md px-2  py-2 md:px-6 md:py-2 hover:bg-black hover:text-white duration-200 hover:scale-110">
            Documentation
          </button>
        </div>
      </section>
      <section className="md:w-[1000px] md:h-[500px]">
        <img
          src={hero}
          className="rounded-md shadow-lg object-cover w-full h-full"
        />
      </section>
    </main>
  );
};

export default Hero;
