import React from "react";

const Feature = ({ feature }) => {
  return (
    <div
      className={` bg-mainBGnpm i react-toggle-dark-mode
      mx-4 react-toggle-dark-mode

      shadow-md dark:bg-darkMode dark:border dark:border-description dark:rounded-md 
      flex flex-col-reverse   md:mx-auto max-w-[1100px]  gap-5 md:gap-32 px-8 py-10 md:flex-row items-center justify-between  my-40    ${
        feature.id % 2 !== 0 ? "md:flex-row-reverse " : "flex "
      }  `}
    >
      <section className="md:w-1/2 flex flex-col gap-3">
        <h1 className="font-bold text-2xl  text-center md:text-left md:text-4xl dark:text-white">
          {feature.title}
        </h1>
        <p className="text-description text-sm text-center md:text-left md:text-xl md:leading-7  dark:text-darkDesc">
          {feature.description}
        </p>
        {feature.cta && (
          <button className="bg-black dark:bg-white dark:text-black w-46 mt-4 rounded-md self-center md:self-start text-white  md:text-md px-2 py-2 hover:bg-white hover:text-black duration-200 hover:scale-110  md:px-6 md:py-2">
            {feature.cta}
          </button>
        )}
      </section>
      <section className=" w-[300px] h-[300px] cursor-pointer hover:scale-105 duration-300 md:w-1/2   rounded-md border-description">
        <img
          src={feature.image}
          className="w-full h-full shadow-sm rounded-md object-cover"
        />
      </section>
    </div>
  );
};

export default Feature;
