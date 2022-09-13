import React from "react";

import { Link } from "react-router-dom";
import "./ProductDetails.css";

import Head from "./head/Head";
import ProductDetailsSquareList from "./ProductDetailsSquare/ProductDetailsSquareList";
import StarRate from "./StarRate";

const ProductDetails = () => {
  return (
    <div className="PageDad">
      <div className="page">
        <div className="productdetail_pages rtl">
          <section className="productdetail_image_sec">
            <Head text="תחזוקה לבית - החברה המובילה בתחום" />
            <ProductDetailsSquareList />
          </section>

          <div className="productdetail_image_text_div">
            <p className="productdetail_p1">
              נקיון יסודי של הדירה
            </p>
            <h3 className="productdetail_p2">85$</h3>
          </div>

          <div className="productdetail_about_div">
            <h3 className="productdetail_about_div_h1">על השירות</h3>
            <p>
            גם אלו מכם שגרים בדירה זקוקים לעזרה מדי פעם. לא משנה מה מצב חייך, מגיע לך מנוחה.
            </p>{" "}
            {/* <br /> */}
            <p>
            הדבר האחרון שתרצו לעשות הוא לחזור הביתה מיום ארוך ולהתחיל לנקות.
            </p>{" "}
            {/* <br /> */}
            <p>
            שירותי ניקיון הדירות שלנו הם הפתרון המושלם.
            </p>{" "}
            <p>
            הנקיון כולל:
            </p>
            <p>
            - ניקוי רצפות
            </p>
            <p>
            - ניקוי רטוב
            </p>
            <p>
            - ציוד ניקוי
            </p>
            <p>
            - שטיפת כלים
            </p>
            <p>
            - הוצאת זבל
            </p>
          </div>

          <StarRate />

          <div className="box_btn">
            <div className="container">
              <div className="btn_area">
                <Link to={"/bills"} className="buy_now_btn add_to_card_btn">
                  הוסף לעגלה
                </Link>
                <Link to={""} className="buy_now_btn">
                  שלם עכשיו
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  );
};

export default ProductDetails;
