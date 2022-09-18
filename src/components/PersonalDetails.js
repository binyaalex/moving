import './PersonalDetails.css'
import React from "react";
import Head from "./repeats/head/Head";
// import Footer from ".././repeats/footer/Footer";
import cardTmg from ".././assets/images/icons/add_card.png";
import { Link } from "react-router-dom";
import ContactImg from "../assets/images/homepage/contact.jfif"
import masterCard from "../assets/images/icons/master_card.png";
import PersonalInfo from './storing/generalComponents/PersonalInfo';

function PersonalDetails({ movingType }) {
  const factoryArr = [
    {
      name: "מפעל",
      value: "מפעל",
    },
    {
      name: "משרד",
      value: "משרד",
    }
  ];


  return (
    <>
      {movingType && (
        <>
          <div className="add_card_name">
            <h1 className="add_card_name_h1"> מאיפה עוברים?</h1>
            <input
              type={"email"}
              className="add_card_name_input"
              placeholder="פתח תקווה"
            />
          </div>
          <div className="add_card_name">
            <h1 className="add_card_name_h1"> לאן עוברים? </h1>
            <input
              type={"email"}
              className="add_card_name_input"
              placeholder=" נתניה"
            />
          </div>
        </>
      )}
      {movingType === "factory" && (
        <>
          <div className="add_card_name ">
            <h1 className="add_card_name_h1"> סוג הובלה? </h1>
            <select name="" id="" className="select_address_input">
              {factoryArr.map((type) => {
                return <option value={type.value}>{type.name}</option>;
              })}
            </select>
          </div>
        </>
      )}

      {!movingType && (
        <PersonalInfo />
      )}
    </>
  );
}

export default PersonalDetails;
