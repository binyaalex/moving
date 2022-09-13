import "./PickItem.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../repeats/footer/Footer";
import Head from "../../repeats/head/Head";
import Item from "./Item";

import kitchen from '../../../assets/images/getMoving/kitchen.jpg'
import closet2 from '../../../assets/images/getMoving/closet2.jpg'
import closet3 from '../../../assets/images/getMoving/closet3.jpg'
import closet4 from '../../../assets/images/getMoving/closet4.jpg'
import closet5 from '../../../assets/images/getMoving/closet5.jpg'
import closet6 from '../../../assets/images/getMoving/closet6.jpg'


const PickItem = () => {
    const paidServiceArr = [
        {
            img: kitchen,
            title: "אי מטבח",
        },
        {
            img: closet2,
            title: "ארון 2 דלתות",
        },
        {
            img: closet3,
            title: "ארון 3 דלתות",
        },
        {
            img: closet4,
            title: "ארון 4 דלתות",
        },
        {
            img: closet5,
            title: "ארון 5 דלתות",
        },
        {
            img: closet6,
            title: "ארון 6 דלתות",
        },
    ];


    return (
        <>
            <div className="PageDad">
                <div className="page">
                    <Head text="ארונות" />
                    <main className="homePage rtl pickItem">
                        {/* <Search /> */}


                        <section className="paidServicesArea">
                            {/* <div className="paidServicesHeading">
                                <Link to={"/services"} className="downArrow">
                                    <KeyboardDoubleArrowDownIcon />
                                    לכל השירותים
                                </Link>
                                <h3>השירותים שלנו</h3>
                            </div> */}
                            <div className="paidServiceSqaureList">
                                {paidServiceArr.map((el, i) => {
                                    return (
                                        <Item
                                            img={el.img}
                                            title={el.title}
                                            key={i}
                                        />
                                    );
                                })}
                            </div>
                        </section>

                        <div className="filter-btn-div">
                            {/* <div className="orderServiceBtnDiv">
                                <div className="btnHeading">
                                    <div className="textArea">
                                        <div>הוסף פריט</div>
                                    </div>
                                    <AddIcon />
                                </div>
                            </div> */}
                            <Link to={'/store'} class="filter-btn">למוצרים נוספים</Link>
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

export default PickItem;