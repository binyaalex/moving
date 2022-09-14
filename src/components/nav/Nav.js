import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGripLines } from "@fortawesome/free-solid-svg-icons";
// import { faClose } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import BtnsList from "./BtnsList";
// import Sidebar from "../repeat/sidebar/Sidebar";

import "./Nav.css";

const Nav = () => {
  const [openMarketPlaceSideBar, setOpenMarketPlaceSideBar] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openSideBarComponent = (name) => {
    setOpenMarketPlaceSideBar(name === "marketplace");
  };

  const closeSideBarComponent = () => {
    setOpenMarketPlaceSideBar(false);
  };

  return (
    <>
      <div className="webNav">
        <Logo />
        <div className="webMenu">
          <BtnsList
            openSideBarComponent={openSideBarComponent}
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
            mobile={false}
          />
        </div>
        <div
          className={
            openMobileMenu ? "mobileMenu nav-bar opened" : "mobileMenu nav-bar"
          }
        >
          <div
            className="mobileNav"
            onClick={() => {
              setOpenMobileMenu(!openMobileMenu);
            }}
          >
            {/* {!openMobileMenu ? (
              <FontAwesomeIcon icon={faGripLines} />
            ) : (
              <FontAwesomeIcon icon={faClose} />
            )} */}
          </div>
          <BtnsList
            openSideBarComponent={openSideBarComponent}
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
            mobile={true}
          />
        </div>
        {/* {openMobileMenu ? <div className="overlay blur"></div> : ""}
        <Sidebar
          openMarketPlaceSideBar={openMarketPlaceSideBar}
          setOpenMarketPlaceSideBar={setOpenMarketPlaceSideBar}
          closeSideBarComponent={closeSideBarComponent}
        /> */}
      </div>
    </>
  );
};

export default Nav;
