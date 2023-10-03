import axios from "axios";
import React from "react";
import IntroductionSearchPage from "../organisms/Introduction/IntroductionSearchPage";
import PropertyList from "../organisms/PropertyList/PropertyList";

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
