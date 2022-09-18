import React, { useState } from "react";
import "../moving/Moving.css";
import { BsTelephone } from "react-icons/bs";
import { BsArrow90DegDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Head from '../repeats/head/Head';
import AddressInput from "../addressSection/AddressInput";
import MovingTime from "../MovingTime";
import Input from "../addressSection/Input";
import { BsFillHouseFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import PersonalDetails from "../PersonalDetails";
import './Apartment.css';


function Apartments(props) {

  return (
    <div className="PageDad">
      <div className="page">
        <Head text="פרטי לקוח" />
        <div className="add_card_pages rtl">
          <div className="add_card_area">
            <PersonalDetails />
          </div>
        </div>
        <div className="filter-btn-div apartment">
          <Link to={"/getoffer"} className="filter-btn">
            אישור{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Apartments;
