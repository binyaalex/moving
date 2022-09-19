import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemList.css'

const ItemList = (props) => {

  return (
    <div className="ItemsList">
      {props.itemsArr.map((el, i) => {
        return (
          props.withPrice ? (
            <div className="item" key={i}>
              <img src={el.img} />
              <div className="itemText">
                  <div className="itemH">{el.title}</div>
                  <div className="itemPrice"><strong>מחיר:</strong> {el.price}₪</div>
              </div>
            </div>
          ) : (
            <div className="item" key={i}>
              <img src={el.img} />
              <div className="itemText">
                  <div className="itemH">{el.title}</div>
              </div>
            </div>
          )
        )
      })}
    </div>
  );
};

export default ItemList;