import React, { useState } from "react";
import "./GetMoving.css";
import { BsTelephone } from "react-icons/bs";
import { BsArrow90DegDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Head from '../repeats/head/Head';
import AddressInput from "./addressSection/AddressInput";
import MovingTime from "./MovingTime";
import Input from "./addressSection/Input";
import { BsFillHouseFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";


function GetMoving(props) {
  const apartmentArr = [
    {
      name: "2 חדרים",
      value: "2 חדרים",
    },
    {
      name: "3 חדרים",
      value: "3 חדרים",
    },
    {
      name: "4 חדרים",
      value: "4 חדרים",
    },
    {
      name: "5 חדרים",
      value: "5 חדרים",
    },
    {
      name: "6 חדרים",
      value: "6 חדרים",
    },
    {
      name: "7 חדרים",
      value: "7 חדרים",
    },
    {
      name: "פנטהאוז",
      value: "פנטהאוז",
    },
    {
      name: "בית פרטי",
      value: "בית פרטי",
    },
  ];
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="מילוי כתובות" />
          <div className="add_card_pages rtl">
            <div className="add_card_area">

              <div className="add_card_text_area">
                <div className="address-title-container ">
                  <h1 className="add_card_h1"> מהיכן עוברים</h1>
                  <BsFillHouseFill className="house-icon" />
                </div>

                <div className="add_card_name movingType">
                  <h1 className="add_card_name_h1"> סוג הובלה? </h1>
                  <select name="" id="" className="select_address_input">
                    {apartmentArr.map((type) => {
                      return <option value={type.value}>{type.name}</option>;
                    })}
                  </select>
                </div>
                <AddressInput address={"כתובת נוכחית"} placeholder={"נתניה"} />
                <div className="address-title-container">
                  <h1 className="add_card_h1"> לאן עוברים</h1>
                  <BsFillHouseFill className="house-icon" />
                </div>
                <AddressInput
                  address={"כתובת חדשה"}
                  placeholder={"פתח תקווה"}
                />
                <div className="address-title-container">
                  <h1 className="add_card_h1"> מתי עוברים</h1>
                  <BsClockFill className="house-icon" />
                </div>
                <div className="add_card_area">

                  <MovingTime />
                </div>
              </div>
              <div className="add_card_pages_box_btn">
                <div className="add_card_pages_box_btn_area">
                  <Link to={"/store"} className="add_card_pages_box_go_btn itemPick">
                    לבחירת פריטים{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetMoving;
