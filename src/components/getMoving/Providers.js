import ".././specialists/Doctors.css"
import React, { useRef, useState } from "react";

import Head from "../repeats/head/Head";
import Filter from "../specialists/filter/Filter";
import OpenRound from "../repeats/opensquare/OpenRound";

import filterIcon from "../../assets/images/filter/filterBtn.png";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/getMoving/providerLogo1.png";

function Providers(props) {
  const [showfilter, setShowfilter] = useState(false);

  const [showdrp, setShowdrp] = useState(false);
  const [showssortdrp, setShowssortdrp] = useState(false);
  const [showsareadrp, setShowsareadrp] = useState(false);

  const messagesEndRef = useRef();

  const messagesEndRef1 = useRef();

  const scrollToBottom = () => {
    messagesEndRef1.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const doctorsArr = [
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
    {
      firstName: "א.א מובילים",
      position: "חברת הובלות",
      link: "/fordoctors",
    },
  ];
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="המובילים שלנו" />
          <div className="doctorsPage">
            <div className="SearchDiv" ref={messagesEndRef}>
              <div className="Search">
                <SearchIcon className="SearchImg" />
                {/* <img className="SearchImg" src="/images/doctors/search.png" /> */}
                <input
                  placeholder="חפשי לפי שם"
                  type="search"
                  className="SearchInput"
                />
              </div>
              <div
                className="filterIcon"
                onClick={() => {
                  setShowfilter(!showfilter);
                  if (showfilter) {
                    // scrollToTop();
                  } else {
                    // scrollToBottom();
                  }
                }}
              >
                <img src={filterIcon} alt="filter" />
              </div>
            </div>

            <Filter
              showfilter={showfilter}
              setShowfilter={setShowfilter}
              scrollToTop={scrollToTop}
              scrollToBottom={scrollToBottom}
              showdrp={showdrp}
              setShowdrp={setShowdrp}
              showssortdrp={showssortdrp}
              setShowssortdrp={setShowssortdrp}
              showsareadrp={showsareadrp}
              setShowsareadrp={setShowsareadrp}
              messagesEndRef1={messagesEndRef1}
              isProviders={true}
            />

            <div className="staffSquaresDiv">
              {doctorsArr.map((el, i) => {
                return (
                  <OpenRound
                    key={i}
                    img={logo}
                    firstName={el.firstName}
                    position={el.position}
                    moving="/movingkindselect"
                    storing="/storingkindselect"
                    aboutLink="/aboutprovider"
                    textBtn1="הובלה"
                    textBtn2="אחסנה"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Providers;
