import React from 'react';
import "./OrderMovingSummary.css"
import { Link } from "react-router-dom";


function OrderMovingSummary({ isMoving, newAddress, totalPrice }) {
  const items = ['מקרר', 'מכונת כביסה', 'ארון בגדים', 'מקרר']
  return (
    <>
      <div className="order-summary-container">
        <div className="order-personaldetails">
          <p>שם מלא: ישראלה ישראלי</p>
          <p>שעת תחילה הובלה: 09:00-12:00</p>
          <p>תאריך מעבר: 24/09/22</p>
        </div>
        <div className="present-address">
          <h5 className="address-title"> כתובת נוכחית: נתניה</h5>
          {isMoving && (
            <>
              <p> קומה: 2 </p>
              <p> מעלית: 4 נוסעים</p>
              <p> שביל כניסה חריג: אין</p>
              <p> מנוף: לא</p>
            </>
          )}
        </div>
        <div className="future-address">
          <h5 className="address-title">{newAddress}</h5>
          {isMoving && (
            <>
              <p> קומה: 2 </p>
              <p> מעלית: 4 נוסעים</p>
              <p> שביל כניסה חריג: אין</p>
              <p> מנוף: לא</p>
            </>
          )}
        </div>
        <div className="chosen-items-list">
          <h5 className="address-title">פריטים שבחרתי:</h5>
          <ul>
            {items.map((item, idx) => {
              const itemQuantity = items.filter(
                (item2) => item2 === item
              ).length;
              return (
                <li key={idx} className="li-item">
                  {itemQuantity > 0 ? `${item}` : `${item} X ${itemQuantity}`}
                </li>
              );
            })}
          </ul>{" "}
        </div>
        <Link
          to={"/store"}
          className="btn btn-outline-success"
        >
          <div className="add-products" id="add-products">הוספת/הסרת פריטים</div>
        </Link>
        <div className=" text-success moving-total-price">
          מחיר הובלה כולל מע''מ: 2000 ש''ח
        </div>
      </div>
    </>
  );
}

export default OrderMovingSummary;