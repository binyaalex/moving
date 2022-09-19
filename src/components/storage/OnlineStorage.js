import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Storage.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

//components

import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

//images

import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import businessStorage from "../../assets/images/PS/businessStorage.jpg";
import online from "../../assets/images/PS/online.jpg";

const OnlineStorage = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Radio1', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>

      <div className="page_banner">
        <img src={online} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>אחסנה פרטית</h1>
            <p>בכל הארץ </p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='לדף אחסנה' link='#' />
            <MainBtn text='להזמנה בעזרת נציג' link='#' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="onlineStorageForm">
        <h1 className="homeTitle">פרטי הזמנה</h1>
        <div className="contactDiv">

          <Form className="formBox" >
            <Row className="mb-3 row">

              <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                <Form.Label>אזור</Form.Label>
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

              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>תאריך</Form.Label>
                <Form.Control type="date" placeholder='01/01/2023' />
                <Form.Check
                  reverse
                  type='checkbox'
                  label='גמיש'
                  variant="warning"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3 row">

              <ButtonGroup className="mb-3">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-warning' : 'outline-warning'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Row>


            <div className="contact-btnDiv row">
              <MainBtn text='יצירת קשר' link='#' />
            </div>
          </Form>
        </div>
      </div>



      <Reviews />
      <Footer />

    </>
  );
};

export default OnlineStorage;
