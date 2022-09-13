import React from 'react';
import "./ContactUs.css"
import PersonalInfo from '../generalComponents/PersonalInfo';
import { BsTelephone } from "react-icons/bs";
function ContactUs(props) {
    return (
      <>
        <div className="contact-us-container">
          <div className="number-container">
            <h1 className="contact-number-title">ליצירת קשר</h1>
            <div className="contact-icon-container">
              <h4>
                <a style={{ color: "var(--primary)" }} href="tel:03-7777777">
                  03-7777777
                </a>
              </h4>
              <a style={{ color: "var(--primary)" }} href="tel:03-7777777">
                <BsTelephone className="telephone-icon" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default ContactUs;