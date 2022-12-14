import React, { useEffect, useState } from 'react';
import "./Storage.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

//components
import AddMoving from './AddMoving';
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import ItemList from "../repeats/itemList/ItemList";
import SideGallery from "../repeats/sideGallery/SideGallery";
import PersonalDetails from "../repeats/personalDetails/PersonalDetails";
import Cubes from './Cubes';

//images
// import storing from "../../assets/images/storing.jpg";
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
    name: 'לפי קוב',
    desc: 'תמחור מיידי לאחסנה בלבד',
    incl: '',
    value: 'cubes'
  },
  {
    name: 'לפי פריטים',
    desc: 'תמחור מיידי לאחסנה והובלה',
    incl: '(כולל מחשבון קוב)',
    value: 'items'
  },
];

const OnlineStorage = (props) => {

  // useEffect (() => {
  //   document.querySelector(".homeTitle").scrollIntoView();
  // })

  // const [checked, setChecked] = useState(false);
  // const [isMoving, setIsMoving] = useState(false);
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
              mainImg={props.mainLogo}
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
                      style={{width: '50%'}}
                    >
                      <h1 className='toggleHeader'>{radio.name}</h1>
                      {/* <p>{radio.desc}</p> */}
                      <p>{radio.incl}</p>
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Row>

              {radioValue === 'items' ? <ItemList /> : <Cubes />}

              <Row className="mb-3 row" >
                <Form.Group className="mb-3 text" controlId="formBasicList">
                  <Form.Label>הערות</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="הוספת פריט שאינו ברשימה או עצירה בדרך"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3 row">
                <Form.Group as={Col} className="mb-3" controlId="formBasicMoving">
                  <Form.Check
                    reverse
                    type='checkbox'
                    label='הוספת שירותי הובלה'
                    variant="warning"
                    onChange={() => props.setIsMoving(!props.isMoving)}
                  />
                </Form.Group>
              </Row>

              {props.isMoving && <AddMoving header='מהיכן?' withKindOfMoving={true} />}

              <PersonalDetails />

              <div className="contact-btnDiv send">
                <MainBtn
                  text='שליחה'
                  link="/storagesummery"
                />
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
