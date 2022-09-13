import React from "react";
import "./Head.css";

import HeaderHeart from "../../../assets/images/productDetails/header_heart.png";

import HeaderLeftArrow from "../../../assets/images/productDetails/header_left_arrow.png";
import { Link } from "react-router-dom";

const Head = ({ text }) => {
  return (
    <>
      <div className="product_detail_head">
        <img
          src={HeaderHeart}
          alt="arrow"
          height="30px"
          width="30px"
          className="menuIcon"
        />
        <div className="headHeader">{text}</div>
        <Link to={"/marketplace"} className="header_left_arrow_link">
          <img src={HeaderLeftArrow} width="19px" className="bell" alt="bell" />
        </Link>
      </div>
    </>
  );
};

export default Head;
