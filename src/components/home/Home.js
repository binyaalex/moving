import './Home.css'
import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Sidebar from '../sidebar/Sidebar';
import Head from "./Head";
import Main from './Main';

const Home = () => {

    const [openGetMovingSideBar, setOpenGetMovingSideBar] = useState(false);

    const openSideBarComponent = (name, data) => {
        setOpenGetMovingSideBar(name === "getmoving");
    };
  
    const closeSideBarComponent = () => {
        setOpenGetMovingSideBar(false);
    };

    return (
        <>
            <BrowserView>
                <div className="browserHome">
                <Head />
                <Main openSideBarComponent={openSideBarComponent} />
                {/* <div
                  onClick={() => {
                    console.log(openSideBarComponent)
                    openSideBarComponent("getmoving");
                  }}
                >
                    browser open side bar
                </div> */}
                </div>
                <Sidebar 
                    openGetMovingSideBar={openGetMovingSideBar}
                    setOpenGetMovingSideBar={setOpenGetMovingSideBar}
                    closeSideBarComponent={closeSideBarComponent}
                />
            </BrowserView>
            <MobileView>
                mobile moving home
            </MobileView>
        </>
    )
}

export default Home