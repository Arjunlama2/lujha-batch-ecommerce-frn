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
    beforeChange: (_, next) => setCurrentSlide(next),
    autoplay: true,
    appendDots: () => {
      const isFirst = currentSlide === 0;
      const isLast = currentSlide === totalSlides - 1;

      // Decide which actual slides these 3 dots represent
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
                onClick={() => sliderRef.current.slickGoTo(dotTargets[index])}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  isActive ? "bg-black" : "bg-gray-400"
                }`}
              ></li>
            );
          })}
        </ul>
      );
    },
  };

  return (
    <div className="slider-container ">
      <Slider ref={sliderRef} {...settings}>
        {BannerData.map((el, i) => (
          <div
            key={i}
            className=" flex items-center justify-center container "
            // style={{
            //   backgroundImage: `url("https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg")`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   width: "100%",
            // }}
          >
            <img src={el.image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
