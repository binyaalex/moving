import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.css";

//components
// import Head from '../repeats/head/Head';
// import ServiceList from "../repeats/serviceList/ServiceList";
// import Review from "../repeats/review/Review";
import MainBtn from '../repeats/mainBtn/MainBtn'
// import SpecialistsList from "../selectMovingCategory/specialistsList/SpecialistsList";
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images
import StarIcon from '@mui/icons-material/Star';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import microsoft from '../../assets/images/moving/microsoft.jpg'
import law from '../../assets/images/moving/law.jpg'
import bg from '../../assets/images/home-flipped.jpg'

import service1 from "../../assets/images/moving/service1.jpg";
import service2 from "../../assets/images/moving/service2.jpg";
import { BsTelephone } from "react-icons/bs";
import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import home from "../../assets/images/home-flipped.jpg";

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
      link: '/transport'
    },
    {
      header: 'אחסנה',
      img: storing,
      link: '/storage'
    },
  ]

  return (
    <>
      <div className="home_banner">
        <img src={home} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>א.א מובילים &</h1>
            <h1>ב.ר שירותי אחסון</h1>
            <p>כל פתרונות ההובלה והאחסנה מרוכזים במקום אחד</p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='הובלה' link='/transport' />
            <MainBtn text='אחסנה' link='/storage' isLight={true} />
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
                <Link to={el.link}>
                  <img src={el.img} />
                </Link>
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

      <Reviews />
      <Footer isContact={true} />

    </>
  );
};

export default Home;
