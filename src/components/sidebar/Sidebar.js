import "./Sidebar.css";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import Address from '../address/Address'

const Sidebar = (props) => {
  const checkPropSidebar =
    props.openGetMovingSideBar;


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
        {props.openGetMovingSideBar === true ? (
          <Address />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Sidebar;
