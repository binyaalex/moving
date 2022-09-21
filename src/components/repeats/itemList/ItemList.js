import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemList.css'

const categoryArr = [
  {
    img: "/images/moving/closet.jpg",
    title: "ארונות",
  },
  {
    img: "/images/moving/sofa.jpg",
    title: "ספות",
  },
  {
    img: "/images/moving/bed.jpg",
    title: "מיטות",
  },
  {
    img: "/images/moving/wm.jpg",
    title: "מכונות כביסה",
  },
  {
    img: "/images/moving/table.jpg",
    title: "שולחנות",
  },
  {
    img: "/images/moving/chair.jpg",
    title: "כסאות",
  },
  {
    img: "/images/moving/tv.jpg",
    title: "טלויזיות",
  },
  {
    img: "/images/moving/dresser.jpg",
    title: "שידות",
  },
  {
    img: "/images/moving/stuff.jpg",
    title: "שונות",
  },
];

const ItemList = (props) => {

  return (
    <div className="ItemsList">
      {(props.itemsArr || categoryArr).map((el, i) => {
        return (
          <div className="item" key={i}>
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