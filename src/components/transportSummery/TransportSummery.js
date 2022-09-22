import './TransportSummery.css'
import { Link } from "react-router-dom";

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
import bannerImg from "../../assets/images/TII/0d29cde6ea92435fc56819d5d1f3d55a.jpg";
import mainImg from "../../assets/images/MT/4.jpg";
import galleryImg1 from "../../assets/images/MT/6.jpg";
import galleryImg2 from "../../assets/images/MT/GettyImages-135385164_pczbmr.jpg";
import galleryImg3 from "../../assets/images/MT/moving-checklist-2000-6ec63f4c4aa94bf9b9cb32f80bfd97a7.jpg";
import galleryImg4 from "../../assets/images/MT/6-Common-Mistakes-to-Avoid-When-Hiring-a-Moving-Company.jpeg";
import galleryImg5 from "../../assets/images/MT/AdobeStock_300477109-min_a23ba322c2da1cd76ade9dd3d3983ed1_2000.jpeg";
import galleryImg6 from "../../assets/images/MT/movers-collegeville.jpg";
import AddMoving from '../storage/AddMoving';

const TransportSummery = () => {

  const items = ['מקרר', 'מכונת כביסה', 'ארון בגדים', 'מקרר']

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
                            mainImg={mainImg}
                            header='שירותי הובלות'
                            galleryArr={galleryArr}
                        />
                    </div>

                    <div className="formSide">

                        <Form className="formBox">
                            <div className="order-summary-container">
                                <div className="order-personaldetails">
                                    <p><strong>שם מלא:</strong> ישראלה ישראלי</p>
                                    <p>שעת תחילה הובלה: 09:00-12:00</p>
                                    <p>תאריך מעבר: 24/09/22</p>
                                </div>
                                <div className="present-address">
                                    <h5 className="address-title"><strong> כתובת נוכחית:</strong> נתניה</h5>
                                    <p> קומה: 2 </p>
                                    <p> מעלית: 4 נוסעים</p>
                                    <p> שביל כניסה חריג: אין</p>
                                    <p> מנוף: לא</p>
                                </div>
                                <div className="future-address">
                                    <h5 className="address-title"><strong> כתובת חדשה:</strong> פתח תקווה</h5>
                                    <p> קומה: 2 </p>
                                    <p> מעלית: 4 נוסעים</p>
                                    <p> שביל כניסה חריג: אין</p>
                                    <p> מנוף: לא</p>
                                </div>
                                <div className="chosen-items-list">
                                <strong>פריטים שבחרתי:</strong>
                                <ul>
                                    {items.map((item, idx) => {
                                    const itemQuantity = items.filter(
                                        (item2) => item2 === item
                                    ).length;
                                    return (
                                        <li key={idx} className="li-item">
                                        {itemQuantity > 0 ? `${item}` : `${item} X ${itemQuantity}`}
                                        </li>
                                    );
                                    })}
                                </ul>{" "}
                                </div>
                                
                                <div className="contact-btnDiv send">
                                    <MainBtn text='הוספת/הסרת פריטים' link='#' />
                                </div>

                                <div className=" text-success moving-total-price">
                                מחיר הובלה כולל מע''מ: 2000 ש''ח
                                </div>
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

export default TransportSummery;
