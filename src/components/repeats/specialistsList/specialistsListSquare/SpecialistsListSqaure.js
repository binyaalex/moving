import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import StarIcon from '@mui/icons-material/Star';

const SpecialistsListSqaure = () => {

  const specialistsListArr = [
    {
      image: "/images/specialists/specialists1.jpg",
      firstName: 'דניאל כהן',
      position: "מנקה",
      rating: "4.6",
      link: "/aboutspesialist",
    },
    {
      image: "/images/specialists/specialists2.jpg",
      firstName: 'יעל כהן',
      position: "שיפוצניקית",
      rating: "4.6",
      link: "/aboutspesialist",
    },
    {
      image: "/images/specialists/specialists3.jpg",
      firstName: 'איתי ערד',
      position: "שרברב",
      rating: "4.6",
      link: "/aboutspesialist",
    },
    {
      image: "/images/specialists/specialists4.jpg",
      firstName: 'חיה אזולאי',
      position: "מנקה",
      rating: "4.6",
      link: "/aboutspesialist",
    },
    {
      image: "/images/specialists/specialists5.jpg",
      firstName: 'יוני לוי',
      position: "מנקה",
      rating: "4.6",
      link: "/aboutspesialist",
    },
    // {
    //   image: "/images/specialists/specialists1.jpg",
    //   firstName: 'נעם מאיר',
    //   position: "מנקה",
    //   rating: "4.6",
    //   link: "/specialists",
    // },
    // {
    //   image: "/images/specialists/specialists2.jpg",
    //   firstName: 'מאיר ברנר',
    //   position: "מאבטח",
    //   rating: "4.6",
    //   link: "/specialists",
    // },
    // {
    //   image: "/images/specialists/specialists3.jpg",
    //   firstName: 'אבי דוידוף',
    //   position: "חשמלאית",
    //   rating: "4.6",
    //   link: "/specialists",
    // },
  ];

  const slides =
  specialistsListArr.length > 0
      ? specialistsListArr.map((el, i) => (
          <div className="" key={i}>
            <Link to={el.link}>
              <div className="specialistsBox">
                <div className="boxImg">
                  <img src={el.image} alt="doctor" className="specialistsBoxImg" />
                </div>
                <h6>{el.firstName}</h6>
                <p>{el.position}</p>
                <div className="startCon">
                  <span>{el.rating}</span>
                  <StarIcon />
                </div>
              </div>
            </Link>
          </div>
        ))
      : "";

  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={4}>
        {slides.length > 0
          ? slides.map((slideContent, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                {slideContent}
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </>
  );
};

export default SpecialistsListSqaure;
