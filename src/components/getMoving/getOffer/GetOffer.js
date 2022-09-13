import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import kitchen from "../../../assets/images/getMoving/kitchen.jpg";
import closet2 from "../../../assets/images/getMoving/closet2.jpg";
import closet3 from "../../../assets/images/getMoving/closet3.jpg";
import closet4 from "../../../assets/images/getMoving/closet4.jpg";
import closet5 from "../../../assets/images/getMoving/closet5.jpg";
import closet6 from "../../../assets/images/getMoving/closet6.jpg";
import "./GetOffer.css"
import ChosenItem from "../pickItem/ChosenItem";
import { BsQuestionDiamondFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import ModalAlert from "../ModalAlert"
import ChoosePayMethod from "./ChoosePayMethod";
import OrderMovingSummary from "./OrderMovingSummary";
import Switch from "@mui/material/Switch";


function GetOffer(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [totalPrice, setTotalPrice] = useState(2000);
  const [isToggleBtn, setIsToggleBtn] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);

  const scrollDown = () => {
    document.querySelector(".web-sideBar").firstChild.firstChild.scrollBy(0, 100)
  }

  if (isToggleBtn) {
    console.log(1);
    setTimeout(scrollDown, 50)
  }

  const handleChange = (event) => {
    setChecked(event.target.checked)
    if (checked) {
      setTotalPrice(totalPrice - 1000);
    } else {
      setTotalPrice(totalPrice
        + 1000);
    }
  };
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="סיכום הזמנה" />
          <main className="homePage pickItem">
            <section className="paidServicesArea">
              <OrderMovingSummary
                isMoving={true}
                newAddress="כתובת חדשה: פתח תקווה"
                totalPrice={totalPrice}
              />
            </section>

            <div className="terms-container">

              <div className="filter-btn-div">
                <BsQuestionDiamondFill
                  onClick={handleShow}
                  className="question-mark-icon"
                />
                <label className="add-package">
                  הוספת שירותי אריזה ב-1000 ש''ח בלבד
                </label>
                {/* <div className="filter-btn-div"> */}
                <input onChange={handleChange} type="checkbox" id="terms" />
                {/* </div> */}
              </div>

              <div className="filter-btn-div">
                <label htmlFor="terms">
                  {" "}
                  קראתי ואני מאשר את{" "}
                  <div onClick={handleShow1} className="terms">
                    התקנון
                  </div>
                </label>
                <input type="checkbox" id="terms" />
              </div>
            </div>
            {/* <h1 className="total-price">סה''כ לתשלום: {totalPrice} ש''ח</h1> */}

            <div className="filter-btn-div">
              <Link to={"/paymentsuccess"} className="filter-btn">
                <p>סה''כ לתשלום: {totalPrice} ש"ח כולל מע"מ</p>
                <h1>לאישור</h1>
              </Link>
            </div>

            {/* <div className="filter-btn-div" >
              <Link to={"/callback"} className="filter-btn later">
                תשלום בתום ההובלה
              </Link>
            </div> */}

            {/* <div className="filter-btn-div">
              <button
                onClick={() => setIsToggleBtn(true)}
                className="filter-btn"
              >
                אישור הזמנה
              </button>
            </div> */}

            {/* {isToggleBtn && (
              <div className="filter-btn-div" id="toggle-btn-div">
                <ChoosePayMethod
                  text1="תשלום כעת (עד 12 תשלומים)"
                  text2="תשלום בסיום ההובלה (מזומן/ביט)"
                  link1="/paymentsuccess"
                  link2="/callback"
                  className="toggle-btn"
                  style={{ textAlign: "center !important" }}
                />
              </div>
            )} */}
          </main>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {"שירותי אריזה כוללים..."}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            הבנתי
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{"תקנון שירות"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            הבנתי
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GetOffer;
