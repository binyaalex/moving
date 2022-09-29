import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images
import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import home from "../../assets/images/home-flipped.jpg";

const Home = () => {

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
            <h1>הובלה ואחסנה </h1>
            <h3>א.א מובילים & ב.ר שירותי אחסון</h3>
            <div>כל הפתרונות מרוכזים עבורך במקום אחד</div>
            <div>שירות בכל הארץ באמינות ודיוק ללא פשרות</div>

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
