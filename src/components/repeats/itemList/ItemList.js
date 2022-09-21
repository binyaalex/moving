import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemList.css'
// import Box from "./Box";
//images
import box from "../../../assets/images/moving/box.jpg"
import closet from "../../../assets/images/moving/closet.jpg"
import sofa from "../../../assets/images/moving/sofa.jpg"
import bed from "../../../assets/images/moving/bed.jpg"
import wm from "../../../assets/images/moving/wm.jpg"
import table from "../../../assets/images/moving/table.jpg"
import tv from "../../../assets/images/moving/tv.jpg"
import dresser from "../../../assets/images/moving/dresser.jpg"
import stuff from "../../../assets/images/moving/stuff.jpg"

import kitchen from '../../../assets/images/moving/kitchen.jpg'
import closet2 from '../../../assets/images/moving/closet2.jpg'
import closet3 from '../../../assets/images/moving/closet3.jpg'
import closet4 from '../../../assets/images/moving/closet4.jpg'
import closet5 from '../../../assets/images/moving/closet5.jpg'
import closet6 from '../../../assets/images/moving/closet6.jpg'

const closetArr = [
  {
    img: kitchen,
    title: "אי מטבח",
  },
  {
    img: closet2,
    title: "ארון 2 דלתות",
  },
  {
    img: closet3,
    title: "ארון 3 דלתות",
  },
  {
    img: closet4,
    title: "ארון 4 דלתות",
  },
  {
    img: closet5,
    title: "ארון 5 דלתות",
  },
  {
    img: closet6,
    title: "ארון 6 דלתות",
  },
];

const categoryArr = [

  {
    img: closet,
    title: "ארונות",
    modalArr: closetArr
  },
  {
    img: sofa,
    title: "ספות",
  },
  {
    img: bed,
    title: "מיטות",
  },
  {
    img: wm,
    title: "מכונות כביסה",
  },
  {
    img: table,
    title: "שולחנות",
  },
  {
    img: "/images/moving/chair.jpg",
    title: "כסאות",
  },
  {
    img: tv,
    title: "טלויזיות",
  },
  {
    img: dresser,
    title: "שידות",
  },
  {
    img: stuff,
    title: "שונות",
  },

];

const ItemList = (props) => {

  return (
    <div className="ItemsList">
      {/* <Box /> */}
      {(props.itemsArr || categoryArr).map((el, i) => {
        return (
          <div className="item" key={i} onClick={() => props.handleShow(el)}>
            <img src={el.img} />
            <div className="itemText">
              <strong className="itemH">{el.title}</strong>
              {props.withPrice && <p className="itemPrice"> ₪ {el.price}</p>}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ItemList;