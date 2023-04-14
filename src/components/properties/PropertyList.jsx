import axios from "axios";
import React, { useEffect } from "react";
import { getProperties } from "../../api/getProperty";
import { fetcher } from "../../config/config";
import useSWR from "swr";
import PropertyCard from "./PropertyCard";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import {
  faBed,
  faBathtub,
  faHouseChimney,
  faB,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { propertyAPI } from "../../api/propertyAPI";

const PropertyList = () => {
  const { data, error, isLoading } = useSWR(
    propertyAPI.getProperties(),
    fetcher
  );

  console.log(data);
  return (
    <section className="page-container">
      <h1 className="">Hiển thị 5 trong số 5</h1>
      {isLoading && (
        <div className="grid grid-cols-4 gap-10">
          <PropertyItemLoading></PropertyItemLoading>
          <PropertyItemLoading></PropertyItemLoading>
          <PropertyItemLoading></PropertyItemLoading>
          <PropertyItemLoading></PropertyItemLoading>
        </div>
      )}
      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-6">
        {data?.length > 0 &&
          data.map((item) => (
            <PropertyCard key={item.id} item={item}></PropertyCard>
          ))}
      </div>
    </section>
  );
};

const PropertyItemLoading = () => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm flex flex-col">
      <div className="w-full h-[250px] object-cover rounded-lg shadow-sm hover:shadow-neutral-300  transition-all  mb-5">
        <LoadingSkeleton height="100%" radius="16px"></LoadingSkeleton>
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <div className="text-xl text-black font-semibold mb-4 !leading-loose">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </div>
        <div className="text-[#999] text-lg mb-6">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-1"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </div>
        <div className="flex items-center gap-x-3 mt-auto">
          <FontAwesomeIcon icon={faBed} />
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton height="10px" width="20px"></LoadingSkeleton>
          </span>
          <FontAwesomeIcon icon={faBathtub} />
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton height="10px" width="20px"></LoadingSkeleton>
          </span>
          <FontAwesomeIcon icon={faHouseChimney} />
          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton height="10px" width="20px"></LoadingSkeleton>
          </span>
        </div>
        <div className="text-[#999] text-lg mt-2">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};
export default PropertyList;
