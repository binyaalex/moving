import React from "react";
import { Link } from "react-router-dom";

const PaidServiceSqaure = (props) => {
  return (
    <div className="paidServiceSquareDiv" key={props.key}>
      <Link to={props.link}>
        <img className="paidServiceSquareImg" src={props.img} alt="aa" />
        <div id="paidServiceSquareTitle">{props.title}</div>
      </Link>
    </div>
  );
};

export default PaidServiceSqaure;
