import React, { useState } from "react";
import "./Footer.css";
import MainBtn from '../storing/generalComponents/MainBtn'

import clock from "../../assets/images/icons/clock.png";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {


  return (
    <>
      <div className="contact">
        <h1 className="homeTitle">יצירת קשר</h1>
        <div className="contactDiv">

          <Form className="formBox warning" currentColor="">
            <Row className="mb-3">

              <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                <Form.Label>שם</Form.Label>
                <Form.Control type="text" placeholder="השם שלי" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>אי-מייל</Form.Label>
                <Form.Control type="email" placeholder="האימייל שלי" />
              </Form.Group>
            </Row>
            <Row className="mb-3">

              <Form.Group as={Col} className="mb-3" controlId="formBasicPhone">
                <Form.Label>טלפון</Form.Label>
                <Form.Control type="phone" placeholder="הטלפון שלי" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicity">
                <Form.Label>עיר</Form.Label>
                <Form.Control type="text" placeholder="העיר שלי" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>פנייה</Form.Label>
              <Form.Control
                // as="textarea"
                placeholder="הפנייה שלי"
                style={{ height: '100px', width: '300px' }}
              />
            </Form.Group>
            <div className="contact-btnDiv">
              <MainBtn text='יצירת קשר' link='#' />
            </div>

          </Form>
        </div>
      </div>
    </>
  )
};

export default Footer;
