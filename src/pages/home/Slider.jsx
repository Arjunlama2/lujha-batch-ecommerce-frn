import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerData } from "../../assets/mockdata";

function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = BannerData.length;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: () => {
      const isFirst = currentSlide === 0;
      const isLast = currentSlide === totalSlides - 1;

      const dotTargets = isFirst
        ? [0, 1, 2]
        : isLast
          ? [totalSlides - 3, totalSlides - 2, totalSlides - 1]
          : [currentSlide - 1, currentSlide, currentSlide + 1];

      return (
        <ul className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((dot, index) => {
            const isActive =
              (isFirst && index === 0) ||
              (isLast && index === 2) ||
              (!isFirst && !isLast && index === 1);

            return (
              <li
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(dotTargets[index])}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${isActive ? "bg-pink-500" : "bg-gray-400"
                  }`}
              ></li>
            );
          })}
        </ul>
      );
    },
  };

  return (
    <div className="slider-container bg-gradient-to-br from-purple-50 to-pink-50">
      <Slider ref={sliderRef} {...settings}>
        {BannerData.map((el, i) => (
          <div key={i}>
            <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:h-[500px]">
              {/* Left Content */}
              <div className="flex-1 max-w-lg text-center md:text-left mb-8 md:mb-0">
                <p className="text-pink-500 text-sm font-medium mb-2">
                  {el.subtitle}
                </p>
                <h2 className="text-4xl font-bold text-gray-800 mb-2 leading-tight">
                  {el.title}
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {el.description}
                </p>
                <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium">
                  Shop Now
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="relative">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="w-80 h-80 object-cover rounded-full shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-cyan-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">

                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
