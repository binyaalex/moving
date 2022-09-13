import React from "react";
import { Link } from "react-router-dom";

const HospitalStaySquare = (props) => {
  return (
    <Link
      onClick={() => {
        // props.setOpenSideBar(!props.openSideBar);
        props.openSideBarComponent(props.link);
      }}
      to='#' 
      className="hospitalStaySquare"
    >
      <img className="hospitalStaySquareImg" src={props.img} />
      <h1 className="hospitalStaySquareHeader">{props.text}</h1>
    </Link>
  );
};

export default HospitalStaySquare;
