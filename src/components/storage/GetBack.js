import React, { useState, useEffect } from "react";
import "./Storage.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import SideGallery from "../repeats/sideGallery/SideGallery";
import PersonalDetails from "../repeats/personalDetails/PersonalDetails";
import PaymentSuccess from "../repeats/paymentSuccess/PaymentSuccess";

//images
// import storing from "../../assets/images/storing.jpg";
import getback from "../../assets/images/PS/getback.jpg";
import galleryImg1 from "../../assets/images/PS/912_0126.jpg";
import galleryImg2 from "../../assets/images/PS/Boost_18_1101_149.jpg";
import galleryImg3 from "../../assets/images/PS/Stokado_Self_Storage1lr-768x512-jpg.jpg";
import galleryImg4 from "../../assets/images/PS/businessStorage.jpg";
import galleryImg5 from "../../assets/images/PS/maxresdefault.jpg";
import galleryImg6 from "../../assets/images/PS/privateStorage.jpg";

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

const GetBack = (props) => {

  useEffect (() => {
    document.querySelector(".homeTitle").scrollIntoView();
  })

  const [send, setSend] = useState(false);
  const handleSend = () => {
    setSend(true)
  }

  return (
    <>

      <div className="page_banner">
        <img src={getback} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הזמנת אחסנה בעזרת נציג</h1>
            <p>נחזור אליכם בהקדם לאחר השארת פרטים</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='חזרה' link='/privatestorage' />
            <MainBtn text='הזמנה אונליין' link='/onlinestorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />
      <div className="servicesDiv">
        <h1 className="homeTitle">פרטים לחזרה</h1>
        <div className='splitDiv'>
          <div className="imagesSide">
            <SideGallery
              mainImg={props.mainLogo}
              header='אחסנה פרטית'
              galleryArr={galleryArr}
            />
          </div>

          <div className="formSide">
            {send
              ?
              <PaymentSuccess
                text1="תודה שבחרת בנו!"
                text2="נציג יחזור אליך בהקדם"
              />
              :
              <>
                <Form className="formBox" >
                  <Row className="mb-3 row">

                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                      <Form.Label>אזור אחסנה</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>. . .</option>
                        <option value="center">מרכז</option>
                        <option value="sharon">שרון</option>
                        <option value="north sharon">צפון השרון</option>
                        <option value="north">צפון</option>
                        <option value="shfela">שפלה</option>
                        <option value="south">דרום</option>
                        <option value="jerusalem">ירושלים והסביבה</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <PersonalDetails />

                  <div className="contact-btnDiv send">
                    <MainBtn
                      text='שליחה'
                      handleSend={handleSend}
                    />
                  </div>
                </Form>
              </>
            }
          </div>
        </div>
      </div>
      <Reviews />
      <Footer isContact={true} />

    </>
  );
};

export default GetBack;
