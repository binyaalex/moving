import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductsSquare = (props) => {
  return (
    <>
      <div className="list_box col-6 pb-4">
        <Link to={"" + props.link + ""}>
          <div className="box_img">
            <img src={props.img} alt="service" />
            {props.productKey === 1 ? (
              <>
                <div className="time_dt d-flex justify-content-center">
                  <p className="off15">
                    <strong>35% הנחה</strong>
                    <span>03:25:41</span>
                  </p>
                </div>
              </>
            ) : props.productKey === 2 ? (
              <>
                <div className="time_dt d-flex justify-content-center dark">
                  <p>
                    <strong>10$-</strong>
                  </p>
                </div>
              </>
            ) : props.productKey === 3 ? (
              <>
                <div className="time_dt d-flex justify-content-center">
                  <p className="off15">
                    <strong>35% הנחה</strong>
                    <span>03:25:41</span>
                  </p>
                </div>
              </>
            ) : props.productKey === 4 ? (
              <></>
            ) : (
              ""
            )}
          </div>
        </Link>
        <div className="box_detail d-flex justify-content-between flex-row-reverse">
          <div className="product_title">
            <p>{props.title}</p>
          </div>
          <span>{props.price}</span>
        </div>
        <Link to={"#"} className="wish_list_icon">
          <FavoriteBorderIcon />
        </Link>
      </div>
    </>
  );
};

export default ProductsSquare;
