import { React, useState } from "react";
import { Link } from "react-router-dom";

import ArrowIcon from "../../../assets/images/filter/arrow-icon.png";

const FilterItemList = (props) => {

    const [hospitalFilter, setHospitalFilter] = useState([]);

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
        <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => props.setShowdrp(!props.showdrp)}
            >
              <h5 className="filter-item-title py-3">מומחיות</h5>
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
              {props.service_list.map((el, i) => {
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
    )
}

export default FilterItemList