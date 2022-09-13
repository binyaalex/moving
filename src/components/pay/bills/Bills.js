import "./Bills.css";

import React from "react";
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import Footer from "../../repeats/footer/Footer";
import Search from "../../repeats/starSearch/Search";

import doctor1 from "../../../assets/images/doctor/doctor1.jpg";
import bills1 from "../../../assets/images/pay/bills1.jpg";
import dottedBorder from "../../../assets/images/icons/pay/dotted-border.png";
import leftArrow from "../../../assets/images/icons/leftArrow.png";
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';

const Bills = () => {
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="עגלת הקניות שלי" />
          <div className="bills_pages rtl">
            <Search icon={<StarIcon className='searchStar' style={{ fontSize: '45px' }} />} />

            <div className="bills_pages_area">
              <div className="bills_pages_doctor_area">
                <div className="img_and_text">
                  <img className="bills_pages_doctor_img" src={doctor1} />
                  <div className="bills_pages_doctor_text">
                    <h1 className="bills_pages_doctor_text_h1">
                      יעל כהן, מנקה
                    </h1>
                  </div>
                </div>
              </div>

              <div className="bills_pages_card_area">
                <div className="img_and_text">
                  <img className="bills_pages_card_img" src={bills1} />
                  <div className="bills_pages_card_text">
                    <h1 className="bills_pages_card_h1">נקיון יסודי</h1>
                    <p className="bills_pages_card_p">24.04.2022</p>
                  </div>
                </div>
                <div className="bills_pages_card_btn_area">
                  <Link className="bills_pages_card_btn" to={"#"}>
                    85$
                  </Link>
                </div>
              </div>

              <div className="bills_pages_coupon_code_area">
                <img
                  src={dottedBorder}
                  className="dotted_border_img"
                  alt="dotted-border"
                />
                <img src={leftArrow} className="right_arrow" alt="right-arrow" />
                <VerifiedIcon className="discount" />
                <input
                  type={"text"}
                  className="coupon_code"
                  placeholder="לשימוש בקופון הכנס כאן את הקוד"
                />
              </div>

              <div className="bills_pages_pay_now_area">
                <div className="bills_pages_pay_now_heading align-center justify-between">
                  <Link to={"#"} className="d-flex align-center">
                    $85
                  </Link>
                  <h3>סה"כ</h3>
                </div>

                <div className="bills_pages_box_btn">
                  <div className="bills_pages_box_btn_area">
                    <Link to={"/paynow"} className="bills_pages_box_go_btn">
                      שלם עכשיו
                    </Link>
                  </div>
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
export default Bills;
