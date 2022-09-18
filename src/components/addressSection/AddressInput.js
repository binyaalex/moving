import React, { useState, useRef } from "react";
import "./AddressInput.css";
import Input from "./Input";

function AddressInput({ address, placeholder }) {
  const [isElevator, setIsElevator] = useState();
  const handleChange = (e) => {
    setIsElevator(e.target.value);
  };
  return (
    <div className="add_card_text_area">
      <div className="add_card_number">
        <h1 className="add_card_number_h1"> {address}</h1>
        <input
          placeholder={placeholder}
          type={"text"}
          className="add_card_number_input"
        />
      </div>
      <div className="add_card_name">
        <h1 className="add_card_name_h1"> קומה </h1>
        <select
          onChange={handleChange}
          value={isElevator}
          name=""
          id=""
          className="select_address_input"
        >
          <option selected>בחר</option>
          <option value="-4">-4</option>
          <option value="-3">-3</option>
          <option value="-2">-2</option>
          <option value="-1">-1</option>
          <option value="0">קרקע</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23+</option>
        </select>
      </div>
      { isElevator !== '0' &&
        <div className="add_card_name">
          <h1 className="add_card_name_h1"> מעלית </h1>
          <Input
            selected={"אין"}
            placeholder={"מעלית"}
            modalTitle={"יש מעלית ?"}
            modalBody={
              "במקרה וסומן שיש מעלית, וחלק מהתכולה לא נכנסת למעלית מכיוון שהמעלית קטנה, עשויה לחול תוספת מחיר על פי מחירון החברה המצורף להזמנה"
            }
            isElevator={true}
          />
        </div>
      }

      <div className="add_card_name">
        <h1 className="add_card_name_h1"> שביל כניסה חריג </h1>
        <Input
          selected={"אין"}
          placeholder={"שביל כניסה חריג"}
          modalTitle={"יש לך שביל כניסה חריג ?"}
          modalBody={
            " שביל כניסה חריג ייחשב מרחק מחניית המשאית ועד לכניסה לבניין, העולה על 20 מטר או קיומם של מדרגות. אם סימנתם שביל כניסה חריג ופירטתם את מהותו, המחיר המוצע שתקבלו הוא סופי וכולל את החריגה שתיארתם. אם לא סימנתם שביל כניסה חריג, עשויים לחול תוספות אלו: *מעל 20 מטר ועד 50 מטר או 15 מדרגות – תוספת 25% ממחיר ההובלה. 50-99 מטר או מעל 15 מדרגות ועד 50 מדרגות -תוספת 50% ממחיר ההובלה. *מעל 100 מטר או מעל 50 מדרגות – תוספת 75% ממחיר ההובלה."
          }
        />
      </div>
      <div className="add_card_name">
        <h1 className="add_card_name_h1"> מנוף </h1>
        <Input
          selected={"יש"}
          placeholder={"מנוף"}
          modalTitle={"יש צורך במנוף ?"}
          modalBody={
            "מנוף מטרתו הכנסת תכולה לדירה, שבה בעיית נגישות. מחיר מנוף עד קומה 6 הינו 400-450 ₪ ומתייחס לשעת עבודה אחת בצד אחד (בכתובת המוצא או היעד) . עלות המנוף אינה כלולה במחיר, ותשולם ישירות למנופאי. תיאום הגעת המנוף יתבצע על ידי חברת ההובלה."
          }
        />
      </div>
    </div>
  );
}

export default AddressInput;
