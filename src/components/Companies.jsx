import React from "react";
import companies from "../assets/companies.png";
const Companies = () => {
  return (
    <div className="items-center dark:bg-feature bg-white  justify-center flex flex-col  py-8 px-4">
      <p className="text-description dark:text-black">Powered by</p>
      <img src={companies} />
    </div>
  );
};

export default Companies;
