import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import {
  faBed,
  faBathtub,
  faHouseChimney,
  faDollar,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PropertyDetailLoading = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-y-3">
        <span className="text-secondary text-xl opacity-70">
          <LoadingSkeleton height="20px"></LoadingSkeleton>
        </span>
        <h1 className="text-3xl font-semibold text-secondary mb-2 font-serif">
          <LoadingSkeleton height="40px"></LoadingSkeleton>
        </h1>
        <div className="lg:flex grid grid-cols-4 lg:gap-x-8 gap-y-2 text-lg lg:items-center font-light text-secondary ">
          <div className="flex items-center lg:justify-between justify-start gap-x-2">
            <FontAwesomeIcon icon={faBed} />
            <LoadingSkeleton height="20px" width="20px"></LoadingSkeleton>
          </div>
          <div className="flex items-center lg:justify-between justify-start gap-x-2">
            <FontAwesomeIcon icon={faBathtub} />
            <LoadingSkeleton height="20px" width="20px"></LoadingSkeleton>
          </div>
          <div className="flex items-center lg:justify-between justify-start gap-x-1">
            <FontAwesomeIcon icon={faHouseChimney} />
            <LoadingSkeleton height="20px" width="20px"></LoadingSkeleton>
          </div>
          <div className="flex items-center lg:justify-between justify-start gap-x-2 ml-3">
            <FontAwesomeIcon icon={faCompass} />
            <LoadingSkeleton height="20px" width="20px"></LoadingSkeleton>
          </div>
          <div className="flex items-center lg:justify-between justify-start gap-x-1">
            <FontAwesomeIcon icon={faDollar} />
            <LoadingSkeleton height="20px" width="20px"></LoadingSkeleton>
          </div>
        </div>
        <hr className="bg-gray-800 my-8 h-[2px] bg-opacity-20"></hr>
        <h1 className="font-semibold text-secondary text-2xl mb-3 font-serif">
          Tổng quan
        </h1>

        <LoadingSkeleton height="20px"></LoadingSkeleton>
        <LoadingSkeleton height="20px"></LoadingSkeleton>
        <LoadingSkeleton height="20px"></LoadingSkeleton>

        <hr className="bg-gray-800 my-8 h-[2px] bg-opacity-20"></hr>

        <h1 className="font-semibold text-secondary text-2xl mb-3 font-serif">
          Thông tin cơ bản
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 p-5 lg:p-0">
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Loại hình</h3>
              <LoadingSkeleton height="20px" width="60px"></LoadingSkeleton>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Phòng ngủ</h3>
              <LoadingSkeleton height="20px" width="40px"></LoadingSkeleton>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Phòng tắm</h3>
              <LoadingSkeleton height="20px" width="40px"></LoadingSkeleton>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Diện tích</h3>
              <LoadingSkeleton height="20px" width="60px"></LoadingSkeleton>
              <span className="font-medium">
                m<sup>2</sup>
              </span>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">
                Loại chủ quyền
              </h3>
              <LoadingSkeleton height="20px" width="60px"></LoadingSkeleton>
            </div>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Giá bán</h3>
              <LoadingSkeleton height="20px" width="60px"></LoadingSkeleton>
            </div>
          </div>
        </div>
        <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
      </div>
    </div>
  );
};

export default PropertyDetailLoading;
