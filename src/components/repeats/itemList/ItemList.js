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
const boxArr = [
  { a: 'a', b: 'b' }
]
const categoryArr = [
  {
    img: box,
    title: "קרטונים",
    modal: 'Box',
    modalArr: boxArr
  },
  {
    img: closet,
    title: "ארונות",
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
  // {
  //   img: "/images/moving/chair.jpg",
  //   title: "כסאות",
  // },
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