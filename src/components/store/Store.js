import './Store.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../repeats/head/Head";
import PaidServiceSqaure from "../oldHome/paidServiceSqaure/PaidServiceSqaure";
import Box from "./Box";


const Store = () => {

    const paidServiceArr = [
        {
            img: "/images/moving/closet.jpg",
            title: "ארונות",
            link: "/pickitem",
        },
        {
            img: "/images/moving/sofa.jpg",
            title: "ספות",
            link: "/pickitem",
        },
        {
            img: "/images/moving/bed.jpg",
            title: "מיטות",
            link: "/pickitem",
        },
        {
            img: "/images/moving/wm.jpg",
            title: "מכונות כביסה",
            link: "/pickitem",
        },
        {
            img: "/images/moving/table.jpg",
            title: "שולחנות",
            link: "/pickitem",
        },
        {
            img: "/images/moving/chair.jpg",
            title: "כסאות",
            link: "/pickitem",
        },
        // {
        //     img: "/images/moving/tv.jpg",
        //     title: "טלויזיות",
        //     link: "/pickitem",
        // },
        {
            img: "/images/moving/dresser.jpg",
            title: "שידות",
            link: "/pickitem",
        },
        {
            img: "/images/moving/stuff.jpg",
            title: "שונות",
            link: "/pickitem",
        },
    ];


    return (

        <div className="PageDad">
            <div className="page">
                <Head text="בחירת פריטים להובלה" />
                <main className="homePage rtl pick">
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
                            <Box />
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
                    <div className="add_card_pages rtl">
                        <div className="add_card_area">
                            <div className="add_card_text_area">
                                <div className="add_card_name desc">
                                    <h1 className="add_card_name_h1">הוספת פריט שאינו ברשימה או עצירה בדרך</h1>
                                    <input
                                        type={"text"}
                                        className="descText"
                                        placeholder="טלויזיה 60 אינץ'..."
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="filter-btn-div">
                        {/* <div className="orderServiceBtnDiv">
                                <div className="btnHeading">
                                    <div className="textArea">
                                        <div>הוסף פריט</div>
                                    </div>
                                    <AddIcon />
                                </div>
                            </div> */}
                        <Link to={'/apartment'} className="filter-btn">פרטים אחרונים וסיימנו</Link>
                    </div>

                </main>
                {/* <div className="footer-container">
                        <Footer page="home" />
                    </div> */}
            </div>
        </div>

    );
};

export default Store;