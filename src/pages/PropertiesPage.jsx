import axios from "axios";
import React, { useEffect } from "react";
import IntroductionSearchPage from "../components/layout/IntroductionSearchPage";
// import OurStory from "../components/layout/OurStory";
import PropertyList from "../components/properties/PropertyList";

const PropertiesPage = () => {
  const [inputValue, setInputValue] = React.useState("");

  function handleInputChange(value) {
    setInputValue(value);
    console.log(inputValue);
  }
  return (
    <>
      <IntroductionSearchPage
        onInputChange={handleInputChange}
      ></IntroductionSearchPage>
      <PropertyList></PropertyList>
    </>
  );
};

export default PropertiesPage;
