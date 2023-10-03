import React from "react";
import PropTypes from "prop-types";

// You can also place these in a separate file for better management
const BACKGROUND_IMAGE_URL =
  "https://a-static.besthdwallpaper.com/house-with-garden-and-garage-wallpaper-2304x768-79514_103.jpg";
const TITLE_TEXT = "Find the best Property in town";
const PLACEHOLDER_TEXT = "Search";

const IntroductionSearchPage = ({ onInputChange, inputValue }) => {
  function handleInputChange(event) {
    const value = event.target.value;
    onInputChange(value);
  }

  function handleButtonClick() {
    // Add your button click functionality here
  }

  return (
    <div className="-mb-28">
      <div className="relative flex justify-center items-center lg:h-[400px] h-[280px] lg:-translate-y-28 -z-10">
        <h1 className="absolute text-white max-w-[800px] z-10 font-medium lg:text-4xl text-2xl -translate-y-10 leading-relaxed text-center">
          {TITLE_TEXT}
        </h1>

        <h1 className="absolute text-white max-w-[40px] z-10 font-medium text-6xl leading-relaxed text-center"></h1>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat -z-10"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
          }}
        ></div>
      </div>
      <div className=" mx-auto flex  items-center w-full max-w-[800px] justify-center gap-x-8">
        <input
          type="text"
          className="lg:-translate-y-60 lg:relative absolute -translate-y-36 py-4 px-10 bg-opacity-70 rounded-full bg-black mx-auto text-white w-full"
          placeholder={PLACEHOLDER_TEXT}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="rounded-full py-4 px-12 lg:bg-orange-500 lg:-translate-y-60 -translate-y-36 lg:translate-x-0 translate-x-36 text-white"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default React.memo(IntroductionSearchPage);
