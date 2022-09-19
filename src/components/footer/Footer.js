import React, { useState } from "react";
import "./Footer.css";
import MainBtn from '../storing/generalComponents/MainBtn'

import clock from "../../assets/images/icons/clock.png";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import bg from '../../assets/images/footer.jpg';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

  const mediaArr = [
    {
      header: 'אי-מייל',
      par: 'moving@gmail.com',
      icon: EmailIcon,
    },

    {
      header: 'טלפון',
      par: '1800-00-00-00',
      icon: PhoneIcon,
    },
    {
      header: 'תמיכה',
      par: 'להסברים נוספים',
      icon: SupportAgentIcon,
    }
  ]
  return (
    <>
      <div className="contact">
        <h1 className="homeTitle">יצירת קשר</h1>
        <div className="contactDiv">

          <Form className="formBox">
            <Row className="mb-3 row">

              <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                <Form.Label>שם</Form.Label>
                <Form.Control type="text" placeholder="השם שלי" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>אי-מייל</Form.Label>
                <Form.Control type="email" placeholder="האימייל שלי" />
              </Form.Group>
            </Row>
            <Row className="mb-3 row">

              <Form.Group as={Col} className="mb-3" controlId="formBasicPhone">
                <Form.Label>טלפון</Form.Label>
                <Form.Control type="phone" placeholder="הטלפון שלי" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicity">
                <Form.Label>עיר</Form.Label>
                <Form.Control type="text" placeholder="העיר שלי" />
              </Form.Group>
            </Row>
            <Row className="mb-3 row">

              <Form.Group className="mb-3 text" controlId="formBasicEmail">
                <Form.Label>פנייה</Form.Label>
                <Form.Control
                  // as="textarea"
                  placeholder="הפנייה שלי"
                  style={{ height: '100px', width: '100%' }}
                />
              </Form.Group>
            </Row>
            <div className="contact-btnDiv row">
              <MainBtn text='יצירת קשר' link='#' />
            </div>
          </Form>
        </div>
      </div>

      <div className="mediaDiv">
        {mediaArr.map((el, i) => {
          return (
            <div className="media" key={i}>
              <div className="iconWrapper">
                <el.icon bg="grey" fontSize="large" color="warning" />
              </div>
              <h1>{el.header}</h1>
              <p>{el.par}</p>
            </div>
          )
        })}
      </div>

      <div className="foot">
        <img src={bg} />
        <div className="content">
          <div className="right">
            <h5>Moving & Storing Solutions</h5>
            <p>כל פתרונות ההובלה והאחסנה מרוכזים במקום אחד</p>
            <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
          </div>
          <div className="center">
            <h5>קישורים</h5>
            <Link to=""><p>אודות</p></Link>
            <Link to=""><p>יצירת קשר</p></Link>
          </div>
          <div className="left">
            <h5>עקבו אחרינו</h5>
            <div className="social">
              <FacebookIcon />
              <TwitterIcon />
              <  InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Footer;
