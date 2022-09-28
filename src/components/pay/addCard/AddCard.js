import React from "react";
import Head from "../../repeats/head/Head";
import "./AddCard.css";
import cardTmg from "../../../assets/images/icons/add_card.png";
import masterCard from "../../../assets/images/icons/master_card.png";
import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <div className="add_card_pages rtl">
            <Head text="הוספת כרטיס חדש" />
            <div className="add_card_area">
              <img src={cardTmg} className="add_card_img" alt="card-img" />
              <h1 className="add_card_h1">אמצעי תשלום</h1>
              <div className="add_card_text_area">
                <div className="add_card_number">
                  <img
                    src={masterCard}
                    className="master_card_img"
                    alt="master-card"
                  />
                  <h1 className="add_card_number_h1">מספר כרטיס</h1>
                  <input
                    type={"text"}
                    className="add_card_number_input"
                    placeholder="9875 5214 2214 9856"
                  />
                </div>
                <div className="add_expiry_cvv">
                  <div className="add_cvv">
                    <h1 className="add_cvv_h1">CVC/CVV</h1>
                    <input
                      type={"text"}
                      className="add_cvv_input"
                      placeholder="***"
                    />
                  </div>
                  <div className="add_expiry_date">
                    <h1 className="add_expiry_date_h1">תאריך תפוגה</h1>
                    <input
                      type={"text"}
                      className="add_expiry_date_input"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
                <div className="add_card_name">
                  <h1 className="add_card_name_h1">השם שעל הכרטיס</h1>
                  <input
                    type={"text"}
                    className="add_card_name_input"
                    placeholder="ישראל ישראלי"
                  />
                </div>
              </div>

              <div className="add_card_pages_box_btn">
                <div className="add_card_pages_box_btn_area">
                  <Link to={"/paymentsuccess"} className="add_card_pages_box_go_btn">
                    שמרי
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCard;
