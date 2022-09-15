import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../repeats/footer/Footer";
import Head from "../repeats/head/Head";
import "./Home.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';
import CategorySquareList from "./categorySquare/CategorySquareList";
import ServiceSqaureList from "./serviceSqaure/ServiceSqaureList";
import PaidServiceSqaureList from "./paidServiceSqaure/PaidServiceSqaureList";
import BlogSqaureList from "./blogSquare/BlogSquareList";
import SpecialistsList from "../repeats/specialistsList/SpecialistsList";
import Search from "../repeats/search/Search";

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Sidebar from "../repeats/sidebar/Sidebar";
import Welcome from "../welcome/Welcome";
const Home = ({ componentName }) => {
  const [openServiceListSideBar, setOpenServiceListSideBar] = useState(true);

  const openSideBarComponent = (name, data) => {
    setOpenServiceListSideBar(name === "servicelist");
  };

  const closeSideBarComponent = () => {
    setOpenServiceListSideBar(false);
  };

  return (
    <>
      <MobileView>
        {/* <Main /> */}
        {componentName}
        <div className="footer-container">
          <Footer page="home" />

        </div>
      </MobileView>
      <BrowserView>
        <div className="browser-view">
          <div className="welcome-container">
            <Welcome />
          </div>
          <div className="web-sideBar">
            {/* <Main /> */}
            {componentName}
            <div className="footer-container">
              <Footer />
            </div>
          </div>
          {/* <div
            onClick={() => {
              console.log(openSideBarComponent);
              openSideBarComponent("servicelist");
            }}
          >
            open side bar
          </div>
          <Sidebar
            openServiceListSideBar={openServiceListSideBar}
            setOpenServiceListSideBar={setOpenServiceListSideBar}
            closeSideBarComponent={closeSideBarComponent}
          /> */}
        </div>
      </BrowserView>
    </>
  );
};

export default Home;
