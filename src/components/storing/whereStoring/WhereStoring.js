import './WhereStoring.css'
import React from 'react';
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import SpecialistsList from '../../selectMovingCategory/specialistsList/SpecialistsList';

function WhereStoring(props) {

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="בחירת מיקום" />
          <main className="homePage rtl office whereStoring add_card_pages">
            <SpecialistsList />
            <div className="add_card_area">
              <div className="add_card_text_area">
                <div className="add_card_name">
                  <h1 className="add_card_name_h1 whereStoring_h1"> היכן תרצה לאחסן </h1>
                  <select name="" id="" className="select_address_input">
                    <option selected>בחר</option>
                    <option value="center">מרכז</option>
                    <option value="sharon">שרון</option>
                    <option value="north sharon">צפון השרון</option>
                    <option value="north">צפון</option>
                    <option value="shfela">שפלה</option>
                    <option value="south">דרום</option>
                    <option value="jerusalem">ירושלים והסביבה</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filter-btn-div">
              <Link to={"/storingkindselect"} className="filter-btn">
                לשלב הבא
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default WhereStoring;