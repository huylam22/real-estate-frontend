import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import OurStory from "./components/layout/OurStory";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Introduction from "./components/layout/Introduction";
import IntroductionSearchPage from "./components/layout/IntroductionSearchPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [showMain, setShowMain] = useState(true);

  return (
    <>
      <Routes>
        <Route element={showMain ? <Main /> : null}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/properties"
            element={<PropertiesPage></PropertiesPage>}
          ></Route>
          <Route
            path="/properties/:propertyId"
            element={
              <PropertyDetailPage
                showMain={showMain}
                setShowMain={setShowMain}
              ></PropertyDetailPage>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
