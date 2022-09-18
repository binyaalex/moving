import './Box.css'
import React from "react";
import { Link } from "react-router-dom";

import boxImg from '../../assets/images/moving/box.jpg'

const Box = () => {

  const displayExplain = () => {
    const cardboardExplain = document.querySelector(".cardboardExplain");
    if (cardboardExplain.style.color === "gray") {
      cardboardExplain.style.color = "transparent";
      cardboardExplain.style.backgroundColor = "transparent";
    } else {
      cardboardExplain.style.color = "gray";
      cardboardExplain.style.backgroundColor = "white";
    }
  }

  return (
    <div className="paidServiceSquareDiv" >
      <div>
        <img className="paidServiceSquareImg" src={boxImg} alt="aa" />
        <div className="cardboardExplain">אם לא ידוע לכם כמה קרטונים יש לכם להוביל, תוכלו לראות המלצה על פי מספר חדרי הבית. (במקרה של חריגה מהטווח שנקבתם, תחול תוספת בעלות של 15 ש"ח לקרטון). חשוב לדעת! גודל קרטון מקסימלי המותר הינו 65*50*50 ס"מ.
        </div>
        <div id="paidServiceSquareTitle"  >
          <div className="boxPick">
            <select
              placeholder=""
              className="boxSelect"
              name="floor"
              id="floatingSelect"
              aria-label="Floating label select example"
              onClick={displayExplain}
            >
              <option selected>בחר</option>
              <option value="0">0 - אין לי קרטונים</option>
              <option value="10">1-10 דירת חדר</option>
              <option value="20">11-20 דירת חדר</option>
              <option value="30">21-30 דירת 1-2 חד'</option>
              <option value="40">31-40 דירת 1-2 חד'</option>
              <option value="50">41-50 דירת 2-3 חד'</option>
              <option value="60">51-60 דירת 3 חד'</option>
              <option value="70">61-70 דירת 3-4 חד'</option>
              <option value="80">71-80 דירת 3-4 חד'</option>
              <option value="100">81-100 דירת 4 חד'</option>
              <option value="120">101-120 דירת 4-5 חד'</option>
              <option value="140">121-140 דירת 5 חד'</option>
              <option value="160">141-160 דירת 6 חד'</option>
            </select>
            <label className="boxLable" for="floatingSelect">
              כמות קרטונים
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
