import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import StarIcon from '@mui/icons-material/Star';

import microsoft from '../../../../../assets/images/getMoving/microsoft.jpg'
import law from '../../../../../assets/images/getMoving/law.jpg'
import textile from '../../../../../assets/images/getMoving/textile1.jpg'

const SpecialistsListSqaure = () => {

  const specialistsListArr = [
    {
      image: microsoft,
      firstName: 'מיקרוסופט',
      position: "עבדו באופן מקצועי ושמרו על הרהיטים",
      rating: "4.6",
    },
    {
      image: law,
      firstName: 'משרד עורכי דין',
      position: "עבדו באופן מקצועי ושמרו על הרהיטים",
      rating: "4.6",
    },
    {
      image: textile,
      firstName: 'ערד מפעל טקסטיל',
      position: "עבדו באופן מקצועי ושמרו על המכונות",
      rating: "4.6",
    },
    // {
    //   image: "/images/specialists/specialists4.jpg",
    //   firstName: 'חיה אזולאי',
    //   position: "עבדו באופן מקצועי ושמרו על הרהיטים",
    //   rating: "4.6",
    // },
    // {
    //   image: "/images/specialists/specialists5.jpg",
    //   firstName: 'יוני לוי',
    //   position: "עבדו באופן מקצועי ושמרו על הרהיטים",
    //   rating: "4.6",
    // },
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
            {/* <Link to={el.link}> */}
              <div className="specialistsBox">
                <div className="boxImg">
                  <img src={el.image} alt="doctor" className="specialistsBoxImg" />
                </div>
                <div className="recommmend">
                  <h6>{el.firstName}</h6>
                  <p>{el.position}</p>
                  {/* <div className="startCon">
                    <span>{el.rating}</span>
                    <StarIcon />
                  </div> */}
                </div>
              </div>
            {/* </Link> */}
          </div>
        ))
      : "";

  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1}>
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
