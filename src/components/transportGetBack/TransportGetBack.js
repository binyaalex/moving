import React, { useState } from "react";

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

const TransportGetBack = () => {

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

    return (
        <div className="transportFewItems">

            <div className="page_banner">
                <img src={moving} />
                <div className="banner_content">
                    <div className="banner_title">
                        <h1>הובלת דירות ובתים</h1>
                        <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
                    </div>
                    <div className="btnDiv">
                        <MainBtn text='חזרה' link='/transportapartment' />
                        <MainBtn text='הזמנה אונליין' link='#' isLight={true} />
                    </div>
                </div>
            </div>

            <Pros />

            <div className="servicesDiv">
                <h1 className="homeTitle">הובלת דירות ובתים</h1>
                <div className="splitDiv">
                    <div className="imagesSide">
                        <SideGallery
                            mainImg={moving}
                            header='שירותי הובלות'
                            galleryArr={galleryArr}
                        />
                    </div>

                    <div className="formSide">

                        <Form className="formBox">
                            <Row className="mb-3 row">
                                <Form.Group as={Col} className="mb-3" controlId="formBasicFrom">
                                    <Form.Label>מהיכן?</Form.Label>
                                    <Form.Control type="text" placeholder="באר שבע" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3 row">
                                <Form.Group as={Col} className="mb-3" controlId="formBasicDestination">
                                    <Form.Label>להיכן?</Form.Label>
                                    <Form.Control type="text" placeholder="נתניה" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3 row">
                                <Form.Group as={Col} className="mb-3" controlId="formBasicDate">
                                    <Form.Label>מתי?</Form.Label>
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
                                    text='שליחה'
                                    link='/transportfewitemsSuccess'
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

export default TransportGetBack;
