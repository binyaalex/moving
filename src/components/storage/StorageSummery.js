// import './TransportSummery.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";

// bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import SideGallery from "../repeats/sideGallery/SideGallery";
import PaymentSuccess from "../repeats/paymentSuccess/PaymentSuccess";

//images
import bannerImg from "../../assets/images/TII/0d29cde6ea92435fc56819d5d1f3d55a.jpg";
import mainImg from "../../assets/images/storing.jpg";
import galleryImg1 from "../../assets/images/PS/912_0126.jpg";
import galleryImg2 from "../../assets/images/PS/Boost_18_1101_149.jpg";
import galleryImg3 from "../../assets/images/PS/Stokado_Self_Storage1lr-768x512-jpg.jpg";
import galleryImg4 from "../../assets/images/PS/businessStorage.jpg";
import galleryImg5 from "../../assets/images/PS/maxresdefault.jpg";
import galleryImg6 from "../../assets/images/PS/privateStorage.jpg";

const StorageSummery = () => {
  const [totalPrice, setTotalPrice] = useState(2000);
  const [checked, setChecked] = React.useState(false);
  const [isMonths, setIsMonths] = React.useState(false);
  const [send, setSend] = useState(false);
  const handleSend = () => {
    setSend(true)
  }
  const items = ['מקרר', 'מכונת כביסה', 'ארון בגדים', 'מקרר']

  const galleryArr = [
    {
      img: galleryImg1
    },
    {
      img: galleryImg2
    },
    {
      img: galleryImg3
    },
    {
      img: galleryImg4
    },
    {
      img: galleryImg5
    },
    {
      img: galleryImg6
    },
  ]


  const monthsDisplay = (event) => {
    setIsMonths(event.target.checked)
  };

  const handleChange = (event) => {
    setChecked(event.target.checked)
    if (checked) {
      setTotalPrice(totalPrice - 1000);
    } else {
      setTotalPrice(totalPrice
        + 1000);
    }
  };

  const handleShow1 = () => {
    console.log(1);
  }
  
  return (
    <div className="transportFewItems">

      <div className="page_banner">
        <img src={bannerImg} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הזמנת אחסנה אונליין</h1>
            <p>רק למלא פרטים ולשלוח</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='חזרה' link='/onlinestorage' />
            <MainBtn text='הזמנה בעזרת נציג' link='/getbackStorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">פרטי הזמנה</h1>
        <div className="splitDiv">
          <div className="imagesSide">
            <SideGallery
              mainImg={mainImg}
              header='שירותי אחסנה'
              galleryArr={galleryArr}
            />
          </div>

          <div className="formSide">
            
                <Form className="formBox">

                  <div className="order-summary-header" style={{marginTop: 0}} >אחסנה</div>

                  <div className="order-summary-container">
                      <p><strong>כמות קו"ב:</strong> 20</p>
                      <p>תאריך אחסנה: 22/09/23</p>
                      <p>
                        <strong className="moving-total-price">
                          מחיר אחסנה לחודש כולל מע''מ: {totalPrice} ש''ח
                        </strong>
                      </p>
                      <p className="storge-time-div">
                        <label className="add-package" htmlFor="addPackage">
                          האם לשריין תקופת אחסנה?
                        </label>
                        <input onChange={monthsDisplay} type="checkbox" id="addPackage" />
                      </p>
                      {isMonths ? (
                        <Row className="mb-3 row">
                          <Form.Group as={Col} controlId="formBasicName">
                            <Form.Label>מספר חודשים לשריון מקום</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="2" selected >2</option>
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
                            </Form.Select>
                          </Form.Group>
                        </Row>
                      ) : (
                        ""
                      )}

                      <p>אי שריון פירושו אחסנה לחודש ימים עם אופציה להארכה על בסיס מקום פנוי בלבד, כאמור בתקנון האחסנה</p>
                  </div>

                  <div className="terms-container">
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

                  <div className="order-summary-header">הובלה</div>

                  <div className="order-summary-container">
                    <div className="order-personaldetails">
                      <p><strong>שם מלא:</strong> ישראלה ישראלי</p>
                      <p>שעת תחילה הובלה: 09:00-12:00</p>
                      <p>תאריך מעבר: 24/09/22</p>
                    </div>
                    <div className="present-address">
                      <h5 className="address-title"><strong> כתובת נוכחית:</strong> נתניה</h5>
                      <p> קומה: 2 </p>
                      <p> מעלית: 4 נוסעים</p>
                      <p> שביל כניסה חריג: אין</p>
                      <p> מנוף: לא</p>
                    </div>
                    <div className="chosen-items-list">
                      <strong>פריטים שבחרתי:</strong>
                      <ul>
                        {items.map((item, idx) => {
                          const itemQuantity = items.filter(
                            (item2) => item2 === item
                          ).length;
                          return (
                            <li key={idx} className="li-item">
                              {itemQuantity > 0 ? `${item}` : `${item} X ${itemQuantity}`}
                            </li>
                          );
                        })}
                      </ul>{" "}
                    </div>

                    <div className="contact-btnDiv send">
                      <MainBtn text='הוספת/הסרת פריטים' link='/onlinestorage' />
                    </div>

                    <strong className="moving-total-price">
                      מחיר הובלה כולל מע''מ: {totalPrice} ש''ח
                    </strong>
                  </div>


                  <div className="terms-container">

                    <div className="filter-btn-div">

                      <label className="add-package" htmlFor="addPackage">
                        הוספת שירותי אריזה ב-1000 ש''ח בלבד
                      </label>
                      <input onChange={handleChange} type="checkbox" id="addPackage" />
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

                  <div className="filter-btn-div send">
                    <Link className="filter-btn" to="/storagepay" >
                      <p>
                        מחיר אחסנה כולל מע"מ: 1000 ש"ח
                      </p>
                      <h1 className='transportSummeryBtnApprove1'>
                        הזמנת אחסנה בלבד
                      </h1>
                    </Link>
                  </div>

                  <div className="filter-btn-div send">
                    <Link className="filter-btn" to="/storagepay" >
                      <p>
                        מחיר אחסנה והובלה כולל מע"מ: {totalPrice} ש"ח
                      </p>
                      <h1 className='transportSummeryBtnApprove1'>
                        הזמנת אחסנה והובלה
                      </h1>
                    </Link>
                  </div>
                </Form>
          </div>

        </div>
      </div>

      <Reviews />
      <Footer />

    </div>
  );
};

export default StorageSummery;
