import './HowMany.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { FaCouch } from "react-icons/fa";
import Head from '../../repeats/head/Head';
import AddressInput from '../../addressSection/AddressInput';
import PersonalInfo from '../generalComponents/PersonalInfo';
import subDays from "date-fns/subDays"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import NewCalculator from '../calculator/NewCalculator';
import Cubes from '../calculator/Cubes'

function HowMany(props) {
  const [startDate, setStartDate] = useState(new Date());

  const [isMoving, setIsMoving] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [size, setSize] = useState('items')
  const [alignment, setAlignment] = useState('items');
  const [isFlexible, setIsFlexible] = useState();
  const handleFlexable = (e) => {
    setIsFlexible(e.target.value);
  };

  const movingHandle = () => {
    setIsMoving(document.querySelector('.movingCheckInput').checked)
  }
  const dateHandle = () => {
    setIsDate(document.querySelector('.dateCheckInput').checked)
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setSize(newAlignment)
  };

  return (
    <div className="PageDad">
      <div className="page howManyPage">
        <Head text="בחירת תאריך וכמות" />
        <div className="add_card_pages rtl homePage">
          <div className="add_card_area">
            {/* <div className="add_card_area"> */}
            <div className="add_card_text_area">
              <div className="add_card_name">
                <h1 className="add_card_name_h1 whereStoring_h1"> אזור אחסנה </h1>
                <select name="" id="" className="select_address_input">
                  <option selected>בחר</option>
                  <option value="center">מרכז</option>
                  <option value="sharon">שרון</option>
                  <option value="north sharon">צפון השרון</option>
                  <option value="north">צפון</option>
                  <option value="shfela">שפלה</option>
                  <option value="south">דרום</option>
                  <option value="jerusalem">ירושלים והסביבה</option>
                </select>
              </div>
            </div>
            {/* </div> */}

            {/* <label htmlFor="package" className='specific'>האם יש תאריך כניסה מדויק?</label>
            <input
              onClick={dateHandle}
              type="checkbox"
              id="package"
              className="dateCheckInput"
            />
            {isDate ? (
              <> */}
            <div className="address-title-container">
              <h1 className="add_card_h1"> תחילת אחסון</h1>
              <BsClockFill className="house-icon" />
            </div>
            <div className="add_card_text_area ">
              <div className="add_card_name StoringDate" id="add_card_name_date_picker">
                <h1 className="add_card_name_h1"> בחירת תאריך </h1>
                {/* <div className="filter-btn-div movingCheck"> */}
                {/* <h1 className="add_card_name_h1"> תאריך כניסה </h1> */}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="datePicker"
                  excludeDates={
                    [new Date(),
                    subDays(new Date(), 1),
                    subDays(new Date(), 2)]
                  }
                />
                <div className="add_card_name_flexible">
                  <h1 className="add_card_name_h1"> גמיש </h1>
                  <select
                    onChange={handleFlexable}
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
                {/* </div> */}
              </div>
            </div>
            {/* </>
            ) : (
              ""
            )} */}
            <div className="address-title-container couch-icon-div">
              <h1 className="add_card_h1"> גודל אחסון </h1>
              <FaCouch className="couch-icon" />
            </div>
            <div className='toggleDiv'>
              <ToggleButtonGroup
                color="success"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >

                <ToggleButton value="cubes">
                  <div className='buttonDiv'>
                    <h3>לפי קו"ב</h3>
                    <p className='allow'>תמחור מיידי לאחסנה בלבד</p>
                    <p className='allow'> (תמחור הובלה בשיחה עם נציג)</p>
                  </div>
                </ToggleButton>

                <ToggleButton value="items">
                  <div className='buttonDiv'>
                    <h3>לפי תכולה</h3>
                    <p className='allow'>תמחור מיידי לאחסנה והובלה</p>
                    <p className='allow'> (כולל מחשבון קו"ב)</p>
                  </div>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            {(size === 'items')
              ?
              (
                <>
                  <div className='itemsTitle'>
                    <h6 className="items_h1"> בחירת פריטים  </h6>
                    <p className="items_p">  לצורך חישוב נפח אחסון בקו"ב ומחיר הובלה  </p>
                  </div>
                  <NewCalculator />
                  {/* <p>גודל אחסון מחושב לפי הפריטים שבחרת:</p>
                  <h5>50 קו"ב</h5> */}
                </>
                // <div className="add_card_text_area">
                //   <div className="add_card_name size">
                //     {/* <h1 className="add_card_name_h1 by"> לפי תכולה </h1> */}
                //     <Link to="/calculator" className='itemSelect'> לבחירת פריטים</Link>
                //   </div>
                // </div>
              ) : (
                <Cubes />
              )}
          </div>
          <div className="filter-btn-div movingCheck">
            <label htmlFor="package">?מעוניין גם בשרותי הובלה</label>
            <input
              onClick={movingHandle}
              type="checkbox"
              id="package"
              className="movingCheckInput"
            />
          </div>
          {isMoving ? (
            <div className="add_card_area">
              <div className="address-title-container">
                <h1 className="add_card_h1"> מהיכן </h1>
                <BsFillHouseFill className="house-icon" />
              </div>
              <AddressInput address={"כתובת"} placeholder={"נתניה"} />
            </div>
          ) : (
            ""
          )}
          <div className="add_card_area">

            <PersonalInfo header='פרטי לקוח' />
          </div>
          <div className="filter-btn-div">
            <Link to="/totalprice" className="filter-btn">
              להצעת מחיר
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
}

export default HowMany;