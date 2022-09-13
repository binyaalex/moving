import "./Confirm.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DoctorAbout from "./DoctorAbout";
import Head from "../repeats/head/Head";

import doctor1 from "../../assets/images/doctor/doctor1.jpg";

const Confirm = () => {
  useEffect(() => {
    document.querySelector(".head").style.marginBottom = "5px";
  }, []);

  return (
    <div className="PageDad">
      <div className="page">
        <Head text="אישור הזמנה" />
        <div className="startPage confirmPage">
          <img
            className="startImg"
            src="/images/start/congrats.png"
            alt="congrats"
          />
          <main className="startMain">
            <h1 className="startH1">השירות הוזמן בהצלחה</h1>
            <h2 className="startH2">הוזמן לך שירות מהמנקה יעל כהן</h2>
            <DoctorAbout
              img={doctor1}
              header='יעל כהן'
              text="מנקה"
              link=""
            />
            <div className="date_area">
              <h1>
                יום שישי <span>11.04</span> ב<span>11:00</span>
              </h1>
            </div>
          </main>
          <div className="fixed_btn_section">
            <Link to="/">
              <button className="startSubmit">אישור</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
