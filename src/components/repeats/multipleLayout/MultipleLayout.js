import { Routes, Route } from "react-router-dom";
// import Nav from "./../../web/nav/Nav";
// import Footer from "./../../web/footer/Footer";
// import Home from "./../../web/home/Home";
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Welcome from "../../welcome/Welcome";

const MultipleLayout = ({ componentName }) => {
  return (
    <>
      <div className="welcome-container">
        <Welcome />
      </div>
      <div className="web-sideBar">
        {componentName}
      </div>
    </>
  );
};

export default MultipleLayout;