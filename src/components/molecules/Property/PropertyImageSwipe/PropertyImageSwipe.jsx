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
        bodyClassName="w-[600px] h-[500px] rounded-lg"
      >
        <img
          className="w-full h-full object-fit rounded-lg"
          src={propertyAPI.propertyImage(propertyCoverPaths[clickedIndex])}
        />
      </ModalBase>
    </div>
  );
};

export default PropertyImageSwipe;
