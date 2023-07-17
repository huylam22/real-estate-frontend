import { Routes, Route } from "react-router-dom";
import "./App.css";

import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./components/pages/Home";
import Properties from "./components/pages/Properties";
import PropertyDetail from "./components/pages/PropertyDetail";
import Header from "./components/organisms/Header/Header";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      {showHeader ? <Header></Header> : null}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/properties" element={<Properties></Properties>}></Route>
        <Route
          path="/properties/:propertyId"
          element={
            <PropertyDetail
            // showHeader={showHeader}
            // setShowHeader={setShowHeader}
            ></PropertyDetail>
          }
        ></Route>
        <Route path="/signup" element={<Home></Home>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route> */}

        {/* protected Routes */}
      </Routes>
    </>
  );
}

export default App;
