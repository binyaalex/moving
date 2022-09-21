import React, { useState } from "react";
import { Link } from "react-router-dom";

//components

import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import clip from "../../assets/images/magal/clip.mp4";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import online from "../../assets/images/TII/0d29cde6ea92435fc56819d5d1f3d55a.jpg";
import getback from "../../assets/images/TII/Two-Movers-With-Box-On-Stairca-97352312.jpg";

const TransportApartment = () => {

  const servicesArr = [
    {
      header: 'אונליין',
      img: online,
      link: '#'
    },
    {
      header: 'בעזרת נציג',
      img: getback,
      link: '/transportgetback'
    },
  ]

  return (
    <>

      <div className="page_banner">
        <img src={privateStorage} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הובלת דירות ובתים</h1>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='הצעת מחיר אונליין' link='#' />
            <MainBtn text='הזמנה בעזרת נציג' link='transportgetback' isLight={true} />
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

export default TransportApartment;
