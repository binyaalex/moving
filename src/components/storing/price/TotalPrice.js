import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import { BsQuestionDiamondFill } from "react-icons/bs";
import OrderMovingSummary from "../../getMoving/getOffer/OrderMovingSummary";
import OrderStoringSummary from "./OrderStoringSummary";
import ChoosePayMethod from "../../getMoving/getOffer/ChoosePayMethod";
import "./TotalPrice.css"
import "../howMany/HowMany.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TotalPrice(props) {
  const [show, setShow] = useState(false);
  const [only, setOnly] = useState(false);
  const [isToggleBtn, setIsToggleBtn] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    document.querySelector(".web-sideBar").firstChild.firstChild.scrollBy(0, 100)
    setShow(false);
  }

  const handleShowOnly = () => setOnly(true);
  const handleCloseOnly = () => {
    document.querySelector(".web-sideBar").firstChild.firstChild.scrollBy(0, 100)
    setOnly(false);
  }

  const saveHandle = () => {
    setIsSave(document.querySelector('.saveCheckInput').checked)
  }
  const serviceType = () => {
    setIsToggleBtn(document.querySelector("#terms").checked);
  };
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="סיכום הזמנה" />
          <main className="homePage rtl pickItem">
            <section className="paidServicesArea">
              <div className="add_card_name">

                <div>
                  <h1 className="total">אחסנה</h1>
                  <OrderStoringSummary />
                  {/* <h1 className="total price">מחיר אחסנה: 2000 ש''ח</h1> */}
                </div>

                {/* <div className="add_card_text_area minimum-storing-container"> */}
                <div className="terms-container">
                  <div className="filter-btn-div">
                    <label htmlFor="terms">
                      קראתי ואני מאשר את {" "}
                      <div onClick={handleShow} className="terms">
                        התקנון
                      </div>
                    </label>
                    <input onClick={serviceType} type="checkbox" id="terms" />
                  </div>
                </div>

                <div>
                  <h1 className="total">הובלה</h1>
                  <OrderMovingSummary
                    isMoving={false}
                    newAddress="כתובת מחסן"
                    totalPrice={2000}
                  />
                  {/* <h1 className="total price">מחיר הובלה: 2000 ש''ח</h1> */}
                  {/* <div className="mt-5"> */}
                </div>

                <div className="terms-container">
                  <div className="filter-btn-div">
                    <label htmlFor="terms">
                      קראתי ואני מאשר את {" "}
                      <div onClick={handleShow} className="terms">
                        התקנון
                      </div>
                    </label>
                    <input onClick={serviceType} type="checkbox" id="terms" />
                  </div>

                  {/* <label htmlFor="terms">
                    קראתי ואני מאשר את{" "}
                    <div onClick={handleShow} className="terms">
                      התקנון
                    </div>
                  </label>
                  <input onClick={serviceType} type="checkbox" id="terms" />
                </div> */}
                </div>
                <div className="filter-btn-div">
                  <Link to={"/paynow"} className="filter-btn storagePay light">
                    <div className="rightPay">
                      <h1> הזמנת </h1>
                      <h3>אחסנה בלבד </h3>
                    </div>
                    <div className="leftPay">
                      <p>חודש 1 (מתוך 3):</p>
                      <h5>1000 ש"ח</h5>
                      <p>(כולל מע"מ)</p>
                    </div>
                  </Link>
                </div>

                <div className="filter-btn-div">
                  <Link to={""} className="filter-btn storagePay ">
                    <div className="rightPay" onClick={handleShowOnly}>
                      <h1> הזמנת </h1>
                      <h3>אחסנה והובלה </h3>
                    </div>
                    <div className="leftPay">
                      <p>חודש 1 (מתוך 3) + הובלה:</p>
                      <h5>3000 ש"ח</h5>
                      <p>(כולל מע"מ)</p>
                    </div>
                  </Link>
                </div>

                {/* <div className="filter-btn-div" >
                  <Link to={"/paynow"} className="filter-btn storagePay">
                    <p>מחיר אחסנה והובלה: 3000 ש"ח כולל מע"מ</p>
                    <p className="when">(תשלום על אחסנה כעת ותשלום על הובלה לאחר תיאום טלפוני)</p>
                    <h3> הזמנת אחסנה והובלה</h3>
                  </Link>
                </div> */}

                {/* {isToggleBtn && (
                    <div>
                      <div className="filter-btn-div storing">
                        <ChoosePayMethod
                          text1="הובלה ואחסנה 2000 ש''ח"
                          text2="אחסנה חודש ראשון 1000 ש''ח "
                          link1="/paynow"
                          link2="/paynow"
                          className="toggle-btn"
                        />
                      </div>
                      <p className="vat">המחירים כוללים מע''מ*</p>
                    </div>
                  )} */}
              </div>
              {/* </div> */}
            </section>
          </main>

        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{"תקנון שירות"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            הבנתי
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={only} onHide={handleCloseOnly} className="only">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{"לתשומת ליבך:"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>התשלום המקוון בעמוד הבא הוא לאחסנה בלבד!</h6>
          <p>אישור הזמנת ההובלה יישלח למייל שלך ונציגנו ייצור עמך קשר בהקדם לתיאום והסדרת תשלום ההובלה</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/paynow"}>
            <Button variant="success"
            // className="filter-btn storagePay "
            >
              הבנתי
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TotalPrice;
