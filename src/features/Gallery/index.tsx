import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RevolverButton } from "@shared/ui/Buttons/RevolverButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./styles.module.scss";

type Swiper = any;

interface IGalleryProps {
  photos: any[];
}

const GalleryCustom: React.FC<IGalleryProps> = ({ photos }) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="container">
      <div
      // className="pc-gallery"
      // style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
      >
        <div className="gallery-nav">
          <RevolverButton
            buttonType="gallery"
            direction="previous"
            onClick={handlePrev}
          ></RevolverButton>
          <RevolverButton
            buttonType="gallery"
            direction="next"
            onClick={handleNext}
          ></RevolverButton>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {photos.map((photo: ImageMetadata, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={photo.src}
              className={styles.photo}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCustom;
