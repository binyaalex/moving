import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const CategorySquareList = () => {
  const categoryListArr = [
    {
      image: "/images/home/category.jpg",
      discount: "קבל 20% הנחה על שירותי הנקיון",
      coupon: "מבצע-נקיון7",
      image_title: "01/05 - 31/05",
      link: "#",
    },
    {
      image: "/images/home/category.jpg",
      discount: "קבל 20% הנחה על שירותי הנקיון",
      coupon: "מבצע-נקיון7",
      image_title: "01/05 - 31/05",
      link: "#",
    },
    {
      image: "/images/home/category.jpg",
      discount: "קבל 20% הנחה על שירותי הנקיון",
      coupon: "מבצע-נקיון7",
      image_title: "01/05 - 31/05",
      link: "#",
    },
  ];

  const slides = categoryListArr.map((el, index) => (
    <Link to={"" + el.link + ""} key={index}>
      <img src={el.image} alt="images" className="category_image" />
      <h6 className="imageDate">{el.image_title}</h6>
      <h6 className="imageDiscount">{el.discount}</h6>
      <h6 className="imageCode">
        <span>
          <b>קוד: </b>
        </span>
        {el.coupon}
      </h6>
    </Link>
  ));

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay, Pagination ]}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySquareList;
