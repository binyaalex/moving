import React, { useState } from "react";
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
import storing from "../../assets/images/storing.jpg";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import businessStorage from "../../assets/images/PS/businessStorage.jpg";
import galleryImg1 from "../../assets/images/BS/50_off_banner_2-bg.jpeg";
import galleryImg2 from "../../assets/images/BS/BUSINESS PARK-1.jpg";
import galleryImg3 from "../../assets/images/BS/Chapman_Final-17-of-75.jpeg";
import galleryImg4 from "../../assets/images/BS/stockage24-box-louer-box-location-depot-louer-garage-location-Stockage_1.jpg";
import galleryImg5 from "../../assets/images/BS/small1.jpg";
import galleryImg6 from "../../assets/images/BS/Professional-removals-and-storage-services-in-Bozeat-Wollaston-Irchester-Northamptonshire.jpg";

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

const BusinessStorage = () => {
  const [send, setSend] = useState(false);
  const handleSend = () => {
    setSend(true)
  }

  const servicesArr = [
    {
      header: 'פרטית',
      img: privateStorage,
      link: '/privateStorage'
    },
    {
      header: 'עסקית',
      img: businessStorage,
      link: '/businessStorage'
    },
  ]

  return (
    <>

      <div className="page_banner">
        <img src={businessStorage} />
        <div className="banner_content">
          <div className="banner_title">
            <h1> אחסנה עסקית</h1>
            <p>אחסנת ציוד מפעלים ומשרדים</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='חזרה' link='/storage' />
            <MainBtn text='אחסנה פרטית' link='/privatestorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />
      <div className="servicesDiv">
        <h1 className="homeTitle">פרטים לחזרה</h1>
        <div className='splitDiv'>
          <div className="imagesSide">
            <SideGallery
              mainImg={storing}
              header='אחסנה עסקית'
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

export default BusinessStorage;
