// components/Hero.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.png"
import hero2 from "@/assets/hero2.jpg"
import hero3 from "@/assets/hero3.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Mock data for the slides. Replace with your actual data.
const sliderData = [
  {
    image: hero1,
    title: "Experience the Future of Tech",
    subtitle: "High-performance gadgets designed for the modern world.",
  },
  {
    image: hero2,
    title: "Unleash Your Creativity",
    subtitle: "Tools that empower you to create without limits.",
  },
  {
    image: hero3,
    title: "Connect Like Never Before",
    subtitle: "Seamless integration for your entire digital life.",
  },
];


const Hero = () => {
  return (
    <div className="relative w-full  md:h-[85vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-50" // Darkens the image to make text readable
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Button size="lg" className="mt-8">
                  Shop Now
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;