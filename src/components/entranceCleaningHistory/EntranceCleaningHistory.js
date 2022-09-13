import React from "react";
import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";
import "./EntranceCleaningHistory.css";
import Banner from "./banner/Banner";
import OpenRound from "./openRound/OpenRound";
import downArrow from "../../assets/images/icons/downArrow.jpg";

const EntranceCleaningHistory = () => {

  const entranceCleaningHistoryArr = [
    {
      img: "/images/entranceCleaning/entranceCleaning1.jpg",
      title: "יום שני 09/05",
      desc: "המנקה שלך – דניאל כהן",
      link: "#",
      class: "reviewColorGreen"
    },
    {
      img: "/images/entranceCleaning/entranceCleaning1.jpg",
      title: "יום חמישי 12/05",
      desc: "המנקה שלך – חיה אזולאי",
      link: "#",
      class: "reviewColorGreen"
    },
    {
      img: "/images/entranceCleaning/entranceCleaning1.jpg",
      title: "יום שני 16/05",
      desc: "המנקה שלך – דניאל כהן",
      link: "#",
      class: "reviewColorGreen"
    },
    {
      img: "/images/entranceCleaning/entranceCleaning1.jpg",
      title: "יום חמישי 19/05",
      desc: "המנקה שלך – חיה אזולאי",
      link: "#",
      class: "reviewColorWhite"
    },
    {
      img: "/images/entranceCleaning/entranceCleaning1.jpg",
      title: "יום שני 23/05",
      desc: "המנקה שלך – דניאל כהן",
      link: "#",
      class: "reviewColorWhite"
    },
    {
      img: "/images/entranceCleaning/entranceCleaning1.jpg",
      title: "יום חמישי 26/05",
      desc: "המנקה שלך – חיה אזולאי",
      link: "#",
      class: "reviewColorWhite"
    },
  ];

  return (
    <div className="PageDad">
      <div className="page">
        <Head text="נקיון כניסה" />
        <main className="entranceCleaningHistory">
          <Banner />
          <div className="entranceCleaningHistoryPage">
            <div className="titleDiv">
              <p className="titleP">היסטורית נקיון כניסה</p>
              <img src={downArrow} className="arrowImg" alt="arrow" />
            </div>
            <div className="staffSquaresDiv">
              {entranceCleaningHistoryArr.length > 0
                ? entranceCleaningHistoryArr.map((el, i) => {
                  return (
                    <OpenRound
                      img={el.img}
                      title={el.title}
                      desc={el.desc}
                      link={el.link}
                      class={el.class}
                      key={i}
                    />
                  );
                })
                : ""}
            </div>
          </div>
        </main>
      </div>
      {/*       {/* <Footer /> */} */}
    </div>
  );
};

export default EntranceCleaningHistory;
