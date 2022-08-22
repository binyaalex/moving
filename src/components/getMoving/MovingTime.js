import React from "react";

function MovingTime(props) {
  return (
    <div class="flex flex-wrap flex-row">
      <strong class="text-xl flex items-center"></strong>{" "}
      <div class="py-2 px-4 flex items-center justify-between">
        <i
          class="fas fa-check-circle text-xl text-primary"
          style={{ display: "none" }}
        ></i>
      </div>{" "}
      <div class="flex flex-wrap flex-row px-4">
        <div class="w-full flex">
          <div class="w-3/4 ml-4">
            <label class="has-float-label">
              <input
                autocomplete="off"
                type="place"
                placeholder="הזן כתובת"
                class="pac-target-input"
              />{" "}
              <span class="">
                <span>כתובת חדשה</span>{" "}
              </span>
            </label>{" "}
            <small>* כתובת מלאה שכוללת רחוב ועיר</small>
          </div>{" "}
          <div class="w-1/4">
            <label class="has-float-label">
              <span class="select_custom_label">קומה</span>{" "}
              <select name="oqaa2m" placeholder="בחר" class="">
                <option value="">בחר</option>
                <option value="-4">-4</option>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">קרקע</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23+</option>
              </select>
            </label>
          </div>
        </div>{" "}
        <div class="select_dialog_wrap w-full flex flex-row flex-wrap justify-between mt-2 relative">
          <div class="elevator_wrap w-1/3">
            <div>
              <label class="has-float-label">
                <span class="select_custom_label">מעלית</span>{" "}
                <select name="pixsza" placeholder="בחר" class="">
                  <option value="0">אין</option>
                  <option value="4">4 נוסעים</option>
                  <option value="6">6 נוסעים</option>
                  <option value="8">8 נוסעים</option>
                  <option value="10">משא גדולה</option>
                </select>
              </label>
            </div>
          </div>{" "}
          <div class="mb-2 w-1/3 pr-2">
            <div>
              <label class="has-float-label">
                <span class="select_custom_label">שביל כניסה חריג</span>{" "}
                <select name="db7qp5" placeholder="בחר" class="">
                  <option value="">בחר</option>
                  <option value="false">אין</option>
                  <option value="true">יש</option>
                </select>
              </label>
            </div>
          </div>{" "}
          <div class="mb-2 w-1/3 pr-2">
            <div>
              <label class="has-float-label">
                <span class="select_custom_label">מנוף</span>
                <select name="1fw0x" placeholder="בחר" class="">
                  <option value="">בחר</option>
                  <option value="false">אין</option>
                  <option value="true">יש</option>
                </select>
              </label>
            </div>
          </div>
          <textarea
            placeholder="פירוט שביל הכניסה החריג"
            class="hide"
          ></textarea>
        </div>
      </div>
    </div>
    // <div className="flex flex-row flex-wrap px-4 pb-4">
    //   <label className="w-1/2 ml-4 has-float-label">
    //     <span>תאריך מעבר</span>
    //     <input
    //       type="hidden"
    //       data-input="true"
    //       placeholder="בחר תאריך"
    //       name="datetime"
    //       class="flatpickr-input"
    //     ></input>
    //     <input
    //       class="form-control input"
    //       placeholder="בחר תאריך"
    //       tabindex="0"
    //       type="text"
    //       readonly="readonly"
    //     ></input>
    //   </label>
    //   <div className="flex-1">
    //     <label class="has-float-label">
    //       <span class="select_custom_label">שעת תחילת ההובלה</span>{" "}
    //       <select name="zmuuo" placeholder="בחר" class="">
    //         <option value="">בחר</option>
    //         <option value="06:00-09:00">06:00-09:00</option>
    //         <option value="09:00-12:00">09:00-12:00</option>
    //         <option value="12:00-15:00">12:00-15:00</option>
    //         <option value="15:00-18:00">15:00-18:00</option>
    //         <option value="18:00-21:00">18:00-21:00</option>
    //       </select>
    //     </label>
    //   </div>
    /* <h4>? מתי עוברים</h4>
      <form className="form-address-input">
        <div className="d-flex justify-content-center w-100 align-items-center p-3 items-container">
          <input
            type="text"
            className="w-50  address-input"
            // placeholder={address}
          />
          <select name="" id=""></select>
          <input
            type="text"
            className="w-50 h-25 floor-input "
            placeholder="תאריך מעבר"
          />
        </div>

        <input
          type="text"
          className="w-50  address-input"
          // placeholder={address}
        />
      </form> */
    // </div>
  );
}

export default MovingTime;
