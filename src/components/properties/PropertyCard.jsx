import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBathtub,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { propertyAPI } from "../../api/propertyAPI";
const PropertyCard = ({ item }) => {
  const {
    districtPrefix,
    provincePrefix,
    districtName,
    propertyPostingStatus,
    propertyArea,
    propertyPrice,
    propertyAddressNumber,
    propertyAddressStreet,
    propertyCoverPaths,
    propertyBedrooms,
    propertyBathrooms,
    id,
    createdDate,
    provinceName,
  } = item;
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/properties/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="flex flex-col rounded-lg p-3 bg-white text-secondary select-none h-full shadow-md hover:shadow-neutral-400 transition-all cursor-pointer"
      onClick={handleClickNavigate}
    >
      <img
        src={
          propertyCoverPaths?.length > 0
            ? propertyAPI.propertyImage(propertyCoverPaths[0])
            : propertyAPI.defaultImage
        }
        alt=""
        className="w-full h-[250px] object-cover rounded-lg shadow-sm hover:shadow-neutral-300  transition-all  mb-5"
      ></img>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between  gap-4 mb-3">
          <h3
            className={`font-medium text-lg text-ellipsis whitespace-nowrap overflow-hidden hover:text-red-400`}
            style={{ whiteSpace: "nowrap" }}
          >
            {propertyPostingStatus}
          </h3>
          <span className="font-semibold text-xl w-[100px] font-serif">
            {propertyPrice} tỷ
          </span>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <span className="text-[#ADB8CC] font-medium text-sm">
            {propertyAddressNumber} {propertyAddressStreet}, {districtName},{" "}
            {provinceName}
          </span>
          <div className="flex gap-x-3 items-center font-light">
            <FontAwesomeIcon icon={faBed} />
            <span> {propertyBedrooms}</span>
            <FontAwesomeIcon icon={faBathtub} />
            <span> {propertyBathrooms}</span>
            <span>
              <FontAwesomeIcon icon={faHouseChimney} className="mr-2" />
              {propertyArea}
              <sup>2</sup>
            </span>
          </div>
          <h3 className={`font-medium text-[#ADB8CC] text-sm`}>
            Ngày đăng:{" "}
            {createdDate === null ? "Không có dữ liệu" : `${createdDate}`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
