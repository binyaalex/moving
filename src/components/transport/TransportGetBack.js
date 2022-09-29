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
import PaymentSuccess from "../repeats/paymentSuccess/PaymentSuccess";

//images
import bannerImg from "../../assets/images/TII/Two-Movers-With-Box-On-Stairca-97352312.jpg";
// import mainImg from "../../assets/images/MT/4.jpg";
import galleryImg1 from "../../assets/images/MT/6.jpg";
import galleryImg2 from "../../assets/images/MT/GettyImages-135385164_pczbmr.jpg";
import galleryImg3 from "../../assets/images/MT/moving-checklist-2000-6ec63f4c4aa94bf9b9cb32f80bfd97a7.jpg";
import galleryImg4 from "../../assets/images/MT/6-Common-Mistakes-to-Avoid-When-Hiring-a-Moving-Company.jpeg";
import galleryImg5 from "../../assets/images/MT/AdobeStock_300477109-min_a23ba322c2da1cd76ade9dd3d3983ed1_2000.jpeg";
import galleryImg6 from "../../assets/images/MT/movers-collegeville.jpg";
import WhereAndWhen from '../repeats/whereAndWhen/WhereAndWhen';
import PersonalDetails from '../repeats/personalDetails/PersonalDetails';

const TransportGetBack = (props) => {

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
    const [send, setSend] = useState(false);
    const handleSend = () => {
        setSend(true)
    }
    return (
        <div className="transportFewItems">

            <div className="page_banner">
                <img src={bannerImg} />
                <div className="banner_content">
                    <div className="banner_title">
                        <h1>הזמנת הובלה בעזרת נציג</h1>
                        <p>נחזור אליכם בהקדם לאחר השארת פרטים</p>
                    </div>
                    <div className="btnDiv">
                        <MainBtn text='חזרה' link='/transportapartment' />
                        <MainBtn text='הזמנה אונליין' link='/transportonlineaddress' isLight={true} />
                    </div>
                </div>
            </div>

            <Pros />

            <div className="servicesDiv">
                <h1 className="homeTitle">פרטים לחזרה</h1>
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
                                <Form className="formBox">

                                    <WhereAndWhen />

                                    <Row className="mb-3 row">
                                        <Form.Label>סוג הובלה</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            style={{ marginRight: '12px', width: '32.2vw' }}
                                        >
                                            <option>. . .</option>
                                            <option value="2">2 חדרים</option>
                                            <option value="3">3 חדרים</option>
                                            <option value="4">4 חדרים</option>
                                            <option value="5">5 חדרים</option>
                                            <option value="6">6 חדרים</option>
                                            <option value="7">7 חדרים</option>
                                            <option value="penthouse">פנטהאוז</option>
                                            <option value="privet home">בית פרטי</option>
                                        </Form.Select>
                                    </Row>

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

export default TransportGetBack;
