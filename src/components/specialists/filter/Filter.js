import { React, useState } from "react";

import "./Filter.css";

import { Link } from "react-router-dom";

import FilterIcon from "../../../assets/images/filter/filter-icon.png";
import ArrowIcon from "../../../assets/images/filter/arrow-icon.png";

const Filter = (props) => {
  const [orderBy, setOrderBy] = useState();
  const [hospitalFilter, setHospitalFilter] = useState([]);

  const order_by = [
    {
      name: "ציון",
      value: "ציון",
    },
    {
      name: "מחיר",
      value: "מחיר",
    },
  ];
  const movingType = [
    {
      name: "הובלת תכולת דירות/בתים",
      value: "הובלת תכולת דירות/בתים",
    },
    {
      name: "הובלות משרדים/מפעלים",
      value: "הובלות משרדים/מפעלים",
    },
    {
      name: "הובלת פריטים בודדים",
      value: "הובלת פריטים בודדים",
    },
    {
      name: "הובלות בקירור",
      value: "הובלות בקירור",
    },
  ];

  const service_list = [
    {
      name: "נקיון",
      value: "נקיון",
    },
    {
      name: "שיפוצים",
      value: "שיפוצים",
    },
    {
      name: "אינסטלציה",
      value: "אינסטלציה",
    },
    {
      name: "אבטחה",
      value: "אבטחה",
    },
    {
      name: "חשמל",
      value: "חשמל",
    },
    {
      name: "כביסה",
      value: "כביסה",
    },
    {
      name: "הובלות",
      value: "הובלות",
    },
  ];

  const service_area = [
    {
      name: "צפון רחוק",
      value: "צפון רחוק",
    },
    {
      name: "חיפה והצפון",
      value: "חיפה והצפון",
    },
    {
      name: "צפון השרון",
      value: "צפון השרון",
    },
    {
      name: "שרון",
      value: "שרון",
    },
    {
      name: "דרום השרון",
      value: "דרום השרון",
    },
    {
      name: "מרכז",
      value: "מרכז",
    },
    {
      name: "שפלה",
      value: "שפלה",
    },

    {
      name: "תל אביב",
      value: "תל אביב",
    },
    {
      name: "באר שבע והסביבה",
      value: "באר שבע והסביבה",
    },
    {
      name: "דרום רחוק",
      value: "דרום רחוק",
    },
    {
      name: "ירושלים והסביבה",
      value: "ירושלים והסביבה",
    },
    {
      name: "איו''ש",
      value: "איו''ש",
    },
  ];

  const clearFilter = () => {
    setOrderBy("");
    var updatedList = [];
    setHospitalFilter(updatedList);
  };

  const addServiceFilter = (event) => {
    var updatedList = [...hospitalFilter];
    if (event.target.checked) {
      updatedList = [...hospitalFilter, event.target.value];
    } else {
      updatedList.splice(hospitalFilter.indexOf(event.target.value), 1);
    }
    setHospitalFilter(updatedList);
  };

  return (
    <>
      <div
        className={
          props.showfilter
            ? "filter-wrpper filter_section_search filter-wrapper-active"
            : "hide"
        }
        id="filter_section"
      >
        <div className="filter-icon-and-title-div">
          <span
            className="filter-icon d-flex justify-content-center p-3"
            onClick={() => {
              props.setShowfilter(!props.showfilter);
              if (props.showfilter) {
                // props.scrollToTop();
              } else {
                // props.scrollToBottom();
              }
            }}
          >
            <img src={FilterIcon} alt="filter" />
          </span>
          <div className="filter-title d-flex justify-content-between align-items-center p-3 px-4">
            <h4>סינון</h4>
            <Link to={"#"} className="filter-clear" onClick={clearFilter}>
              איפוס
            </Link>
          </div>
        </div>
        <div className="filter-container px-4">
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => props.setShowssortdrp(!props.showssortdrp)}
            >
              <h5 className="filter-item-title py-3">סדר לפי</h5>
              <Link
                to={"#"}
                className={
                  props.showssortdrp
                    ? "arrow-icon arrow-icon-active"
                    : "arrow-icon"
                }
              >
                <img src={ArrowIcon} alt="arrow" />
              </Link>
            </div>

            {
              <div
                className={
                  props.showssortdrp
                    ? "filter-dropdown filter-drpdwn-active"
                    : "filter-dropdown"
                }
              >
                {order_by.map((el, i) => {
                  return (
                    <div
                      className="filter-item d-flex py-3 justify-content-between align-items-center"
                      key={i}
                    >
                      <p>{el.name}</p>
                      <input
                        type="radio"
                        id="order_by"
                        name="order_by"
                        value={el.value}
                        className="checkbox"
                        checked={orderBy && el.value == orderBy ? true : false}
                        onChange={() => setOrderBy(el.value)}
                      />
                    </div>
                  );
                })}
              </div>
            }
          </div>
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => props.setShowdrp(!props.showdrp)}
            >
              {props.isProviders ? (
                <>
                  <h5 className="filter-item-title py-3">סוג הובלה</h5>
                </>
              ) : (
                <>
                  <h5 className="filter-item-title py-3">מומחיות</h5>
                </>
              )}
              <Link
                to={"#"}
                className={
                  props.showdrp ? "arrow-icon arrow-icon-active" : "arrow-icon"
                }
              >
                <img src={ArrowIcon} alt="arrow" />
              </Link>
            </div>
            <div
              className={
                props.showdrp
                  ? "filter-dropdown filter-drpdwn-active"
                  : "filter-dropdown"
              }
            >
              {props.isProviders ? (
                <>
                  {movingType.map((el, i) => {
                    return (
                      <div
                        className="filter-item py-3 d-flex justify-content-between align-items-center"
                        key={i}
                      >
                        <p>{el.name}</p>
                        <input
                          type="checkbox"
                          id="service_filter"
                          name="service_filter"
                          value={el.value}
                          className="checkbox"
                          checked={
                            hospitalFilter && hospitalFilter.includes(el.value)
                              ? true
                              : false
                          }
                          onChange={addServiceFilter}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {service_list.map((el, i) => {
                    return (
                      <div
                        className="filter-item py-3 d-flex justify-content-between align-items-center"
                        key={i}
                      >
                        <p>{el.name}</p>
                        <input
                          type="checkbox"
                          id="service_filter"
                          name="service_filter"
                          value={el.value}
                          className="checkbox"
                          checked={
                            hospitalFilter && hospitalFilter.includes(el.value)
                              ? true
                              : false
                          }
                          onChange={addServiceFilter}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => props.setShowsareadrp(!props.showsareadrp)}
            >
              <h5 className="filter-item-title py-3">אזור</h5>
              <Link
                to={"#"}
                className={
                  props.showsareadrp
                    ? "arrow-icon arrow-icon-active"
                    : "arrow-icon"
                }
              >
                <img src={ArrowIcon} alt="arrow" />
              </Link>
            </div>
            <div
              className={
                props.showsareadrp
                  ? "filter-dropdown filter-drpdwn-active"
                  : "filter-dropdown"
              }
            >
              {service_area.map((el, i) => {
                return (
                  <div
                    className="filter-item py-3 d-flex justify-content-between align-items-center"
                    key={i}
                  >
                    <p>{el.name}</p>
                    <input
                      type="checkbox"
                      id="service_filter"
                      name="service_filter"
                      value={el.value}
                      className="checkbox"
                      checked={
                        hospitalFilter && hospitalFilter.includes(el.value)
                          ? true
                          : false
                      }
                      onChange={addServiceFilter}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="filter-action d-flex justify-content-center py-4"
          ref={props.messagesEndRef1}
        >
          <button
            onClick={() => {
              props.setShowfilter(!props.showfilter);
              if (props.showfilter) {
                // props.scrollToTop();
              } else {
                // props.scrollToBottom();
              }
            }}
            className="filter-btn"
          >
            החל
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;