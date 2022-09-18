import React, { useState } from "react";
import "./Reviews.css";
import review1 from "../../assets/images/review/review1.jpg";
import review2 from "../../assets/images/review/review2.jpg";
import review3 from "../../assets/images/review/review3.jpg";
import star from "../../assets/images/icons/star.png";


const Reviews = () => {

  const reviewsArr = [
    {
      writerName: 'יובל לוי',
      date: '11 מאי 2022',
      rating: '5.0',
      text: "עבדו באופן מקצועי ושמרו על הרהיטים",
      img: review1,
    },
    {
      writerName: 'ניסים בוסקילה',
      date: '7 מאי 2022',
      rating: '4.0',
      text: "חוויה משנת חיים",
      img: review2,
    },
    {
      writerName: 'יונתן ספקטור',
      date: '1 מאי 2022',
      rating: '5.0',
      text: "עבדו באופן מקצועי ושמרו על הרהיטים",
      img: review3,
    },
  ]

  return (

    <div className="reviewsDiv">
      <h1 className="homeTitle">ביקורות</h1>
      <div className="reviews">
        {reviewsArr.map((el, i) => {
          return (
            <div className="review" key={i}>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <p className="reviewText">
                {el.text}
              </p>
              <div className="reviewer">
                <img src={el.img} />
                <div className="reviewerDetails">
                  <h1 className="name">{el.writerName}</h1>
                  <p className="date">{el.date}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Reviews;
