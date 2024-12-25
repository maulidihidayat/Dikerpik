"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ImageInfo from "../Template/ImageInfo";

interface ImageData {
  id: number;
  image: string;
  title: string;
}

interface DataProps {
  data: ImageData[];
}

const ImageSwippe: React.FC<DataProps> = ({ data }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000,disableOnInteraction: false }}
        effect="fade"
        speed={1000}
        
      >
        {data.map((information) => (
          <SwiperSlide key={information.id}>
            <ImageInfo image={information.image} title={information.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwippe;