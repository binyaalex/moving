import React from 'react';
import PersonalDetails from '../PersonalDetails';
import Head from '../../repeats/head/Head';
import MovingTime from '../MovingTime';
import { Link } from "react-router-dom";
import PersonalInfo from '../../storing/generalComponents/PersonalInfo';
function DetailsBeforeCallBack(props) {
     const apartmentArr = [
       {
         name: "2 חדרים",
         value: "2 חדרים",
       },
       {
         name: "3 חדרים",
         value: "3 חדרים",
       },
       {
         name: "4 חדרים",
         value: "4 חדרים",
       },
       {
         name: "5 חדרים",
         value: "5 חדרים",
       },
       {
         name: "6 חדרים",
         value: "6 חדרים",
       },
       {
         name: "7 חדרים",
         value: "7 חדרים",
       },
       {
         name: "פנטהאוז",
         value: "פנטהאוז",
       },
       {
         name: "בית פרטי",
         value: "בית פרטי",
       },
     ];
    return (
      <div className="PageDad">
        <div className="page">
          <Head text="פרטים אישיים" />
          <div className="add_card_pages rtl">
            <div className="add_card_area">
              <div className="add_card_text_area">
                <PersonalDetails movingType={true} />
                <MovingTime isOnlyDate={true} />
                <div className="add_card_name ">
                  <h1 className="add_card_name_h1"> סוג הובלה? </h1>
                  <select name="" id="" className="select_address_input">
                    {apartmentArr.map((type) => {
                      return <option value={type.value}>{type.name}</option>;
                    })}
                  </select>
                </div>
              </div>
              <PersonalInfo />
              <div className="filter-btn-div apartment">
                <Link to={"/callback"} className="filter-btn">
                  {" "}
                  להצעת מחיר
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DetailsBeforeCallBack;