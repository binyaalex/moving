import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays"

import "./MovingTime.css";
function MovingTime({isOnlyDate}) {
  const [startDate, setStartDate] = useState(new Date());
    const [isFlexible, setIsFlexible] = useState();
    const handleChange = (e) => {
      setIsFlexible(e.target.value);
    };

  return (
    <>
        <div className="add_card_name" id="add_card_name_date_picker">
          <h1 className="add_card_name_h1"> תאריך מעבר </h1>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date-number"
            excludeDates={[
              new Date(),
              subDays(new Date(), 1),
              subDays(new Date(), 2),
            ]}
          />
        </div>
        {!isOnlyDate && (
          <>
            <div className="add_card_name">
              <h1 className="add_card_name_h1"> שעת תחילת ההובלה </h1>
              <select name="" id="" className="select_address_input">
                <option value="1" selected>
                  06:00-09:00
                </option>
                <option value="2">09:00-12:00</option>
                <option value="3">12:00-15:00</option>
                <option value="4">15:00-18:00</option>
                <option value="5">18:00-21:00</option>
              </select>
            </div>
            <div className="add_card_name">
              <h1 className="add_card_name_h1"> גמיש </h1>
              <select
                onChange={handleChange}
                value={isFlexible}
                name=""
                id=""
                className="select_address_input"
              >
                <option value="yes">כן</option>
                <option selected value="no">
                  לא
                </option>
              </select>
            </div>
            {isFlexible === "yes" && (
              <div className="add_card_name">
                <h1 className="add_card_name_h1"> ימי גמישות </h1>
                <select
                  onChange={handleChange}
                  value={isFlexible}
                  name=""
                  id=""
                  className="select_address_input"
                >
                  <option value="3">3</option>
                  <option selected value="1">
                    1
                  </option>
                  <option selected value="2">
                    2
                  </option>
                  <option selected value="4">
                    4
                  </option>
                  <option selected value="5">
                    5+
                  </option>
                </select>
              </div>
            )}
          </>
        )}
    </>
  );
}

export default MovingTime;
