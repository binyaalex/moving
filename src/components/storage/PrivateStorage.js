import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Storage.css";

//components

import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import businessStorage from "../../assets/images/PS/businessStorage.jpg";
import online from "../../assets/images/PS/online.jpg";
import getback from "../../assets/images/PS/getback.jpg";

const PrivateStorage = () => {

  const servicesArr = [
    {
      header: 'אונליין',
      img: online,
      link: '/onlinestorage'
    },
    {
      header: 'בעזרת נציג',
      img: getback,
      link: '/getbackStorage'
    },
  ]

  return (
    <>

      <div className="page_banner">
        <img src={privateStorage} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>אחסנה פרטית</h1>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='הצעת מחיר אונליין' link='/onlinestorage' />
            <MainBtn text='הזמנה בעזרת נציג' link='/getbackStorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">דרכי הזמנה</h1>
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
        <h1 className="homeTitle">איך לארוז דירה</h1>
        <div className="clipWrapper">
          <video className="clip" src={clip} autoPlay={true} muted={true} controls />
        </div>
      </div>

      <Reviews />
      <Footer isContact={true} />

    </>
  );
};

export default PrivateStorage;
