import React, { useState } from "react";
import Head from "../repeats/head/Head";
import SpecialistsList from "../repeats/specialistsList/SpecialistsList";
import ThisWeek from "./weekList/ThisWeek";
import MeetBtn from "./meet/MeetBtn";
import "./Appointment.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import arrowDown from "../../assets/images/icons/downArrow.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const [timeCalendarIsOpen, setTimeCalendarIsOpen] = useState(false);

  return (
    <>
      <div className="appointmentPage page">
        <Head text="הזמנת שירות" />
        <div className="appointment">
          <div className="searchBoxContainer">
            <div className="searchboxHeading">
              <img src={arrowDown} className="arrowDown" alt="arrow" />
              <h2>1. בחירת מומחה</h2>
            </div>

            <div className="searchBox">
              <input
                id="search"
                type="search"
                placeholder="חיפוש לפי שירות או מומחית"
              />
              <SearchIcon />
            </div>
          </div>

          <SpecialistsList />

          <div className="dateSelectorContainer">
            <div className="dateSelectorHeading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>2. בחירת תאריך</h2>
            </div>
            <div
              className="dateSelector"
              onClick={() => setCalendarIsOpen(!calendarIsOpen)}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                id="dateselector"
                placeholderText=" Open calendar"
                open={calendarIsOpen}
                onClickOutside={() => setCalendarIsOpen(!calendarIsOpen)}
              />

              <CalendarTodayIcon />
            </div>
          </div>

          <ThisWeek />

          <div className="timeSelectorContainer">
            <div className="timeSelectorHeading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>3. בחירת זמן</h2>
            </div>
            <div
              className="timeSelector"
              onClick={() => setTimeCalendarIsOpen(!timeCalendarIsOpen)}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="h:mm aa"
                open={timeCalendarIsOpen}
                onClickOutside={() =>
                  setTimeCalendarIsOpen(!timeCalendarIsOpen)
                }
              />
              <MoreTimeIcon />
            </div>
          </div>

          <div className="timeSelectorOptionContainer">
            <MeetBtn text="10:00" />
            <MeetBtn text="12:00" />
            <MeetBtn text="15:00" />
            <MeetBtn text="16:00" />
          </div>
        </div>
        <div className="boxBtn">
            <Link to="/confirm" className="goBtn">
אישור            </Link>
        </div>
      </div>
    </>
  );
}

export default Appointment;
