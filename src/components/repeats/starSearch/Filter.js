import { React, useRef, useState } from "react";

import "./Search.css";

import "./filter.css";
import { Link } from "react-router-dom";

const Filter = () => {
  const [showfilter, setShowfilter] = useState(false);
  const [showdrp, setShowdrp] = useState(false);
  const [showshortdrp, setShowshortdrp] = useState(false);
  const messagesEndRef = useRef();
  const messagesEndRef1 = useRef();
  const scrollToBottom = () => {
    messagesEndRef1.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="SearchDiv" ref={messagesEndRef}>
        <div className="Search">
          <img className="SearchImg" src="/images/vitamins/search.png" />
          <input
            placeholder="חפשי לפי שם"
            type="search"
            className="SearchInput"
          />
        </div>
        <img
          className="searchStar"
          onClick={() => {
            setShowfilter(!showfilter);
            if (showfilter) {
              scrollToTop();
            } else {
              scrollToBottom();
            }
          }}
          src="/images/doctors/filter.png"
        />
      </div>

      <div
        className={
          showfilter
            ? "filter-wrpper filter_section_search filter-wrapper-active"
            : "hide"
        }
        id="filter_section"
      >
        <div className="filter-icon-and-title-div">
          <span
            className="filter-icon d-flex justify-content-center p-3"
            onClick={() => {
              setShowfilter(!showfilter);
              if (showfilter) {
                scrollToTop();
              } else {
                scrollToBottom();
              }
            }}
          >
            <img src="/images/filter/filter-icon.png" />
          </span>
          <div className="filter-title d-flex justify-content-between align-items-center p-3 px-4">
            <h4>סינון</h4>
            <Link to={"#"} className="filter-clear">
              הראה הכל
            </Link>
          </div>
        </div>
        <div className="filter-container px-4">
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => setShowshortdrp(!showshortdrp)}
            >
              <h5 className="filter-item-title py-3">סדר לפי</h5>
              <Link
                to={"#"}
                className={
                  showshortdrp ? "arrow-icon arrow-icon-active" : "arrow-icon"
                }
              >
                <img src="images/filter/arrow-icon.png" />
              </Link>
            </div>

            {
              <div
                className={
                  showshortdrp
                    ? "filter-dropdown filter-drpdwn-active"
                    : "filter-dropdown"
                }
              >
                <div className="filter-item d-flex py-3 justify-content-between align-items-center">
                  <p>ציון</p>
                  <input
                    type="radio"
                    id="order_by"
                    name="order_by"
                    value=""
                    className="checkbox"
                  />
                </div>
                <div className="filter-item d-flex py-3 border-bottom-0 justify-content-between align-items-center">
                  <p>אקראי</p>
                  <input
                    type="radio"
                    id="order_by"
                    name="order_by"
                    value=""
                    className="checkbox"
                  />
                </div>
              </div>
            }
          </div>
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => setShowdrp(!showdrp)}
            >
              <h5 className="filter-item-title py-3">מומחיות</h5>
              <Link
                to={"#"}
                className={
                  showdrp ? "arrow-icon arrow-icon-active" : "arrow-icon"
                }
              >
                <img src="images/filter/arrow-icon.png" />
              </Link>
            </div>
            <div
              className={
                showdrp
                  ? "filter-dropdown filter-drpdwn-active"
                  : "filter-dropdown"
              }
            >
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>תרפיה</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>קרדולוגיה</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>אנדוקרינולוגיה</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>מנתח</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>גינקולוג</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>נוירולוג</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>דֶרמָטוֹלוֹגִיָה</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
              <div className="filter-item py-3 d-flex justify-content-between align-items-center">
                <p>אונוקולוגיה</p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="filter-action d-flex justify-content-center py-4"
          ref={messagesEndRef1}
        >
          <button className="filter-btn">החל</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
