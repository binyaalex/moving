import "./Sidebar.css";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import ServiceList from '../../servicesList/ServiceList'

const Sidebar = (props) => {
  const checkPropSidebar =
    props.openServiceListSideBar;


  return (
    <div
      className={
        checkPropSidebar
          ? "customizer border-left-blue-grey border-left-lighten-4 open"
          : "customizer border-left-blue-grey border-left-lighten-4 d-none d-md-block"
      }
    >
      <div className="customizer-content pt-2">
        <div className="closeBtnHeader">
          <div
            className="closeBtnDiv"
            onClick={() => props.closeSideBarComponent(false)}
          >
            <CloseIcon />
          </div>
        </div>
        {props.openServiceListSideBar === true ? (
          <ServiceList />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Sidebar;
