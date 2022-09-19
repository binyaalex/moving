import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TransportFewItems.css";

// bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import SideGallery from "../repeats/sideGallery/SideGallery";

//images
import moving from "../../assets/images/moving.jpg";
import kitchen from "../../assets/images/TI-price/kitchen.jpg";
import closet2 from "../../assets/images/TI-price/Modern-MDF-Wooden-Bedroom-Clothes-Storage-2-Door-Wardrobe-HF-WB44-.jpg";
import closet3 from "../../assets/images/TI-price/wardrobe00021-03eee9cf-ba75-4a4b-b5a4-44bbc88e0862-809x809.jpg";
import closet4 from "../../assets/images/TI-price/spacewood-apex-engineered-wood-4-door-wardrobe-flipkart-img_cf71727f0d2ed4c0_9-0900-1-c8e2295.jpg";
import closet5 from "../../assets/images/TI-price/5023_AD174_G038_Bellezza.jpg";
import closet6 from "../../assets/images/TI-price/wardrobes-shown-in-pictures-are-all-300-cm-wardrobes-version-with-exterior-drawers.jpeg";
import galleryImg1 from "../../assets/images/TII/0d29cde6ea92435fc56819d5d1f3d55a.jpg";
import galleryImg2 from "../../assets/images/TII/iStock-467917955.jpg";
import galleryImg3 from "../../assets/images/TII/moving-company-insurance.jpg";
import galleryImg4 from "../../assets/images/TII/moving-service-worker-sealing-cardboard-box-GRM5SEC.jpg";
import galleryImg5 from "../../assets/images/TII/packing-furniture-moving-service.jpg";
import galleryImg6 from "../../assets/images/TII/Two-Movers-With-Box-On-Stairca-97352312.jpg";
import ItemList from "../repeats/itemList/ItemList";

const TransportFewItems = () => {

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


    const itemsArr = [
        {
            title: 'אי מטבח',
            price: 300,
            img: kitchen,
            link: '#',
        },
        {
            title: 'ארון 2 דלתות',
            price: 300,
            img: closet2,
            link: '#',
        },
        {
            title: 'ארון 3 דלתות',
            price: 300,
            img: closet3,
            link: '#',
        },
        {
            title: 'ארון 4 דלתות',
            price: 300,
            img: closet4,
            link: '#',
        },
        {
            title: 'ארון 5 דלתות',
            price: 300,
            img: closet5,
            link: '#',
        },
        {
            title: 'ארון 6 דלתות',
            price: 300,
            img: closet6,
            link: '#',
        },
    ]

  return (
    <div className="transportFewItems">

      <div className="page_banner">
        <img src={moving} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הובלת פריטים בודדים</h1>
            <p>בכל הארץ </p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='הובלה' link='#' />
            <MainBtn text='אחסנה' link='#' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">הובלת פריטים בודדים</h1>
        <div className="fewItemsDiv">
            <div className="fewItemsImagesSide">
                <SideGallery 
                    mainImg={moving}
                    header='שירותי הובלות'
                    galleryArr={galleryArr}
                />
            </div>

            <div className="fewItemsFormSide">
                <h5>רשימת מחירים (200 - 1000 ₪)</h5>
                
                <ItemList 
                    itemsArr={itemsArr}
                    withPrice={true} 
                />
                
                
                <Form className="formBox">
                    <Row className="mb-3 row">
                        <Form.Group as={Col} className="mb-3" controlId="formBasicFrom">
                            <Form.Label>מהיכן אתה עובר?</Form.Label>
                            <Form.Control type="text" placeholder="באר שבע" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 row">
                        <Form.Group as={Col} className="mb-3" controlId="formBasicDestination">
                            <Form.Label>להיכן אתה עובר?</Form.Label>
                            <Form.Control type="text" placeholder="נתניה" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 row">
                        <Form.Group as={Col} className="mb-3" controlId="formBasicDate">
                            <Form.Label>מתי אתה עובר?</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 row">
                        <Form.Group className="mb-3 text" controlId="formBasicList">
                            <Form.Label>רשימת פריטים</Form.Label>
                            <Form.Control
                            // as="textarea"
                            placeholder="4 מיטות 3 ארונות..."
                            style={{ height: '100px', width: '100%' }}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 row">
                        <Form.Group as={Col} className="mb-3" controlId="formBasicFile">
                            <Form.Label>העלאת תמונות או וידאו (לא חובה)</Form.Label>
                            <Form.Control type="file" placeholder="בחר קובץ" />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                        <Form.Label>פרטים ליצירת קשר</Form.Label>
                        <Form.Control type="text" placeholder="שם מלא" />
                        <Form.Control
                            type="email" 
                            placeholder="אימייל" 
                            style={{ margin: '10px 0' }}
                        />
                        <Form.Control type="phone" placeholder="טלפון" />
                    </Form.Group>

                    <div className="contact-btnDiv row">
                        <MainBtn 
                            text='שלח' 
                            link='#' 
                            style={{ padding: '5px 25px' }}
                        />
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

export default TransportFewItems;