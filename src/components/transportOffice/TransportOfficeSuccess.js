//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import SideGallery from "../repeats/sideGallery/SideGallery";
import PaymentSuccess from '../repeats/paymentSuccess/PaymentSuccess';

//images
import bannerImg from "../../assets/images/MOF/shutterstock_313432601.jpg";
import office1 from "../../assets/images/MOF/boxes-in-a-new-building-with-a-laptop-and-paperwork-edit-845x684.jpg";
import office2 from "../../assets/images/MOF/office-relcoation-india.jpg";
import office3 from "../../assets/images/MOF/Fireman_movers-e1504247450706.jpg";
import office4 from "../../assets/images/MOF/The-Benefits-Of-Using-A-Moving-Company-When-Relocating-Your-Business-1280x720.jpeg";
import office5 from "../../assets/images/MOF/office.jpg";
import office6 from "../../assets/images/MOF/What-mistakes-should-I-avoid-when-moving-my-office.jpg";

const TransportOfficeSuccess = () => {

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
                        <MainBtn text='חזרה לדף הבית' link='/' />
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
                        
                        <PaymentSuccess
                            text1="תודה שבחרת בנו!"
                            text2="נציג יחזור אליך בהקדם"
                        />

                    </div>

                </div>
            </div>

            <Reviews />
            <Footer />

        </div>
    );
};

export default TransportOfficeSuccess;
