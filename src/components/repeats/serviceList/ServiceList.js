import React from "react";
import ServiceItem from './ServiceItem'
import ServiceListHeader from './ServiceListHeader'
// import doublearrow from "../../../assets/images/double-arrow.svg";
// import Service2 from "../../../assets/images/serviceList/management.jpg";

import "./ServiceList.css";
import { Link } from "react-router-dom";

const ServiceList = (props) => {


  return (
    <div className="service_list_sec">
      <div className="container">
        <div className="doctors_area services_area">
          <ServiceListHeader text={props.text} link='#' />
          <div className="service_box_area">
            {
              props.serviceListArr.map((el, i) => {
                return (
                  <ServiceItem
                    header={el.header}
                    link={el.link}
                    price={el.price}
                    par={el.par}
                    img={el.img}
                    key={i}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;