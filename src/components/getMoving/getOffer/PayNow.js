import React from 'react';
import { Link } from "react-router-dom";

function PayNow(props) {
  return (
    <div className="bills_pages rtl">
      <div className="bills_pages_box_btn">
        <div className="bills_pages_box_btn_area">
          <Link to={"/paynow"} className="bills_pages_box_go_btn">
            שלם עכשיו
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PayNow;