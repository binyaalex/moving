import React from "react";

import { Link } from "react-router-dom";

import Head from '../repeats/head/Head';
import ServiceList from "../repeats/serviceList/ServiceList";

import "./AboutSpesialist.css";
//components
import Review from "../repeats/review/Review";
//images
import StarIcon from '@mui/icons-material/Star';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import review1 from "../../assets/images/review/review1.jpg";
import review2 from "../../assets/images/review/review2.jpg";
import review3 from "../../assets/images/review/review3.jpg";
import service1 from "../../assets/images/servicesList/service1.jpg";
import service2 from "../../assets/images/servicesList/service2.jpg";
import service3 from "../../assets/images/servicesList/service3.jpg";
import service4 from "../../assets/images/servicesList/service4.jpg";
import service5 from "../../assets/images/servicesList/service5.jpg";

const AboutSpesialist = () => {

  const serviceListArr = [
    {
      header: 'נקיון כניסה',
      price: 'חינם',
      par: 'כלול במחיר של תחזוקת הבית',
      img: service1,
      link: '#',
    },
    {
      header: 'נקיון יסודי',
      price: '75$',
      par: `1:30`,
      img: service2,
      link: '#',
    },
    {
      header: 'נקיון כללי של הדירה',
      price: '100$',
      par: `3:30`,
      img: service3,
      link: '#',
    },
    {
      header: 'ניקוי מקצועי של כל מכשירי החשמל הביתיים',
      price: '50$',
      par: `3:15`,
      img: service4,
      link: '#',
    },
    {
      header: 'שטיפת חלונות',
      price: '80$',
      par: `1:30`,
      img: service5,
      link: '#',
    },
  ]

  const reviewList = [
    {
      writerName: 'דני קורן',
      date: '11 מאי 2022',
      rating: '5.0',
      text: 'מנקה מעולה! ניקתה את כל הדירה אחרי אירוח.',
      img: review1,
    },
    {
      writerName: 'טל קרמר',
      date: '7 מאי 2022',
      rating: '4.0',
      text: '',
      img: review2,
    },
    {
      writerName: 'יונתן ספקטור',
      date: '1 מאי 2022',
      rating: '5.0',
      text: '',
      img: review3,
    },
  ]

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <div className="doctor_pages rtl">
            <Head text='יעל כהן' />
            <div className="doctor_banner">
              <div className="banner_content">
                <h1>יעל כהן</h1>
                <h6>מנקה</h6>
                <div className="doctor_heading align-center justify-between all_review_section">
                  <small>
                    <StarIcon />
                    4.6 (1435 ביקורות){" "}
                  </small>
                </div>
              </div>
            </div>

            <ServiceList serviceListArr={serviceListArr} text='השירותים של יעל' />

            <div className="review_rating_sec">
              <div className="container">
                <div className="doctors_area">
                  <div className="review_heading d-flex align-center justify-between">
                    <Link to="#" className="d-flex align-center">
                      <KeyboardDoubleArrowRightIcon />
                      לכל הביקורות{" "}
                    </Link>
                    <h3>ביקורות וציונים</h3>
                  </div>
                  <div className="service_box_area">
                    {
                      reviewList.map((el, i) => {
                        return (
                          <Review
                            writerName={el.writerName}
                            date={el.date}
                            rating={el.rating}
                            text={el.text}
                            img={el.img}
                            key={i}
                          />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSpesialist;