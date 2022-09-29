import '../pay/addCard/AddCard.css'
import React, { useState } from "react";

//components
import MainBtn from '../repeats/mainBtn/MainBtn'
import Pros from "../pros/Pros";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";
import SideGallery from "../repeats/sideGallery/SideGallery";
import PaymentSuccess from "../repeats/paymentSuccess/PaymentSuccess";

//images
import bannerImg from "../../assets/images/TII/0d29cde6ea92435fc56819d5d1f3d55a.jpg";
// import mainImg from "../../assets/images/storing.jpg";
import galleryImg1 from "../../assets/images/PS/912_0126.jpg";
import galleryImg2 from "../../assets/images/PS/Boost_18_1101_149.jpg";
import galleryImg3 from "../../assets/images/PS/Stokado_Self_Storage1lr-768x512-jpg.jpg";
import galleryImg4 from "../../assets/images/PS/businessStorage.jpg";
import galleryImg5 from "../../assets/images/PS/maxresdefault.jpg";
import galleryImg6 from "../../assets/images/PS/privateStorage.jpg";
import cardTmg from "../../assets/images/icons/add_card.png";
import masterCard from "../../assets/images/icons/master_card.png";

const StoragePay = (props) => {

  // const [totalPrice, setTotalPrice] = useState(2000);
  const [send, setSend] = useState(false);
  const handleSend = () => {
    setSend(true)
  }

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
            <h1>הזמנת אחסנה אונליין</h1>
            <p>רק למלא פרטים ולשלוח</p>
          </div>
          <div className="btnDiv">
            <MainBtn text='חזרה' link='/storageSummery' />
            <MainBtn text='הזמנה בעזרת נציג' link='/getbackStorage' isLight={true} />
          </div>
        </div>
      </div>

      <Pros />

      <div className="servicesDiv">
        <h1 className="homeTitle">תשלום</h1>
        <div className="splitDiv">
          <div className="imagesSide">
            <SideGallery
              mainImg={props.mainLogo}
              header='שירותי אחסנה'
              galleryArr={galleryArr}
            />
          </div>

          <div className="formSide">
            {send
              ?
              <PaymentSuccess
                text1="תודה שבחרת בנו!"
                text2="אישור ההזמנה נשלח אליך למייל"
              />
              :
              <div className="add_card_pages">
                <div className="add_card_area">
                  <img src={cardTmg} className="add_card_img" alt="card-img" />
                  <h1 className="add_card_h1">אמצעי תשלום</h1>
                  <div className="add_card_text_area">
                    <div className="add_card_number">
                      <img
                        src={masterCard}
                        className="master_card_img"
                        alt="master-card"
                      />
                      <h1 className="add_card_number_h1">מספר כרטיס</h1>
                      <input
                        type={"text"}
                        className="add_card_number_input"
                        placeholder="9875 5214 2214 9856"
                      />
                    </div>
                    <div className="add_expiry_cvv">
                      <div className="add_cvv">
                        <h1 className="add_cvv_h1">CVC/CVV</h1>
                        <input
                          type={"text"}
                          className="add_cvv_input"
                          placeholder="***"
                        />
                      </div>
                      <div className="add_expiry_date">
                        <h1 className="add_expiry_date_h1">תאריך תפוגה</h1>
                        <input
                          type={"text"}
                          className="add_expiry_date_input"
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>
                    <div className="add_card_name">
                      <h1 className="add_card_name_h1">השם שעל הכרטיס</h1>
                      <input
                        type={"text"}
                        className="add_card_name_input"
                        placeholder="ישראל ישראלי"
                      />
                    </div>
                  </div>
                  <div className="contact-btnDiv send">
                    <MainBtn text='תשלום' link='#' handleSend={handleSend} />
                  </div>
                </div>
              </div>
            }
          </div>

        </div>
      </div>

      <Reviews />
      <Footer />

    </div>
  );
};

export default StoragePay;
