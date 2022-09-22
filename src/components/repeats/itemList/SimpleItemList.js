import React, { useState } from "react";
import './ItemList.css'

const SimpleItemList = (props) => {

  return (
    <div className="ItemsList">
      {props.itemsArr.map((el, i) => {
        return (
          <div className="item" key={i} >
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

export default SimpleItemList;