import React, { useState } from "react";
// bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import SideGallery from "../repeats/sideGallery/SideGallery";
import SimpleItemList from "../repeats/itemList/SimpleItemList";
import WhereAndWhen from "../repeats/whereAndWhen/WhereAndWhen";
import PersonalDetails from "../repeats/personalDetails/PersonalDetails";
import PaymentSuccess from "../repeats/paymentSuccess/PaymentSuccess";

//images
import bannerImg from "../../assets/images/MOF/shutterstock_313432601.jpg";
import office1 from "../../assets/images/MOF/boxes-in-a-new-building-with-a-laptop-and-paperwork-edit-845x684.jpg";
import office2 from "../../assets/images/MOF/office-relcoation-india.jpg";
import office3 from "../../assets/images/MOF/Fireman_movers-e1504247450706.jpg";
import office4 from "../../assets/images/MOF/The-Benefits-Of-Using-A-Moving-Company-When-Relocating-Your-Business-1280x720.jpeg";
import office5 from "../../assets/images/MOF/office.jpg";
import office6 from "../../assets/images/MOF/What-mistakes-should-I-avoid-when-moving-my-office.jpg";
import table from "../../assets/images/MFO-price/Eco-1-Kaleidoscope-scaled.jpg";
import closet from "../../assets/images/MFO-price/Shkaf-ofis-1100x619.jpg";
import computers from "../../assets/images/MFO-price/CORP5-min-800x480.jpg";
import machines from "../../assets/images/MFO-price/pishevoe-oborudovanie.jpeg";
import vehicles from "../../assets/images/MFO-price/15_03_02-tekhnologicheskie-mashiny-i-oborudovanie.jpg";

const TransportOffice = (props) => {
    const [send, setSend] = useState(false);
    const handleSend = () => {
        setSend(true)
    }
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
            title: 'שולחן',
            price: 300,
            img: table,
            link: '#',
        },
        {
            title: 'ארון',
            price: 400,
            img: closet,
            link: '#',
        },
        {
            title: 'מחשוב',
            price: 500,
            img: computers,
            link: '#',
        },
        {
            title: 'מיכון',
            price: 600,
            img: machines,
            link: '#',
        },
        {
            title: 'רכבים',
            price: 700,
            img: vehicles,
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
                            mainImg={props.mainLogo}
                            header='שירותי הובלות'
                            galleryArr={galleryArr}
                        />
                    </div>

                    <div className="formSide">
                        {send
                            ?
                            <PaymentSuccess
                                text1="תודה שבחרת בנו!"
                                text2="נציג יחזור אליך בהקדם"
                            />
                            :
                            <>
                                <h5 className="subTitle"> פריטים לדוגמה (200 - 1000 ₪)</h5>

                                <SimpleItemList
                                    itemsArr={itemsArr}
                                    withPrice={true}
                                />


                                <Form className="formBox">

                                    <WhereAndWhen />

                                    <Row className="mb-3 row">
                                        <Form.Label>סוג הובלה</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            style={{ marginRight: '12px', width: '32.2vw' }}
                                        >
                                            <option>. . .</option>
                                            <option value="office">משרד</option>
                                            <option value="factory">מפעל</option>
                                        </Form.Select>
                                    </Row>

                                    {/* <Row className="mb-3 row">
                                <Form.Group as={Col} className="mb-3" controlId="formBasicFile">
                                    <Form.Label>העלאת תמונות או וידאו (לא חובה)</Form.Label>
                                    <Form.Control type="file" placeholder="בחר קובץ" />
                                </Form.Group>
                            </Row> */}

                                    <PersonalDetails />

                                    <div className="contact-btnDiv row">
                                        <MainBtn
                                            text='שליחה'
                                            handleSend={handleSend}
                                        />
                                    </div>
                                </Form>
                            </>
                        }


                    </div>
                </div>
            </div>

            <Reviews />
            <Footer />

        </div>
    );
};

export default TransportOffice;
