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

//images
import StarIcon from '@mui/icons-material/Star';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import microsoft from '../../../assets/images/getMoving/microsoft.jpg'
import law from '../../../assets/images/getMoving/law.jpg'
import review3 from "../../../assets/images/review/review3.jpg";
import service1 from "../../../assets/images/getMoving/service1.jpg";
import service2 from "../../../assets/images/getMoving/service2.jpg";
import { BsTelephone } from "react-icons/bs";
import clock from "../../../assets/images/icons/clock.png";
import pc from "../../../assets/images/icons/pc.png";
import lock from "../../../assets/images/icons/lock.png";
import moving from "../../../assets/images/moving.jpg";
import storing from "../../../assets/images/storing.jpg";
import clip from "../../../assets/images/magal/clip.mp4";
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
  const prosArr = [
    {
      header: 'שירות 24/7',
      par: 'זמינות מסביב לשעון',
      img: clock,
    },
    {
      header: 'בטחון מלא',
      par: 'אחריות ואבטחה על כל הציוד',
      img: lock,
    },
    {
      header: 'זה פשוט!',
      par: 'הזמנה קלה ומהירה אונליין',
      img: pc,
    }
  ]
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


  const reviewList = [
    {
      writerName: 'מיקרוסופט',
      date: '11 מאי 2022',
      rating: '5.0',
      text: "עבדו באופן מקצועי ושמרו על הרהיטים",
      img: microsoft,
    },
    {
      writerName: 'משרד עורכי דין',
      date: '7 מאי 2022',
      rating: '4.0',
      text: "עבדו באופן מקצועי ושמרו על הרהיטים",
      img: law,
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
      <div className="pros">
        {prosArr.map((el, i) => {
          return (
            <div className="pro" key={i}>
              <img src={el.img} />
              <h1>{el.header}</h1>
              <p>{el.par}</p>
            </div>
          )
        })}
      </div>

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
        <h1 className="homeTitle">אודותנו</h1>
        <div className="clipWrapper">
          <video className="clip" src={clip} autoPlay={true} muted={true} controls />
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