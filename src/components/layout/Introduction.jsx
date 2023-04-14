import React from "react";
import Header from "./Header";
import {
  faLocationArrow,
  faPhone,
  faMessage,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Introduction = () => {
  const handleFindCLick = () => {};
  // need to refactor this component
  return (
    <div className="py-6">
      <div className="relative flex items-center justify-center h-screen -translate-y-36 -z-10">
        <button className="absolute border border-orange-500 bg-orange-500 text-white rounded-full py-3 px-8 z-10 lg:-translate-y-52 -translate-y-32">
          <FontAwesomeIcon icon={faHouse} className="text-white mr-3" />
          REAL ESTATE
        </button>
        <h1 className="absolute text-white max-w-[800px] z-10 font-medium lg:text-6xl text-4xl leading-relaxed text-center p-2">
          Invest on Real Estate With Our Company
        </h1>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat -z-10 "
          style={{
            backgroundImage: `url(https://a-static.besthdwallpaper.com/house-with-garden-and-garage-wallpaper-2304x768-79514_103.jpg)`,
          }}
        ></div>
        <div className="absolute lg:flex lg:flex-row flex-col flex z-10 lg:p-0 p-2 gap-y-3 lg:translate-y-60 translate-y-40 lg:gap-x-36">
          <div className="flex items-center gap-5 text-xl">
            <FontAwesomeIcon icon={faLocationArrow} className="text-white" />
            <h3 className="text-white font-medium">
              300 Nguyen Van A, Quan 1, Tp. HCM
            </h3>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <FontAwesomeIcon icon={faPhone} className="text-white" />
            <h3 className="text-white font-medium">(076) 123 4567</h3>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <FontAwesomeIcon icon={faMessage} className="text-white" />
            <h3 className="text-white font-medium">realesate@realestate.com</h3>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <NavLink
          className="absolute bg-white rounded-full px-10 py-4 text-primary font-bold -translate-y-36 border border-secondary border-opacity-40"
          to="/properties"
        >
          Find the best property
        </NavLink>
      </div>
    </div>
  );
};

export default Introduction;
