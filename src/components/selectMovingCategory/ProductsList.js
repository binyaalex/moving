import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Footer from "../repeats/footer/Footer";
import Head from "../repeats/head/Head";
import kitchen from "../../assets/images/moving/kitchen.jpg";
import closet2 from "../../assets/images/moving/closet2.jpg";
import closet3 from "../../assets/images/moving/closet3.jpg";
import closet4 from "../../assets/images/moving/closet4.jpg";
import closet5 from "../../assets/images/moving/closet5.jpg";
import closet6 from "../../assets/images/moving/closet6.jpg";
import ChosenItem from "../pickItem/ChosenItem";
import PersonalDetails from "../PersonalDetails";
import MovingTime from "../MovingTime";
import "./ProductsList.css"
import PersonalInfo from "../storing/generalComponents/PersonalInfo";

//Adding newest products as background image
function ProductsList(props) {
  const paidServiceArr = [
    {
      img: kitchen,
      price: '300',
      title: "אי מטבח",
    },
    {
      img: closet2,
      price: '700',
      title: "ארון 2 דלתות",
    },
    {
      img: closet3,
      price: '800',
      title: "ארון 3 דלתות",
    },
    {
      img: closet4,
      price: '900',
      title: "ארון 4 דלתות",
    },
    {
      img: closet5,
      price: '200',
      title: "ארון 5 דלתות",
    },
    {
      img: closet6,
      price: '750',
      title: "ארון 6 דלתות",
    },
  ];

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="פריטים בודדים" />
          <main className="homePage rtl office">
            <div className="storingType_h1_wrapper">
              <h1 className="storingType_h1 storingType_h1">
                מחירון (200 - 1000 ש"ח)
              </h1>
            </div>
            <section className="paidServicesArea">
              <div className="paidServiceSqaureList">
                <ChosenItem paidServiceArr={paidServiceArr} />
              </div>
            </section>
            <div className="add_card_pages rtl">
              <div className="add_card_area">
                <div className="add_card_text_area">
                  <PersonalDetails movingType={"single"} />
                  <MovingTime isOnlyDate={true} />
                  <div className="add_card_name desc">
                    <h1 className="add_card_name_h1">תאור פריט </h1>
                    <input
                      type={"text"}
                      className="descText"
                      placeholder="ארון 2 מטר 4 דלתות שבור בחלקו הימני..."
                    />
                  </div>
                  <div className="add_card_name">
                    <h1 className="add_card_name_h1">העלאת תמונה/סרטון </h1>
                    <input type="file" />
                  </div>
                </div>
                <PersonalInfo />
              </div>
            </div>
            <div className="filter-btn-div">
              <Link to={"/callback"} className="filter-btn">
                להצעת מחיר{" "}
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
