import "./Doctors.css";
import React, { useRef, useState } from "react";

import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";
import Filter from "./filter/Filter";
import OpenRound from "../repeats/opensquare/OpenRound";

import filterIcon from "../../assets/images/filter/filterBtn.png";
import SearchIcon from '@mui/icons-material/Search';

import daniel from '../../assets/images/specialists/specialists1.jpg'
import yael from '../../assets/images/specialists/specialists2.jpg'
import itay from '../../assets/images/specialists/specialists3.jpg'
import khaya from '../../assets/images/specialists/specialists4.jpg'
import avi from '../../assets/images/specialists/specialists5.jpg'
import noam from '../../assets/images/specialists/specialists6.jpg'
import meir from '../../assets/images/specialists/specialists7.jpg'
import yoni from '../../assets/images/specialists/specialists8.jpg'

const Specialists = () => {
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
      img: daniel,
      firstName: 'דניאל כהן',
      position: "מנקה",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: yoni,
      firstName: 'יוני לוי',
      position: "שיפוצניקית",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: itay,
      firstName: 'איתי ערד',
      position: "שרברב",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: khaya,
      firstName: 'חיה אזולאי',
      position: "מנקה",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: yael,
      firstName: 'יעל כהן',
      position: "מנקה",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: noam,
      firstName: 'נעם מאיר',
      position: "מנקה",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: meir,
      firstName: 'מאיר ברנר',
      position: "מאבטח",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
    {
      img: avi,
      firstName: 'אבי דוידוף',
      position: "חשמלאית",
      link: "/appointment",
      aboutLink: '/aboutspesialist',
    },
  ];

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="המומחים שלנו" />
          <div className="doctorsPage">
            <div className="SearchDiv" ref={messagesEndRef}>
              <div className="Search">
                <SearchIcon className='SearchImg' />
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
            />

            <div className="staffSquaresDiv">
              {doctorsArr.map((el, i) => {
                return (
                  <OpenRound
                    key={i}
                    img={el.img}
                    firstName={el.firstName}
                    position={el.position}
                    link={el.link}
                    aboutLink={el.aboutLink}
                    textBtn1="אודות"
                    textBtn2='פגישה'
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Specialists;