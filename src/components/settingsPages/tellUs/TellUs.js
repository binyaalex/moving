import React from "react";
import Head from "../../repeats/head/Head";
import Footer from "../../repeats/footer/Footer";

import { Link } from "react-router-dom";

import "./TellUs.css";

import Health from "../../../assets/images/tellUs/health.jpg";
import Pregnancy from "../../../assets/images/tellUs/pregnancy.jpg";

import { Button } from "@mui/material";

const TellUs = () => {

    const HealthButtonArr = [
        {
            health_btn_classname: "consultations healthBtn",
            health_btn_text: "ייעוץ",
        },
        {
            health_btn_classname: "vitamins healthBtn",
            health_btn_text: "ויטמנים",
        },
        {
            health_btn_classname: "analyzes healthBtn",
            health_btn_text: "אבחונים",
        },
        {
            health_btn_classname: "ent healthBtn",
            health_btn_text: "אף אוזן גרון",
        },
        {
            health_btn_classname: "vitamin_d healthBtn active",
            health_btn_text: "ויטמין D",
        },
        {
            health_btn_classname: "ultrasound healthBtn",
            health_btn_text: "אולטרסאונד",
        },
        {
            health_btn_classname: "therapy healthBtn",
            health_btn_text: "תרפיה",
        },
        {
            health_btn_classname: "surgery healthBtn",
            health_btn_text: "ניתוחים",
        },
        {
            health_btn_classname: "eyesight_check healthBtn",
            health_btn_text: "בדיקת ראיה",
        },
        {
            health_btn_classname: "mri healthBtn",
            health_btn_text: "MRI",
        },
        {
            health_btn_classname: "check_your_cholesterol healthBtn",
            health_btn_text: "בדיקת כולסטרול",
        },
        {
            health_btn_classname: "free_service healthBtn",
            health_btn_text: "שירותים חינם",
        },
        {
            health_btn_classname: "pediatrics healthBtn",
            health_btn_text: "רפואת ילדים",
        },
        {
            health_btn_classname: "cardiology healthBtn",
            health_btn_text: "קרדיולוגיה",
        },
        {
            health_btn_classname: "paid_childbirth healthBtn",
            health_btn_text: "לידה",
        },
        {
            health_btn_classname: "dentistry healthBtn active",
            health_btn_text: "רפואת שיניים",
        },
        {
            health_btn_classname: "doctors_news healthBtn",
            health_btn_text: "חדשות מהרופאים",
        },
        {
            health_btn_classname: "blood_test healthBtn active",
            health_btn_text: "בדיקות דם",
        },
    ];

    const PregnancyButtonArr = [
        {
            pregnancy_btn_classname: "consultations pregnancyBtn",
            pregnancy_btn_text: "ייעוץ",
        },
        {
            pregnancy_btn_classname: "vitamins pregnancyBtn",
            pregnancy_btn_text: "ויטמנים",
        },
        {
            pregnancy_btn_classname: "analyzes pregnancyBtn",
            pregnancy_btn_text: "אבחונים",
        },
        {
            pregnancy_btn_classname: "doctors_news pregnancyBtn active",
            pregnancy_btn_text: "חדשות מהרופאים",
        },
        {
            pregnancy_btn_classname: "vitamin_d pregnancyBtn",
            pregnancy_btn_text: "ויטמין D",
        },
        {
            pregnancy_btn_classname: "ultrasound pregnancyBtn active",
            pregnancy_btn_text: "אולטרסאונד",
        },
        {
            pregnancy_btn_classname: "ent pregnancyBtn",
            pregnancy_btn_text: "אף אוזן גרון",
        },
        {
            pregnancy_btn_classname: "surgery pregnancyBtn",
            pregnancy_btn_text: "ניתוחים",
        },
        {
            pregnancy_btn_classname: "eyesight_check pregnancyBtn",
            pregnancy_btn_text: "בדיקת ראיה",
        },
        {
            pregnancy_btn_classname: "therapy pregnancyBtn",
            pregnancy_btn_text: "תרפיה",
        },
        {
            pregnancy_btn_classname: "yoga_for_pregnant_women pregnancyBtn",
            pregnancy_btn_text: "יוגה לנשים בהריון",
        },
        {
            pregnancy_btn_classname: "mri pregnancyBtn",
            pregnancy_btn_text: "MRI",
        },
        {
            pregnancy_btn_classname: "club_of_pregnant_women pregnancyBtn active",
            pregnancy_btn_text: "חברות מועדון",
        },
    ];

    const healthClick = (e) => {
        const active = e.target;

        if (active.classList.contains('active')) {
            active.classList.remove('active');
        } else {
            active.classList.add('active');
        }

    }

    const pregnancyClick = (e) => {
        const active = e.target;

        if (active.classList.contains('active')) {
            active.classList.remove('active');
        } else {
            active.classList.add('active');
        }

    }

    return (
        <>
            <div className="PageDad">
                <div className="tell_us_pages rtl">
                    <Head text="ספרי לנו מה אהבת  " />
                    <div className="health_sec">
                        <div className="health_image_div">
                            <img src={Health} className="health_img" alt="health" />
                            <h1 className="health_h1">בריאות</h1>
                        </div>
                        <div className="health_button_div">
                            {
                                HealthButtonArr.map((el, index) => (
                                    <Button onClick={healthClick} className={el.health_btn_classname} key={index}>{el.health_btn_text}</Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="pregnancy_sec">
                        <div className="pregnancy_image_div">
                            <img src={Pregnancy} className="pregnancy_img" alt="pregnancy" />
                            <h1 className="pregnancy_h1">הריון</h1>
                        </div>
                        <div className="pregnancy_button_div">
                            {
                                PregnancyButtonArr.map((el, index) => (
                                    <Button onClick={pregnancyClick} className={el.pregnancy_btn_classname} key={index}>{el.pregnancy_btn_text}</Button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default TellUs;