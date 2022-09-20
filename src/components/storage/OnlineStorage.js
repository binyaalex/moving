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
import ItemList from "../repeats/itemList/ItemList";
//images

import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import businessStorage from "../../assets/images/PS/businessStorage.jpg";
import online from "../../assets/images/PS/online.jpg";

const radios = [
  {
    name: 'לפי קו"ב',
    desc: 'תמחור מיידי לאחסנה בלבד)',
    incl: '(תמחור הובלה בשיחה עם נציג)',
    value: 'cubes'
  },
  {
    name: 'לפי פריטים',
    desc: 'תמחור מיידי לאחסנה והובלה',
    incl: '(כולל מחשבון קו"ב)',
    value: 'items'
  },
];

const cubesArr = [
  { cubes: '10 קו"ב', desc: "דירת סטודיו קטנה" },
  { cubes: '15 קו"ב', desc: "דירת סטודיו בינונית" },
  { cubes: '20 קו"ב', desc: "דירת סטודיו גדולה" },
  { cubes: '25 קו"ב', desc: "דירת 2 חדרים קטנה" },
  { cubes: '30 קו"ב', desc: "דירת 2 חדרים בינונית" },
  { cubes: '35 קו"ב', desc: "דירת 2 חדרים גדולה" },
  { cubes: '40 קו"ב', desc: "דירת 3 חדרים קטנה" },
  { cubes: '45 קו"ב', desc: "דירת 3 חדרים בינונית" },
  { cubes: '50 קו"ב', desc: "דירת 3 חדרים גדולה" },
  { cubes: '55 קו"ב', desc: "דירת 4 חדרים קטנה" },
  { cubes: '60 קו"ב', desc: "דירת 4 חדרים בינונית" },
  { cubes: '65 קו"ב', desc: "דירת 4 חדרים גדולה" },
  { cubes: '70 קו"ב', desc: "דירת 5 חדרים קטנה" },
  { cubes: '75 קו"ב', desc: "דירת 5 חדרים בינונית" },
  { cubes: '80 קו"ב', desc: "דירת 5 חדרים גדולה" },
  { cubes: '85 קו"ב', desc: "דירת 6 חדרים קטנה" },
  { cubes: '90 קו"ב', desc: "דירת 6 חדרים בינונית" },
  { cubes: '95 קו"ב', desc: "דירת 6 חדרים גדולה" },
  { cubes: '100 קו"ב', desc: "וילה קטנה" },
  { cubes: '100-200 קו"ב', desc: "וילה גדולה" },
  { cubes: '200+ קו"ב', desc: "" }
];

const categoryArr = [
  {
    img: "/images/moving/closet.jpg",
    title: "ארונות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/sofa.jpg",
    title: "ספות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/bed.jpg",
    title: "מיטות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/wm.jpg",
    title: "מכונות כביסה",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/table.jpg",
    title: "שולחנות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/chair.jpg",
    title: "כסאות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/tv.jpg",
    title: "טלויזיות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/dresser.jpg",
    title: "שידות",
    link: "/calculatorpickitem",
  },
  {
    img: "/images/moving/stuff.jpg",
    title: "שונות",
    link: "/calculatorpickitem",
  },
];

const OnlineStorage = () => {
  const [checked, setChecked] = useState(false);
  const [moving, setMoving] = useState(false);
  const [radioValue, setRadioValue] = useState('items');
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
        <div className="formDiv">
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
              <Form.Label>נפח</Form.Label>

              <ButtonGroup className="mb-3 radio">

                {radios.map((radio, i) => (
                  <ToggleButton
                    key={i}
                    id={`radio-${i}`}
                    type="radio"
                    variant={i % 2 ? 'outline-warning' : 'outline-warning'}
                    name={radio.name}
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    <h1>{radio.name}</h1>
                    <p>{radio.desc}</p>
                    <p>{radio.incl}</p>
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Row>
            {radioValue === 'items'
              ?
              <ItemList
                itemsArr={categoryArr}
                withPrice={false}
              />
              :
              <Row className="mb-3 row">
                <ButtonGroup className="mb-3 cubeButtons">
                  {cubesArr.map((cube, i) => (
                    <ToggleButton
                      key={i}
                      id={`cube-${i}`}
                      type="cube"
                      variant={i % 2 ? 'outline-secondary' : 'outline-secondary'}
                      name={cube.name}
                      value={cube.value}
                      // checked={radioValue === cube.value}
                      // onChange={(e) => setRadioValue(e.currentTarget.value)}
                      className="cube"
                    >
                      <h5>{cube.cubes}</h5>
                      <p>{cube.desc}</p>
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Row>
            }
            <Row className="mb-3 row">
              <Form.Group as={Col} className="mb-3" controlId="formBasicMoving">
                <Form.Check
                  reverse
                  type='checkbox'
                  label='הוספת שירותי הובלה'
                  variant="warning"
                  onChange={() => setMoving(!moving)}
                />
              </Form.Group>
            </Row>
            {moving &&
              <>
                <h3 className="subTitle">כתובת</h3>
                <Row className="mb-3 row">
                  <Form.Group as={Col} className="mb-3" controlId="formBasicFrom">
                    <Form.Label>עיר</Form.Label>
                    <Form.Control type="text" placeholder="נתניה" />
                  </Form.Group>
                </Row>
                <Row className="mb-3 row">

                  <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                    <Form.Label>קומה</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option selected>. . .</option>
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
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                    <Form.Label>מעלית</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="0">אין</option>
                      <option value="4" selected>
                        4 נוסעים
                      </option>
                      <option value="6"> 6 נוסעים</option>
                      <option value="8"> 8 נוסעים</option>
                      <option value="10"> משא גדולה</option>
                    </Form.Select>
                  </Form.Group>
                </Row>


                <Row className="mb-3 row">

                  <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                    <Form.Label>שביל כניסה חריג</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="no">אין</option>
                      <option value="yes">יש</option>
                      <option value="unknown">לא ידוע</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                    <Form.Label>צורך במנוף</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="no">כן</option>
                      <option value="yes">לא</option>
                      <option value="unknown">לא ידוע</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </>
            }
            <h3 className="subTitle">פרטים אישיים</h3>


            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
              <Form.Label>שם</Form.Label>
              <Form.Control type="text" placeholder="השם שלי" />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
              <Form.Label>אי-מייל</Form.Label>
              <Form.Control type="email" placeholder="האימייל שלי" />
            </Form.Group>


            <Form.Group as={Col} className="mb-3" controlId="formBasicPhone">
              <Form.Label>טלפון</Form.Label>
              <Form.Control type="phone" placeholder="הטלפון שלי" />
            </Form.Group>

            <div className="contact-btnDiv send">
              <MainBtn text='שליחה' link='#' />
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
