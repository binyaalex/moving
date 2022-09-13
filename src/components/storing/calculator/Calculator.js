import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import PaidServiceSqaure from "../../home/paidServiceSqaure/PaidServiceSqaure";
import { BsFillHouseFill } from "react-icons/bs";
import AddressInput from '../../getMoving/addressSection/AddressInput';

const Calculator = () => {

  const [isMoving, setIsMoving] = useState(false);

  const movingHandle = () => {
    setIsMoving(document.querySelector('.movingCheckInput').checked)
  }

  const paidServiceArr = [
    {
      img: "/images/moving/closet.jpg",
      title: "ארונות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/sofa.jpg",
      title: "ספות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/bed.jpg",
      title: "מיטות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/wm.jpg",
      title: "מכונות כביסה",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/table.jpg",
      title: "שולחנות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/chair.jpg",
      title: "כסאות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/tv.jpg",
      title: "טלויזיות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/dresser.jpg",
      title: "שידות",
      link: "/calculatorpickitem",
    },
    {
      img: "/images/moving/stuff.jpg",
      title: "שונות",
      link: "/calculatorpickitem",
    },
  ];


  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="בחירת פריטים" />
          <main className="homePage rtl pick">
            <section className="paidServicesArea">
              <div className="paidServiceSqaureList">
                {paidServiceArr.map((el, i) => {
                  return (
                    <PaidServiceSqaure
                      img={el.img}
                      title={el.title}
                      link={el.link}
                      key={i}
                    />
                  );
                })}
              </div>
            </section>

            <div className="filter-btn-div movingCheck">
              <label htmlFor="package">?מעוניין גם בשרותי הובלה</label>
              <input
                onClick={movingHandle}
                type="checkbox"
                id="package"
                className="movingCheckInput"
              />
            </div>
            {isMoving ? (
              <div className="add_card_pages rtl">
                <div className="add_card_area">
                  <div className="add_card_area">
                    <div className="address-title-container">
                      <h1 className="add_card_h1"> מהיכן </h1>
                      <BsFillHouseFill className="house-icon" />
                    </div>
                    <AddressInput address={"כתובת"} placeholder={"נתניה"} />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="filter-btn-div">
              <Link to={"/totalprice"} class="filter-btn">
                להצעת מחיר                </Link>
            </div>
          </main>
          {/* <div className="footer-container">
                        <Footer page="home" />
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Calculator;