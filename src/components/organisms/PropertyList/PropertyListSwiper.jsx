import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../../molecules/Property/PropertyCard/PropertyCard";

const PropertyListSwiper = ({ item }) => {
  return (
    <section className="page-container">
      <Swiper
        slidesPerView={1}
        grabCursor={"true"}
        spaceBetween={40}
        direction={"horizontal"}
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
      >
        {item?.length > 0 &&
          item.slice(0, 4).map((item, idx) => (
            <SwiperSlide key={idx}>
              <PropertyCard key={item.id} item={item}></PropertyCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default PropertyListSwiper;
