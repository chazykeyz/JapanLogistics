import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ArrowRound } from "../../svg/rightArrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, A11y, Controller } from "swiper";

export default function Agents() {
  const data = [
    { image: "../partner1.png" },
    { image: "../partner2.png" },
    { image: "../partner4.png" },
    { image: "../partner5.png" },
    { image: "../partner6.png" },
    { image: "../partner7.png" },
  ];
  return (
    <div
      className=" w-screen flex flex-col items-center py-10 bg-blue-900 "
      id="release"
    >
      <div className="font-1 text-3xl text-white pb-2 ">Our Partners</div>
      <div className="lg:w-3/4 w-full 2xl:w-2/4 ">
        <div className="text-center text-sm pb-10 text-white">
          We have been into good association with the following organizations to
          ensure a quality service is being delivered to our customers
          throughout the process
        </div>
        <div className="w-full  flex justify-center ">
          {data.map((item) => (
            <div key={item.id} className="  mx-1">
              <img
                alt="product_image"
                src={item.image} // use normal <img> attributes as props
                style={{
                  width: 100,
                }}
                className=" cursor-pointer  grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
