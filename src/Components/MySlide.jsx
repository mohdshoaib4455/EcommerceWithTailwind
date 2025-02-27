import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const MySlider = ({ arrowRef }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4">
      <Slider ref={arrowRef} {...settings}>
        {Array(20)
          .fill()
          .map((_, index) => (
            <div key={index} className="px-2 flex justify-center items-center">
              <div className="w-full h-60 border rounded-xl flex flex-col justify-center px-4">
                <h4 className="text-xl font-semibold font-sans">Sarah M.</h4>
                <p className="text-sm font-sans mt-3">
                  "I'm blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I've bought has exceeded my expectations.”
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MySlider;
