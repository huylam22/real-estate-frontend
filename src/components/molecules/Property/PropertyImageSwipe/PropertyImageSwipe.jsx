import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../../../config/config";
import { propertyAPI } from "../../../../api/propertyAPI";
import { Navigation, Pagination } from "swiper";
import ModalBase from "../../../modal/ModalBase";

const PropertyImageSwipe = ({ item }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [clickedIndex, setClickedIndex] = React.useState(null);

  const { propertyId } = useParams();
  const { data, error } = useSWR(
    propertyAPI.getPropertyDetail(propertyId),
    fetcher
  );
  if (!data) return null;

  const { propertyCoverPaths } = data;
  const onClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="swiper-container bg-black bg-opacity-80 mb-8 text-white mt-10">
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
                      onClick={(e) => {
                        setOpenModal(true);
                        console.log(idx);
                        setClickedIndex(idx);
                        // console.log(propertyAPI.propertyImage(item));
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      <ModalBase
        visible={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        bodyClassName="lg:w-[600px] lg:h-[500px] rounded-lg m-5"
      >
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 bg-white border border-[#E7ECF3] rounded-full cursor-pointer -translate-y-1/3 translate-x-1/3"
          onClick={onClose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <img
          className="w-full h-full object-fill lg:rounded-lg"
          src={propertyAPI.propertyImage(propertyCoverPaths[clickedIndex])}
        />
      </ModalBase>
    </div>
  );
};

export default PropertyImageSwipe;
