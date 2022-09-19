import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Storage.css";

//components

import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import businessStorage from "../../assets/images/PS/businessStorage.jpg";

const Storage = () => {



  const servicesArr = [
    {
      header: 'פרטית',
      img: privateStorage,
      link: '/privateStorage'
    },
    {
      header: 'עסקית',
      img: businessStorage,
      link: '/businessStorage'
    },
  ]

  return (
    <>

      <div className="page_banner">
        <img src={storing} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>אחסנה</h1>
            <p>בכל הארץ </p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='פרטית' link='/privateStorage' />
            <MainBtn text='עסקית' link='/businessStorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">סוגי אחסנה</h1>
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

      <div className="about blog">
        <h1 className="homeTitle">איך לבחור שירות אחסנה</h1>
        <div className="clipWrapper">
          <video className="clip" src={clip} autoPlay={true} muted={true} controls />
        </div>
      </div>

      <Reviews />
      <Footer />

    </>
  );
};

export default Storage;
