import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import leftArrow from "../../../assets/images/icons/left-arrow.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const CollectiveMeetingSqaureList = () => {
  const blogListArr = [
    {
      image: "/images/marketPlace/marketplace.jpg",
      title: "ועד הבית",
      arrow_img: { leftArrow },
      link: "#",
    },
    {
      image: "/images/marketPlace/marketplace.jpg",
      title: "ועד הבית",
      arrow_img: { leftArrow },
      link: "#",
    },
    {
      image: "/images/marketPlace/marketplace.jpg",
      title: "ועד הבית",
      arrow_img: { leftArrow },
      link: "#",
    },
  ];

  const slides = blogListArr.map((el, index) => (
    <Link to={"" + el.link + ""} key={index}>
      <img src={el.image} alt="images" />
      <img
        className="imageArrow"
        src={el.arrow_img.leftArrow}
        alt="right-arrow"
      />
      <h6 className="imageTitle">{el.title}</h6>
    </Link>
  ));

  return (
    <>
      <div className="collectiveMeetingHeading">
        <Link to={"#"} className="downArrow">
          <KeyboardDoubleArrowDownIcon />
          לכל השירותים
        </Link>
        <h3>השירותים שהוזמנו</h3>
      </div>
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
        modules={[Autoplay, Pagination]}
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

export default CollectiveMeetingSqaureList;
