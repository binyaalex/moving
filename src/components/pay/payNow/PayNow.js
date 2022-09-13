import React, { useState } from "react";
import Head from "../../repeats/head/Head";
import Footer from "../../repeats/footer/Footer";

import visaCard from "../../../assets/images/icons/visa_card.png";
import masterCard from "../../../assets/images/icons/master_card_1.png";

import "./PayNow.css";
import { Link } from "react-router-dom";

const PayNow = () => {
  const [selected, setSelected] = useState("yes");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const checked = document.querySelector('.pay_now_card_checkbox:checked')
  console.log(checked);

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <div className="pay_now_pages rtl">
            <Head text="תשלום" />
            <div className="pay_now_pages_area">
              <h1 className="pay_now_pages_area_h1">בחר את אמצעי התשלום</h1>
              <div className="pay_now_text_area">
                <div className="pay_now_card">
                  <input
                    type={"text"}
                    className="pay_now_card_input"
                    placeholder="5555 **** **** **** 7777"
                  />
                  <img
                    src={visaCard}
                    className="pay_now_card_img"
                    alt="visa-card"
                  />
                  <input
                    type={"radio"}
                    name={"pay_now_radio_btn"}
                    className="pay_now_card_checkbox"
                    value="yes"
                    checked={selected === "yes"}
                    onChange={handleChange}
                  />
                </div>
                <div className="pay_now_card">
                  <input
                    type={"text"}
                    className="pay_now_card_input"
                    placeholder="9999 **** **** **** 2222"
                  />
                  <img
                    src={masterCard}
                    className="pay_now_card_img master_card"
                    alt="visa-card"
                  />
                  <input
                    type={"radio"}
                    name={"pay_now_radio_btn"}
                    className="pay_now_card_checkbox"
                    value="yes"
                    checked={selected === "yes"}
                    onChange={handleChange}
                  />
                </div>
                <div className="pay_now_card">
                  <input
                    type={"text"}
                    className="pay_now_card_input"
                    placeholder="3333 **** **** **** 5555"
                  />
                  <img
                    src={visaCard}
                    className="pay_now_card_img"
                    alt="visa-card"
                  />
                  <input
                    type={"radio"}
                    name={"pay_now_radio_btn"}
                    className="pay_now_card_checkbox"
                    value="yes"
                    checked={selected === "yes"}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="add_new_card_div">
                <Link to="/addcard" className="add_new_card_h1">
                  + הוספת כרטיס חדש
                </Link>
              </div>

              <div className="pay_with_balance_div">
                <h1 className="pay_with_balance_h1">תשלום בנקודות</h1>
                <h1 className="total_e_credits_earned_h1">
                  סה"כ הכל נקודות: 147
                </h1>
              </div>

              <div className="pay_with_bonuses_div">
                <h1 className="pay_with_bonuses_h1">תשלום בבונוסים</h1>
                <h1 className="show_all_bonuses_h1">לפתיחת כל הבונוסים שלך +</h1>
              </div>

              <div className="pay_now_pages_box_btn">
                <div className="pay_now_pages_box_btn_area">
                  <Link to={"/addcard"} className="pay_now_pages_box_go_btn">
                    שלם עכשיו
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};
export default PayNow;
