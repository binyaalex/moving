import React from 'react';
import "./PersonalInfo.css"
import { isPersonalDetails } from '../../../redux/features/callback/callBackSlice';
import { useDispatch } from 'react-redux';
function PersonalInfo(props) {
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
e.preventDefault();
dispatch(isPersonalDetails(true))
  }
    return (
      <>
        <div className="add_card_text_area">
          {/* <div className="add_card_text_area"> */}
            <div className="add_card_name">
              <h1 className="add_card_name_h1">שם מלא</h1>
              <input
                type={"email"}
                className="add_card_name_input"
                placeholder="פתח תקווה"
              />
            </div>
            <div className="add_card_name">
              <h1 className="add_card_name_h1"> מספר נייד </h1>
              <input
                type={"email"}
                className="add_card_name_input"
                placeholder=" נתניה"
              />
            </div>
            <div className="add_card_name">
              <h1 className="add_card_name_h1"> אימייל </h1>
              <input
                type={"email"}
                className="add_card_name_input"
                placeholder=" נתניה"
              />
            </div>
          {/* </div> */}
        </div>
        {/* </div>
      </div> */}
        {/* <form onSubmit={handleSubmit}>
          <div className="add_card_pages rtl">
            <div className="add_card_area">
              <div className="add_card_text_area">
                <h1 className="add_card_h1">{props.header}</h1>
                <div className="add_card_text_area">
                  <div className="add_card_name">
                    <h1 className="add_card_name_h1">שם מלא</h1>
                    <input type={"text"} className="add_card_name_input" />
                  </div>
                </div>
                <div className="add_card_name">
                  <h1 className="add_card_name_h1"> מספר נייד</h1>
                  <input type={"text"} className="add_card_name_input" />
                </div>
                <div className="add_card_name">
                  <h1 className="add_card_name_h1"> אימייל </h1>
                  <input type={"email"} className="add_card_name_input" />
                </div>
              </div>
            </div>
          </div>
        </form> */}
      </>
    );
}

export default PersonalInfo;