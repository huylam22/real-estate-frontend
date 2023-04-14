import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config/config";
// import required modules
import { Pagination, Navigation } from "swiper";
import {
  faBed,
  faBathtub,
  faHouseChimney,
  faDollar,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropertyListSwiper from "../components/properties/PropertyListSwiper";
import Header from "../components/layout/Header";
import { Button } from "@material-tailwind/react";
import { propertyAPI } from "../api/propertyAPI";

const PropertyDetailPage = ({ showMain, setShowMain }) => {
  // THIS IS TO APPLY DIFFERENT LAYOUT OF HEADER FOR PROPERTY DETAIL PAGE (WORK IN PROGRESS)
  useEffect(() => {
    setShowMain(false);
    return () => setShowMain(true);
  }, [setShowMain]);

  return (
    <>
      <div>
        <Header></Header>
        <PropertyDetailImages></PropertyDetailImages>
      </div>
      <section className="page-container lg:p-0 p-5">
        <div className="flex justify-center gap-10">
          <PropertyDetailInfo />
          <div
            className="max-w-[200px] sticky top-5 bottom-0"
            style={{ alignSelf: "flex-start", position: "-webkit-sticky" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias
            dolore est itaque assumenda minus iure et ullam id voluptatibus
            illum at temporibus maiores numquam, facere a dicta voluptates
            consectetur?
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

function PropertyDetailImages({ item }) {
  const { propertyId } = useParams();

  const { data, error } = useSWR(
    propertyAPI.getPropertyDetail(propertyId),
    fetcher
  );

  if (!data) return null;
  const { propertyCoverPaths } = data;

  return (
    <div className="swiper-container bg-black bg-opacity-80 mb-8 text-white">
      {propertyCoverPaths.length > 0 && (
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={1}
          direction={"horizontal"}
          pagination={{
            type: "fraction",
          }}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {propertyCoverPaths?.length > 0 &&
            propertyCoverPaths.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="w-full h-[300px] max-w-[800px] mx-auto">
                    <img
                      className="w-full h-full object-cover"
                      src={propertyAPI.propertyImage(item)}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
}

function PropertyDetailInfo() {
  const { propertyId } = useParams();
  const { data, error } = useSWR(
    propertyAPI.getPropertyDetail(propertyId),
    fetcher
  );

  if (!data) return null;
  console.log(data);
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
    districtPrefix,
    provincePrefix,
    provinceName,
    districtName,
  } = data;
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-y-3">
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

        <hr className="bg-gray-800 my-8 h-[2px] bg-opacity-20"></hr>

        <h1 className="font-semibold text-secondary text-2xl mb-3 font-serif">
          Thông tin cơ bản
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-5 p-5 lg:p-0">
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Loại hình</h3>
              <span className="font-medium">{propertyLandType}</span>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Phòng ngủ</h3>
              <span className="font-medium">{propertyBedrooms}</span>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Phòng tắm</h3>
              <span className="font-medium">{propertyBathrooms}</span>
            </div>
            <hr className="bg-gray-800 my-2 h-[2px] bg-opacity-20"></hr>
          </div>
          <div className="flex flex-col gap-0 justify-center">
            <div className="flex justify-between">
              <h3 className="text-base text-secondary font-light">Diện tích</h3>
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
  );
}

function PropertySimilar() {
  const [open, setOpen] = React.useState(false);

  const { propertyId } = useParams();
  const { data, error } = useSWR(
    propertyAPI.getPropertyDetail(propertyId, "similar"),
    fetcher
  );
  console.log(data);
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
