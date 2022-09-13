import './FactoryOrOffice.css'
import React from 'react';

import desk from "../../../assets/images/factoryOrOffice/desk.jpg";
import cabinet from "../../../assets/images/factoryOrOffice/cabinet.jpg";
import it from "../../../assets/images/factoryOrOffice/it.jpg";
import machine from "../../../assets/images/factoryOrOffice/machine.jpg";
import vehicle from "../../../assets/images/factoryOrOffice/vehicle.jpg";
import ChosenItem from "../pickItem/ChosenItem";
import PersonalDetails from "../PersonalDetails";
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import SpecialistsList from './specialistsList/SpecialistsList';
import MovingTime from "../MovingTime"
import PersonalInfo from '../../storing/generalComponents/PersonalInfo';

function FactoryOrOffice(props) {
  const paidServiceArr = [
    {
      img: desk,
      title: "שולחן",
      price: '200',
    },
    {
      img: cabinet,
      title: "ארון",
      price: '300',
    },
    {
      img: it,
      title: "מחשוב",
      price: '400',
    },
    {
      img: machine,
      title: "מיכון",
      price: '500',
    },
    {
      img: vehicle,
      title: "כלי רכב",
      price: '600',
    }
  ];
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="מפעל או משרד" />
          <main className="homePage rtl office">
            <div className="storingType_h1_wrapper">
              <h1 className="storingType_h1 storingType_h1">
                מחירון (200 - 1000 ש"ח)
              </h1>
            </div>
            <section className="paidServicesArea">
              <div className="paidServiceSqaureList">
                {/* {paidServiceArr.map((el, i) => { */}
                <ChosenItem paidServiceArr={paidServiceArr} />
              </div>
            </section>
            <SpecialistsList />
            <div className="add_card_pages rtl">
              <div className="add_card_area factorytime">
                <div className="add_card_text_area">
                  <PersonalDetails movingType={"factory"} />
                  <MovingTime isOnlyDate={true} />

                </div>
                <PersonalInfo />
              </div>
            </div>
            <div className="filter-btn-div">
              <Link to={"/callback"} className="filter-btn">
                להצעת מחיר              </Link>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default FactoryOrOffice;