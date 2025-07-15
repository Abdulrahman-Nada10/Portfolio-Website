"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      src: "/assets/servis/mobileApp.jpg",
      alt: "Mobile App Development",
    },
    {
      src: "/assets/servis/front1.jpg",
      alt: "Frontend Development",
    },
    {
      src: "/assets/servis/fullstack.png",
      alt: "Fullstack Development",
    },
    {
      src: "/assets/servis/b1.jpg",
      alt: "Backend Services",
    },
    {
      src: "/assets/servis/mobileApp.jpg",
      alt: "Mobile App Again",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-6">
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="rounded-2xl overflow-hidden"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-72 md:h-80 lg:h-96">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover rounded-xl"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
