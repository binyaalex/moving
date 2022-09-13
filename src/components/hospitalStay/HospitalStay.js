import React, { useState } from "react";

import HospitalStaySquare from "./hospitalStaySquare/HospitalStaySquare";

import "./HospitalStay.css";
import Sidebar from "../../repeat/sidebar/Sidebar";

const HospitalStay = (props) => {

  const [openCleanSideBar, setOpenCleanSideBar] = useState(false);
  const [openElectricitySideBar, setOpenElectricitySideBar] = useState(false);
  const [openWaterSideBar, setOpenWaterSideBar] = useState(false);
  const [openAcSideBar, setOpenAcSideBar] = useState(false);
  const [openSewerageSideBar, setOpenSewerageSideBar] = useState(false);

  const openSideBarComponent = (name) => {
    // console.log(name);
    setOpenCleanSideBar(name === "clean");
    setOpenElectricitySideBar(name === "electricity");
    setOpenWaterSideBar(name === "water");
    setOpenAcSideBar(name === "ac");
    setOpenSewerageSideBar(name === "sewerage");
  };
  console.log(openSideBarComponent)

  const closeSideBarComponent = () => {
    setOpenCleanSideBar(false);
    setOpenElectricitySideBar(false);
    setOpenWaterSideBar(false);
    setOpenAcSideBar(false);
    setOpenSewerageSideBar(false);
  };

  console.log(props)
  const hospitalStayArr = [
    {
      img: "/images/services/clean.jpg",
      text: "ניקוי",
      link: "clean",
    },
    {
      img: "/images/services/electricity.jpg",
      text: "חשמל",
      link: "electricity",
    },
    {
      img: "/images/services/sewerage.jpg",
      text: "ביוב",
      link: "sewerage",
    },
    {
      img: "/images/services/water.jpg",
      text: "אינסטלציה",
      link: "water",
    },
    {
      img: "/images/services/airconditioner.jpg",
      text: "מזגנים",
      link: "ac",
    },
  ];

  return (
    <div className="PageDad">
      <div className="hospitalStayPage">
        <main className="hospitalStayPageList">
          {hospitalStayArr.map((el, i) => {
            return (
              <HospitalStaySquare
                img={el.img}
                text={el.text}
                link={el.link}
                key={i}
                openSideBarComponent={openSideBarComponent}
              />
            );
          })}
        </main>
      </div>
      <Sidebar
        openCleanSideBar={openCleanSideBar}
        setOpenCleanSideBar={setOpenCleanSideBar}
        openElectricitySideBar={openElectricitySideBar}
        setOpenElectricitySideBar={setOpenElectricitySideBar}
        openSewerageSideBar={openSewerageSideBar}
        setOpenSewerageSideBar={setOpenSewerageSideBar}
        openWaterSideBar={openWaterSideBar}
        setOpenWaterSideBar={setOpenWaterSideBar}
        openAcSideBar={openAcSideBar}
        setOpenAcSideBar={setOpenAcSideBar}
        closeSideBarComponent={closeSideBarComponent}
      />
    </div>
  );
};

export default HospitalStay;
