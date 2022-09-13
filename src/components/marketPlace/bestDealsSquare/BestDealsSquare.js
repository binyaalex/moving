import React from "react";

import { Link } from "react-router-dom";

const BestDealsSquare = (props) => {
  return (
    <>
      <div className="list_box col-6 pb-4">
        <Link to={"" + props.link + ""}>
          <div className="box_img">
            <img src={props.img} alt="service" />
          </div>
        </Link>
        <div className="box_detail d-flex justify-content-between flex-row-reverse">
          <div className="product_title">
            <p>{props.title}</p>
          </div>
          <span>{props.price}</span>
        </div>
      </div>
    </>
  );
};

export default BestDealsSquare;
