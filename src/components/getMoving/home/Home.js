import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.css";

//components
import Head from '../../repeats/head/Head';
import ServiceList from "../../repeats/serviceList/ServiceList";
import Review from "../../repeats/review/Review";
import MainBtn from '../../storing/generalComponents/MainBtn'
import SpecialistsList from "../selectMovingCategory/specialistsList/SpecialistsList";
import PersonalInfo from "../../storing/generalComponents/PersonalInfo";
import Pros from "../../pros/Pros";

//images
import StarIcon from '@mui/icons-material/Star';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import microsoft from '../../../assets/images/getMoving/microsoft.jpg'
import law from '../../../assets/images/getMoving/law.jpg'
import review1 from "../../../assets/images/review/review1.jpg";
import review2 from "../../../assets/images/review/review2.jpg";
import review3 from "../../../assets/images/review/review3.jpg";
import service1 from "../../../assets/images/getMoving/service1.jpg";
import service2 from "../../../assets/images/getMoving/service2.jpg";
import { BsTelephone } from "react-icons/bs";
import moving from "../../../assets/images/moving.jpg";
import storing from "../../../assets/images/storing.jpg";
import clip from "../../../assets/images/magal/clip.mp4";
import star from "../../../assets/images/icons/star.png";
const Home = () => {

  const [isMoving, setIsMoving] = useState(false);
  let isAboutOpen = false

  const movingHandle = () => {
    console.log(1);
    if (isAboutOpen) {
      console.log(2);
      isAboutOpen = false
      setIsMoving(false)
    } else {
      isAboutOpen = true
      setIsMoving(true)
    }
  }

  const servicesArr = [
    {
      header: 'הובלה',
      img: moving,
    },
    {
      header: 'אחסנה',
      img: storing,
    },
  ]


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
    <>
      {/* <div className="PageDad"> */}
      {/* <div className="page"> */}
      {/* <div className="doctor_pages rtl aboutProvider"> */}
      {/* <Head text='א.א מובילים' /> */}
      <div className="provider_banner">
        <img />
        <div className="banner_content">
          <div className="banner_title">
            <h1>א.א מובילים &</h1>
            <h1>ב.ר שירותי אחסון</h1>
            <p>כל פתרונות ההובלה והאחסנה מרוכזים במקום אחד</p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='הובלה' link='#' isLight={true} />
            <MainBtn text='אחסנה' link='#' />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">השירותים שלנו</h1>
        <div className="services">
          {servicesArr.map((el, i) => {
            return (
              <div className="service" key={i}>
                <img src={el.img} />
                <h1>{el.header}</h1>
              </div>
            )
          })}
        </div>
      </div>

      <div className="about">
        <h1 className="homeTitle">אודותינו</h1>
        <div className="clipWrapper">
          <video className="clip" src={clip} autoPlay={true} muted={true} controls />
        </div>
      </div>

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


      {/* <div className="bannerRight">
            <div className="banner_content_phone">
              <h6>03-7777777</h6>
              <BsTelephone className="telephone-icon" />
            </div>
            <div className="doctor_heading align-center justify-between all_review_section">
              <small>
                <StarIcon />
                4.6 (1435 ביקורות){" "}
              </small>
            </div>
          </div>
          <div className="bannerLeft">
            <div
              onClick={movingHandle}
              to="#"
              className="aboutBtn"
            >
              אודות
            </div>
          </div> */}

      {isMoving ? (
        <div className="about_area">
          <div className="about_text"> א.א מובילים חברת הובלות ואחסנה, מספקים שירותי הובלות לכל הארץ כולל הובלות קירור. </div>
        </div>
      ) : (
        ""
      )}

      {/* <ServiceList serviceListArr={serviceListArr} text='השירותים שלנו' /> */}

      <div className="review_rating_sec office ">

        <SpecialistsList />

      </div>
      <div className="add_card_pages rtl">
        <div className="add_card_area factorytime">
          <div className="storingType_h1_wrapper">
            <h1 className="storingType_h1 storingType_h1">צור קשר</h1>
          </div>
          <div className="row specialistsBoxArea">
            <PersonalInfo header='השאר פרטים ליצירת קשר' />
          </div>
        </div>
      </div>
      <div className="aboutProvidesMainBtnDiv" >
        <MainBtn text='אישור' link='#' />
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
