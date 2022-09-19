import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TransportFewItems.css";

//components

import moving from "../../assets/images/moving.jpg";
import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import kitchen from "../../assets/images/TI - price/kitchen.jpg";

const TransportFewItems = () => {



  const itemsArr = [
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
  ]

  return (
    <div className="transportFewItems">

      <div className="page_banner">
        <img src={moving} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הובלת פריטים בודדים</h1>
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
        <h1 className="homeTitle">הובלת פריטים בודדים</h1>
        <div className="fewItemsDiv">
            <div className="fewItemsImagesSide">
                צד שני
            </div>

            <div className="fewItemsFormSide">
                <h5>רשימת מחירים (200 - 1000 ₪)</h5>
                <div className="ItemsList">
                    {itemsArr.map((el, i) => {
                        return (
                            <div className="item" key={i}>
                                <img src={el.img} />
                                <div className="itemH">{el.header}</div>
                                <div className="itemPrice"><strong>מחיר:</strong> {el.price}₪</div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
      </div>

      <Reviews />
      <Footer />

    </div>
  );
};

export default TransportFewItems;
