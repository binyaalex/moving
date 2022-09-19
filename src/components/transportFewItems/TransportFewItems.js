import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TransportFewItems.css";

// bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components

import moving from "../../assets/images/moving.jpg";
import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import kitchen from "../../assets/images/TI-price/kitchen.jpg";

const TransportFewItems = () => {



  const itemsArr = [
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
    },
    {
        header: 'אי מטבח',
        price: 300,
        img: kitchen,
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
                צד שני
            </div>

            <div className="fewItemsFormSide">
                <h5>רשימת מחירים (200 - 1000 ₪)</h5>
                <div className="ItemsList">
                    {itemsArr.map((el, i) => {
                        return (
                            <div className="item" key={i}>
                                <img src={el.img} />
                                <div className="itemText">
                                    <div className="itemH">{el.header}</div>
                                    <div className="itemPrice"><strong>מחיר:</strong> {el.price}₪</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
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
