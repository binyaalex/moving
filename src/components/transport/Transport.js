import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Transport.css";

//components

import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import home from "../../assets/images/home-flipped.jpg";
import fewItems from "../../assets/images/moving.jpg";
import apartments from "../../assets/images/MT/4.jpg";
import office from "../../assets/images/MOF/shutterstock_313432601.jpg";
import clip from "../../assets/images/magal/clip.mp4";

const Transport = () => {



  const servicesArr = [
    {
      header: 'הובלת פריטים בודדים',
      img: fewItems,
    },
    {
      header: 'הובלת דירות ובתים',
      img: apartments,
    },
    {
      header: 'הובלת משרדים/מפעלים',
      img: office,
    },
  ]

  return (
    <div className="transport">

      <div className="page_banner">
        <img src={home} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הובלה</h1>
            <p>בכל הארץ </p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='הובלה' link='#' />
            <MainBtn text='אחסנה' link='#' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">סוגי הובלה</h1>
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

      <Reviews />
      <Footer />

    </div>
  );
};

export default Transport;
