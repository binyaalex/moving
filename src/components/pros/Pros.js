import React, { useState } from "react";
import "./Pros.css";

import clock from "../../assets/images/icons/clock.png";
import pc from "../../assets/images/icons/pc.png";
import lock from "../../assets/images/icons/lock.png";

const Pros = () => {

  const prosArr = [
    {
      header: 'שירות 24/7',
      par: 'זמינות מסביב לשעון',
      img: clock,
    },
    {
      header: 'בטחון מלא',
      par: 'אחריות ואבטחה על כל הציוד',
      img: lock,
    },
    {
      header: 'זה פשוט!',
      par: 'הזמנה קלה ומהירה אונליין',
      img: pc,
    }
  ]

  return (

    <div className="pros">
      {prosArr.map((el, i) => {
        return (
          <div className="pro" key={i}>
            <img src={el.img} />
            <h1>{el.header}</h1>
            <p>{el.par}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Pros;
