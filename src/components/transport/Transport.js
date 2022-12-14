import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Transport.css";

//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images
import moving from "../../assets/images/moving.jpg";
import fewItems from "../../assets/images/TII/moving-service-worker-sealing-cardboard-box-GRM5SEC.jpg";
import apartments from "../../assets/images/MT/4.jpg";
import office from "../../assets/images/MOF/shutterstock_313432601.jpg";
import clip from "../../assets/images/magal/clip.mp4";

const Transport = () => {

  useEffect(() => {
    document.querySelector(".homeTitle").scrollIntoView();
  })

  const servicesArr = [
    {
      header: 'הובלת פריטים בודדים',
      img: fewItems,
      link: '/transportfewitems',
    },
    {
      header: 'הובלת דירות ובתים',
      img: apartments,
      link: '/transportapartment',
    },
    {
      header: 'הובלת משרדים/מפעלים',
      img: office,
      link: '/transportoffice',
    },
  ]

  return (
    <div className="transport">

      <div className="page_banner">
        <img src={moving} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הובלה</h1>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='פריטים בודדים' link='/transportfewitems' />
            <MainBtn text='דירות ובתים' link='/transportapartment' isLight={true} />
            <MainBtn text='משרדים/מפעלים' link='/transportoffice' />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">בחרו את סוג ההובלה שלכם</h1>
        <div className="services">
          {servicesArr.map((el, i) => {
            return (
              <div className="service" key={i}>
                <Link to={el.link}>
                  <img src={el.img} />
                </Link>
                <h4>{el.header}</h4>
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

    </div>
  );
};

export default Transport;
