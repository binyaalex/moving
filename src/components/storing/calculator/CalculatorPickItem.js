import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../repeats/footer/Footer";
import Head from "../../repeats/head/Head";
import CalculatorItem from "./CalculatorItem";

import kitchen from '../../../assets/images/moving/kitchen.jpg'
import closet2 from '../../../assets/images/moving/closet2.jpg'
import closet3 from '../../../assets/images/moving/closet3.jpg'
import closet4 from '../../../assets/images/moving/closet4.jpg'
import closet5 from '../../../assets/images/moving/closet5.jpg'
import closet6 from '../../../assets/images/moving/closet6.jpg'


const CalculatorPickItem = () => {
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
                    <Head text="בחירת פריטים" />
                    <main className="homePage rtl pickItem">

                        <section className="paidServicesArea">
                            <div className="paidServiceSqaureList">
                                {paidServiceArr.map((el, i) => {
                                    return (
                                        <CalculatorItem
                                            img={el.img}
                                            title={el.title}
                                            key={i}
                                        />
                                    );
                                })}
                            </div>
                        </section>

                        <div className="filter-btn-div">
                            <Link to={'/calculator'} class="filter-btn">אישור</Link>
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

export default CalculatorPickItem;