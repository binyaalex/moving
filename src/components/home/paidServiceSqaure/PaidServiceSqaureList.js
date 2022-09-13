import React from "react";
import { Link } from "react-router-dom";
import PaidServiceSqaure from "./PaidServiceSqaure";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const PaidServiceSqaureList = () => {
  const paidServiceArr = [
    {
      img: "/images/home/paidService1.jpg",
      title: "ניקוי כניסה",
      link: "#",
    },
    {
      img: "/images/home/paidService2.jpg",
      title: "חשמל",
      link: "#",
    },
    {
      img: "/images/home/paidService3.jpg",
      title: "תיקונים",
      link: "#",
    },
    {
      img: "/images/home/paidService4.jpg",
      title: "אינסטלציה",
      link: "#",
    },
    {
      img: "/images/home/paidService5.jpg",
      title: "כביסה",
      link: "#",
    },
    {
      img: "/images/home/paidService6.jpg",
      title: "פינוי זבל",
      link: "#",
    },
    {
      img: "/images/home/paidService7.jpg",
      title: "הובלות",
      link: "/providers",
    },
    {
      img: "/images/home/paidService8.jpg",
      title: "נקיון כללי",
      link: "#",
    },
    {
      img: "/images/home/paidService9.jpg",
      title: "כניסה",
      link: "#",
    },
  ];

  return (
    <>
      <div className="paidServicesHeading">
        <Link to={"/services"} className="downArrow">
          <KeyboardDoubleArrowDownIcon />
            לכל השירותים
        </Link>
        <h3>השירותים שלנו</h3>
      </div>
      <div className="paidServiceSqaureList">
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
    </>
  );
};

export default PaidServiceSqaureList;
