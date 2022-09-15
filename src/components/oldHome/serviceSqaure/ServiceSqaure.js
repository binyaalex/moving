import React from "react";
import { Link } from "react-router-dom";

const ServiceSqaure = (props) => {
  return (
    <>
      <Link to={props.link}>
        <div className="serviceSquare">
          <div className="serviceSquareImgDiv">
            <img className="serviceSquareImg" src={props.image} />
            <div className="serviceSquareText">
              <p className="serviceSquareTitle">{props.title}</p>
              <p className="serviceSquareTiming">{props.timing}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceSqaure;
