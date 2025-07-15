"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const EventRev = () => {
  const slidesEev = [
    { src: "/assets/hero/New folder/1.jpg", alt: "Event 1" },
    { src: "/assets/hero/New folder/2.jpg", alt: "Event 2" },
    { src: "/assets/hero/New folder/3.jpg", alt: "Event 3" },
    { src: "/assets/hero/New folder/4.jpg", alt: "Event 4" },
    { src: "/assets/hero/New folder/5.jpg", alt: "Event 5" },
    { src: "/assets/hero/New folder/6.jpg", alt: "Event 6" },
    { src: "/assets/hero/New folder/7.jpg", alt: "Event 7" },
    { src: "/assets/hero/New folder/8.jpg", alt: "Event 8" },
    { src: "/assets/hero/New folder/9.jpg", alt: "Event 9" },
    { src: "/assets/hero/New folder/10.jpg", alt: "Event 10" },
    { src: "/assets/hero/New folder/11.jpg", alt: "Event 11" },
    { src: "/assets/hero/New folder/12.jpg", alt: "Event 12" },
    { src: "/assets/hero/New folder/13.jpg", alt: "Event 13" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-xl"
      >
        {slidesEev.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-72 md:h-80 lg:h-96 shadow-lg rounded-xl overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventRev;
