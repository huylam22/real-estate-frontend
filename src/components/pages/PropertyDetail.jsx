import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config/config";

import PropertyListSwiper from "../organisms/PropertyList/PropertyListSwiper";
import { propertyAPI } from "../../api/propertyAPI";
import PropertyImageSwipe from "../molecules/Property/PropertyImageSwipe/PropertyImageSwipe";

import PropertyDetailInfo from "../molecules/Property/PropertyInfo/PropertyDetailInfo";
const PropertyDetailPage = () =>
  // { showHeader, setShowHeader }
  {
    // // THIS IS TO APPLY DIFFERENT LAYOUT OF HEADER FOR PROPERTY DETAIL PAGE (WORK IN PROGRESS)
    // useEffect(() => {
    //   setShowHeader(false);
    //   return () => setShowHeader(true);
    // }, [setShowHeader]);

    return (
      <>
        <PropertyImageSwipe></PropertyImageSwipe>

        <section className="page-container lg:p-0 p-5">
          <div className="lg:flex justify-center gap-10">
            <PropertyDetailInfo></PropertyDetailInfo>
            <div
              className="max-w-[200px] lg:sticky top-5 bottom-0"
              style={{ alignSelf: "flex-start", position: "-webkit-sticky" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              alias dolore est itaque assumenda minus iure et ullam id
              voluptatibus illum at temporibus maiores numquam, facere a dicta
              voluptates consectetur?
            </div>
          </div>
        </section>

        <div className="bg-slate-200 bg-opacity-80">
          <section className="page-small-container">
            <PropertySimilar></PropertySimilar>
          </section>
        </div>
      </>
    );
  };

function PropertySimilar() {
  const { propertyId } = useParams();
  const { data, error } = useSWR(
    propertyAPI.getPropertyDetail(propertyId, "similar"),
    fetcher
  );

  if (!data) return null;
  return (
    <div className="py-20 px-4">
      <h1 className="font-semibold text-secondary text-2xl mb-3 font-serif">
        Nhà đất tương tự
      </h1>
      {data && <PropertyListSwiper item={data}></PropertyListSwiper>}
    </div>
  );
}
export default PropertyDetailPage;
