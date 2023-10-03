import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useSWR from "swr";
import { fetcher } from "../../../../config/config";

import {
  faBed,
  faBathtub,
  faHouseChimney,
  faDollar,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { propertyAPI } from "../../../../api/propertyAPI";

import PropertyDetailLoading from "../../../loading/PropertyDetailLoading";

const PropertyDetailInfo = () => {
  const [loading, setLoading] = useState(true);
  const { propertyId } = useParams();
  const { data, error, isLoading } = useSWR(
    propertyAPI.getPropertyDetail(propertyId),
    fetcher
  );

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading((loading) => !loading);
      }, 200);
    }
    console.log(data);
  }, [data]);

  if (!data) return null;

  const {
    propertyAddressNumber,
    propertyAddressStreet,
    propertyPostingStatus,
    propertyBedrooms,
    propertyBathrooms,
    propertyArea,
    propertyPrice,
    propertyLandDirection,
    propertyLandType,
    propertyLandLegalStatus,
    propertyDescription,
    districtPrefix,
    provincePrefix,
    provinceName,
    districtName,
  } = data;

  return (
    <>
      <div className="lg:min-w-[650px] lg:max-w-[700px] mb-10">
        <div className="flex flex-col gap-y-3">
          {loading && <PropertyDetailLoading></PropertyDetailLoading>}
          <span className="text-secondary text-xl opacity-70">
            {propertyAddressNumber} {propertyAddressStreet} , {districtName},{" "}
            {provinceName}
          </span>
          <h1 className="text-3xl font-semibold text-secondary mb-2 font-serif">
            {propertyPostingStatus}
          </h1>
          <div className="lg:flex grid grid-cols-4 lg:gap-x-8 gap-y-2 text-lg lg:items-center font-light text-secondary ">
            <div className="flex items-center lg:justify-between justify-start gap-x-2">
              <FontAwesomeIcon icon={faBed} />
              <span> {propertyBedrooms}</span>
            </div>
            <div className="flex items-center lg:justify-between justify-start gap-x-2">
              <FontAwesomeIcon icon={faBathtub} />
              <span> {propertyBathrooms}</span>
            </div>
            <div className="flex items-center lg:justify-between justify-start gap-x-1">
              <FontAwesomeIcon icon={faHouseChimney} />
              <span>
                {propertyArea} m<sup>2</sup>
              </span>
            </div>
            <div className="flex items-center lg:justify-between justify-start gap-x-2 ml-3">
              <FontAwesomeIcon icon={faCompass} />
              <span>{propertyLandDirection}</span>
            </div>
            <div className="flex items-center lg:justify-between justify-start gap-x-1">
              <FontAwesomeIcon icon={faDollar} />
              <span>{propertyPrice}</span>
            </div>
          </div>
          <hr className="bg-gray-800 my-8 h-[2px] bg-opacity-20"></hr>
          <h1 className="font-semibold text-secondary text-2xl mb-3 font-serif">
            Tổng quan
          </h1>
          <p className="font- text-secondary text-md mb-3 font-serif">
            {propertyDescription}
          </p>
          <hr className="bg-gray-800 my-8 h-[2px] bg-opacity-20"></hr>

          <h1 className="font-semibold text-secondary text-2xl mb-3 font-serif">
            Thông tin cơ bản
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 p-5 lg:p-0">
            <div className="flex flex-col gap-0 justify-center">
              <div className="flex justify-between">
                <h3 className="text-base text-secondary font-light">
                  Loại hình
                </h3>
                <span className="font-medium">{propertyLandType}</span>
              </div>
              <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <div className="flex justify-between">
                <h3 className="text-base text-secondary font-light">
                  Phòng ngủ
                </h3>
                <span className="font-medium">{propertyBedrooms}</span>
              </div>
              <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <div className="flex justify-between">
                <h3 className="text-base text-secondary font-light">
                  Phòng tắm
                </h3>
                <span className="font-medium">{propertyBathrooms}</span>
              </div>
              <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <div className="flex justify-between">
                <h3 className="text-base text-secondary font-light">
                  Diện tích
                </h3>
                <span className="font-medium">
                  {propertyArea} m<sup>2</sup>
                </span>
              </div>
              <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <div className="flex justify-between">
                <h3 className="text-base text-secondary font-light">
                  Loại chủ quyền
                </h3>
                <span className="font-medium">{propertyLandLegalStatus}</span>
              </div>
            </div>
            <div className="flex flex-col gap-0 justify-center">
              <div className="flex justify-between">
                <h3 className="text-base text-secondary font-light">Giá bán</h3>
                <span className="font-medium">{propertyPrice} tỷ</span>
              </div>
            </div>
          </div>
          <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailInfo;
