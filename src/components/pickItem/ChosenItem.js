import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

function ChosenItem(props) {

  const slides =
  props.paidServiceArr.length > 0
      ? props.paidServiceArr.map((el, i) => (

        <div className="paidServiceSquareDiv" key={i}>
          {el.quantity ? (
            <>
              <img className="paidServiceSquareImg" src={el.img} alt="aa" />
              <div id="paidServiceSquareTitle">{el.title}</div>
              <div id="paidServiceSquareTitle">כמות: {el.quantity} </div>
            </>
          ) : (
            el.price &&
            <>
              <img className="paidServiceSquareImg" src={el.img} alt="aa" />
              <div id="paidServiceSquareTitle">{el.title}</div>
              <div id="paidServiceSquarePrice">מחיר: {el.price} ש''ח</div>
            </>
          )}
          {
            !el.quantity && !el.price && <>
              <img className="paidServiceSquareImg" src={el.img} alt="aa" />
              <div id="paidServiceSquareTitle">{el.title}</div>
            </>
          }
        </div>
        ))
      : "";

  return (
    <>
      <Swiper 
        spaceBetween={20} 
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay ]}
      >
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
}

export default ChosenItem;
