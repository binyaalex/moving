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

//images
import bannerImg from "../../assets/images/TII/0d29cde6ea92435fc56819d5d1f3d55a.jpg";
// import mainImg from "../../assets/images/MT/4.jpg";
import galleryImg1 from "../../assets/images/MT/6.jpg";
import galleryImg2 from "../../assets/images/MT/GettyImages-135385164_pczbmr.jpg";
import galleryImg3 from "../../assets/images/MT/moving-checklist-2000-6ec63f4c4aa94bf9b9cb32f80bfd97a7.jpg";
import galleryImg4 from "../../assets/images/MT/6-Common-Mistakes-to-Avoid-When-Hiring-a-Moving-Company.jpeg";
import galleryImg5 from "../../assets/images/MT/AdobeStock_300477109-min_a23ba322c2da1cd76ade9dd3d3983ed1_2000.jpeg";
import galleryImg6 from "../../assets/images/MT/movers-collegeville.jpg";
import AddMoving from '../storage/AddMoving';

const TransportOnlineAddress = (props) => {

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
                <img src={bannerImg} />
                <div className="banner_content">
                    <div className="banner_title">
                        <h1>הזמנת הובלה אונליין</h1>
                        <p>רק למלא פרטים ולשלוח</p>
                    </div>
                    <div className="btnDiv">
                        <MainBtn text='חזרה' link='/transportapartment' />
                        <MainBtn text='הזמנה בעזרת נציג' link='/transportgetback' isLight={true} />
                    </div>
                </div>
            </div>

            <Pros />

            <div className="servicesDiv">
                <h1 className="homeTitle">פרטי הובלה</h1>
                <div className="splitDiv">
                    <div className="imagesSide">
                        <SideGallery
                            mainImg={props.mainLogo}
                            header='שירותי הובלות'
                            galleryArr={galleryArr}
                        />
                    </div>

                    <div className="formSide">

                        <Form className="formBox">

                            <AddMoving header='מהיכן?' withKindOfMoving={true} />

                            <AddMoving header='להיכן?' withKindOfMoving={false} />

                            <h3 className="subTitle">מתי?</h3>

                            <Row className="mb-3 row">
                                <Form.Group as={Col} className="mb-3" controlId="formBasicDate">
                                    <Form.Label>תאריך</Form.Label>
                                    <Form.Control type="date" placeholder="" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 row">
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>שעת תחילת הובלה</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1" selected>
                                            06:00-09:00
                                        </option>
                                        <option value="2">09:00-12:00</option>
                                        <option value="3">12:00-15:00</option>
                                        <option value="4">15:00-18:00</option>
                                        <option value="5">18:00-21:00</option>
                                    </Form.Select>
                                    <Form.Check
                                        reverse
                                        type='checkbox'
                                        label='גמיש'
                                        variant="warning"
                                    />
                                </Form.Group>
                            </Row>

                            <div className="contact-btnDiv send">
                                <MainBtn text='לבחירת פריטים' link='/transportonlineitems' />
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

export default TransportOnlineAddress;
