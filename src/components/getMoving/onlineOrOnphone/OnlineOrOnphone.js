import './OnlineOrOnphone.css'
import React from "react";
import Head from "../../repeats/head/Head";
import cardTmg from "../../../assets/images/icons/add_card.png";
import { Link } from "react-router-dom";

function OnlineOrOnphone (props) {
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <div className="add_card_pages online_or_onphone_page rtl">
            <Head text="בחירת דרך התקשרות" />
            <div className="add_card_area">
              <div className="add_card_area">
                {/* <img src={cardTmg} className="add_card_img" alt="card-img" /> */}
                <h1 className="add_card_h1"> פרטי לקוח</h1>
                <div className="add_card_text_area">
                  <div className="add_card_number">
                    <h1 className="add_card_number_h1">שם מלא</h1>
                    <input
                      type={"text"}
                      className="add_card_number_input"
                      //   placeholder="דנה כהן"
                    />
                  </div>
                  <div className="add_card_name">
                    <h1 className="add_card_name_h1"> מספר נייד</h1>
                    <input
                      type={"text"}
                      className="add_card_name_input"
                      //   placeholder=" 054-6666666"
                    />
                  </div>
                  <div className="add_card_name">
                    <h1 className="add_card_name_h1"> אימייל </h1>
                    <input
                      type={"email"}
                      className="add_card_name_input"
                      //   placeholder=" 054-6666666"
                    />
                  </div>
                </div>
              </div>

              <div className="add_card_pages_box_btn">
                <div className="add_card_pages_box_btn_area">
                  <Link to={"/moving"} className="add_card_pages_box_go_btn">
               להצעת מחיר אונליין 
                  </Link>
                </div>
              </div>

              <div className="add_card_pages_box_btn">
                <div className="add_card_pages_box_btn_area add_card_pages_box_btn_online">
                  <Link to={"/callback"} className="add_card_pages_box_go_btn">
                    אבקש שנציג יחזור אליי
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-container">
          <Footer />
        </div> */}
        </div>
      </div>
    </>
  );
}

export default OnlineOrOnphone;
