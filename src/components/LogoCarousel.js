// src/components/LogoCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./LogoCarousel.css"; // custom styles

const logos = [
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon4-1.png",
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon5-1.png",
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon6-1-300x56.png",
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon7-1.png",
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon1-1.png",
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon2-1.png",
  "https://moneyplantfx.com/wp-content/uploads/2024/07/icon3-1.png",
];

const LogoCarousel = () => {
  return (
    <div className="logo-carousel-bg py-4">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
              <img src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoCarousel;
