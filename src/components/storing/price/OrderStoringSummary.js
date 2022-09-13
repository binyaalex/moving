import React, { useState } from "react";
import "./TotalPrice.css"

function OrderStoringSummary(props) {
    const [isSave, setIsSave] = useState(false);
  const saveHandle = () => {
    setIsSave(document.querySelector(".saveCheckInput").checked);
  };

  return (
    <div>
      <div className="order-summary-container storeContainer">
        <p>
          <span style={{ fontWeight: "500" }}>כמות קוב: </span>20{" "}
        </p>
        <p>תאריך אחסנה: 24/09/22</p>
        <div className="storing-total-price">
          מחיר אחסנה כולל מע''מ: 1000 ש''ח
        </div>
        <div className="add_card_name">
          <input
            onClick={saveHandle}
            type="checkbox"
            id="package"
            className="saveCheckInput"
          />
          <label htmlFor="package">*?האם לשריין תקופת אחסנה</label>
          {isSave ? (
            <>
              <h1 className="minimum-storing-title">
                מספר חודשים לשריון מקום (לפחות 2)
              </h1>

              <select name="" id="" className="select_address_input">
                <option selected value="15">
                  2
                </option>
                <option value="20">3</option>
                <option value="25">4</option>
                <option value="30">5</option>
                <option value="35">6</option>
                <option value="40">7</option>
                <option value="45">8</option>
                <option value="50">9</option>
                <option value="55">10</option>
                <option value="60">11</option>
                <option value="65">12</option>
                <option value="70">13</option>
                <option value="75">14</option>
                <option value="80">15</option>
                <option value="85">16</option>
                <option value="90">17</option>
                <option value="95">18</option>
                <option value="100">19</option>
                <option value="100">20</option>
              </select>
            </>
          ) : (
            ""
          )}
          </div>
          <div className="noSave">
            *אי שריון פירושו אחסנה לחודש ימים עם אופציה להארכה על בסיס מקום פנוי
            בלבד, כאמור בתקנון האחסנה
         </div> 
      </div>
    </div>
  );
}

export default OrderStoringSummary;