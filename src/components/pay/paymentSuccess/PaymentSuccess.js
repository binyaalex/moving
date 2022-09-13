import "./PaymentSuccess.css";
import React from "react";
import { Link } from "react-router-dom";

import paymentSuccess from "../../../assets/images/pay/happyWoman.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';

const PaymentSuccess = () => {
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <div className="payment_success_pages rtl">
            <div className="payment_success_div">
              <img
                src={paymentSuccess}
                className="payment_success_div_img"
                alt="payment-success"
              />
              <CheckCircleIcon className="payment_success_div_Check" />
              <CircleIcon className="payment_success_div_circle_right" />
              <CircleIcon className="payment_success_div_circle_left" />
              <h1 className="payment_success_div_h1">
                <h3>תודה שבחרת בנו!</h3>
                <h6>אישור הזמנה נשלח אליך למייל</h6>
              </h1>
            </div>

            <div className="payment_success_pages_box_btn">
              <div className="payment_success_pages_box_btn_area">
                <Link to={"/"} className="payment_success_pages_box_go_btn">
                  חזרה לדף הבית
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentSuccess;
