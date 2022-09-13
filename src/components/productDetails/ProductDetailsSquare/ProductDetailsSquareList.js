import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";

import banner from "../../../assets/images/productDetails/banner.jpg";


const ProductDetailsSquareList = () => {
  const ProductDetailsListArr = [
    {
      image: banner,
      image_text: "-10$",
    },
    {
      image: banner,
      image_text: "-10$",
    },
    {
      image: banner,
      image_text: "-10$",
    },
  ];

  const slides = ProductDetailsListArr.map((el, index) => (
    <div className="productdetail_image_div" key={index}>
      <img src={el.image} alt="product" />
      <div className="time_dt d-flex align-content-center justify-content-center dark">
        <p className="time_dt_p">{el.image_text}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Swiper spaceBetween={30}>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductDetailsSquareList;
