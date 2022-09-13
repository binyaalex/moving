import React from "react";
import ServiceSqaure from "./ServiceSqaure";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";

const ServiceSqaureList = () => {
  const serviceListArr = [
    {
      image: "/images/home/service1.jpg",
      title: "נקיון כניסה",
      timing: "שני, חמישי 08:00 בבוקר",
      link: "/entrancecleaninghistory",
    },
    {
      image: "/images/home/service2.jpg",
      title: "תחזוקת מעליות",
      timing: "יום חמישי הראשון לחודש",
      link: "/entrancecleaninghistory",
    },
    {
      image: "/images/home/service3.jpg",
      title: "פינוי זבל",
      timing: "כל יום ב18:00",
      link: "/entrancecleaninghistory",
    },
    {
      image: "/images/home/service4.jpg",
      title: "אבטחה",
      timing: "24/7",
      link: "/entrancecleaninghistory",
    },
  ];

  return (
    <>
      <div className="servicesHeading">
        <Link to={"/services"} className="downArrow">
          <KeyboardDoubleArrowDownIcon />
            לכל השירותים
        </Link>
        <h3>השירותים שהוזמנו</h3>
      </div>
      <div className="serviceSqaureList">
        {serviceListArr.map((el, i) => {
          return (
            <ServiceSqaure
              link={el.link}
              image={el.image}
              title={el.title}
              timing={el.timing}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServiceSqaureList;
