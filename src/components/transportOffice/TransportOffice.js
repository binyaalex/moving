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
import bannerImg from "../../assets/images/MOF/shutterstock_313432601.jpg";
import office1 from "../../assets/images/MOF/boxes-in-a-new-building-with-a-laptop-and-paperwork-edit-845x684.jpg";
import office2 from "../../assets/images/MOF/office-relcoation-india.jpg";
import office3 from "../../assets/images/MOF/Fireman_movers-e1504247450706.jpg";
import office4 from "../../assets/images/MOF/The-Benefits-Of-Using-A-Moving-Company-When-Relocating-Your-Business-1280x720.jpeg";
import office5 from "../../assets/images/MOF/office.jpg";
import office6 from "../../assets/images/MOF/What-mistakes-should-I-avoid-when-moving-my-office.jpg";
import kitchen from "../../assets/images/TI-price/kitchen.jpg";
import closet2 from "../../assets/images/TI-price/Modern-MDF-Wooden-Bedroom-Clothes-Storage-2-Door-Wardrobe-HF-WB44-.jpg";
import closet3 from "../../assets/images/TI-price/wardrobe00021-03eee9cf-ba75-4a4b-b5a4-44bbc88e0862-809x809.jpg";
import closet4 from "../../assets/images/TI-price/spacewood-apex-engineered-wood-4-door-wardrobe-flipkart-img_cf71727f0d2ed4c0_9-0900-1-c8e2295.jpg";
import closet5 from "../../assets/images/TI-price/5023_AD174_G038_Bellezza.jpg";
import closet6 from "../../assets/images/TI-price/wardrobes-shown-in-pictures-are-all-300-cm-wardrobes-version-with-exterior-drawers.jpeg";
import ItemList from "../repeats/itemList/ItemList";

const TransportOffice = () => {

    const galleryArr = [
        {
            img: office1
        },
        {
            img: office2
        },
        {
            img: office3
        },
        {
            img: office4
        },
        {
            img: office5
        },
        {
            img: office6
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
            price: 400,
            img: closet2,
            link: '#',
        },
        {
            title: 'ארון 3 דלתות',
            price: 500,
            img: closet3,
            link: '#',
        },
        {
            title: 'ארון 4 דלתות',
            price: 600,
            img: closet4,
            link: '#',
        },
        {
            title: 'ארון 5 דלתות',
            price: 700,
            img: closet5,
            link: '#',
        },
        {
            title: 'ארון 6 דלתות',
            price: 800,
            img: closet6,
            link: '#',
        },
    ]

    return (
        <div className="transportFewItems">

            <div className="page_banner">
                <img src={bannerImg} />
                <div className="banner_content">
                    <div className="banner_title">
                        <h1>הובלת משרדים/מפעלים</h1>
                        <p>שירות בכל רחבי הארץ באמינות ודיוק ללא פשרות</p>
                    </div>
                    <div className="btnDiv">
                        <MainBtn text='חזרה' link='/transport' />
                        {/* <MainBtn text='דירות ובתים' link='#' isLight={true} /> */}
                    </div>
                </div>
            </div>

            <Pros />

            <div className="servicesDiv">
                <h1 className="homeTitle">הובלת משרדים/מפעלים</h1>
                <div className="splitDiv">
                    <div className="imagesSide">
                        <SideGallery
                            mainImg={bannerImg}
                            header='שירותי הובלות'
                            galleryArr={galleryArr}
                        />
                    </div>

                    <div className="formSide">
                        <h5 className="subTitle"> פריטים לדוגמה (200 - 1000 ₪)</h5>

                        <ItemList
                            itemsArr={itemsArr}
                            withPrice={true}
                        />


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
                                        as="textarea"
                                        placeholder="4 מיטות 3 ארונות..."
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

export default TransportOffice;
