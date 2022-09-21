import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Storage.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

//components
import AddMoving from './AddMoving';
import MainBtn from '../storing/generalComponents/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import ItemList from "../repeats/itemList/ItemList";
import SideGallery from "../repeats/sideGallery/SideGallery";
import PersonalDetails from "../repeats/personalDetails/PersonalDetails";

//images
import moving from "../../assets/images/moving.jpg";
import storing from "../../assets/images/storing.jpg";
import clip from "../../assets/images/magal/clip.mp4";
import privateStorage from "../../assets/images/PS/privateStorage.jpg";
import businessStorage from "../../assets/images/PS/businessStorage.jpg";
import galleryImg1 from "../../assets/images/PS/912_0126.jpg";
import galleryImg2 from "../../assets/images/PS/Boost_18_1101_149.jpg";
import galleryImg3 from "../../assets/images/PS/Stokado_Self_Storage1lr-768x512-jpg.jpg";
import galleryImg4 from "../../assets/images/PS/businessStorage.jpg";
import galleryImg5 from "../../assets/images/PS/maxresdefault.jpg";
import galleryImg6 from "../../assets/images/PS/privateStorage.jpg";

import online from "../../assets/images/PS/online.jpg";

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


const OnlineStorage = () => {
  const [checked, setChecked] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [radioValue, setRadioValue] = useState('items');
  return (
    <>

      <div className="page_banner">
        <img src={online} />
        <div className="banner_content">
          <div className="banner_title">
            <h1>הזמנת אחסנה אונליין</h1>
            <p>רק למלא פרטים ולשלוח</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='חזרה' link='/privatestorage' />
            <MainBtn text='הזמנה בעזרת נציג' link='/getbackstorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">פרטי הזמנה</h1>
        <div className='splitDiv'>
          <div className="imagesSide">
            <SideGallery
              mainImg={storing}
              header='אחסנה פרטית'
              galleryArr={galleryArr}
            />
          </div>

          <div className="formSide">

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
                <ItemList withPrice={false} />
                :
                <Row className="mb-3 row">
                  <ButtonGroup className="mb-3 cubeButtons">
                    {cubesArr.map((cube, i) => (
                      <ToggleButton
                        key={i}
                        id={`cube-${i}`}
                        // type="cube"
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
                    onChange={() => setIsMoving(!isMoving)}
                  />
                </Form.Group>
              </Row>

              {isMoving && <AddMoving />}

              <PersonalDetails />

              <div className="contact-btnDiv send">
                <MainBtn text='שליחה' link='#' />
              </div>

            </Form>
          </div>
        </div>
      </div>

      <Reviews />
      <Footer />
    </>
  );
};

export default OnlineStorage;
