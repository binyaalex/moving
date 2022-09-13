import React from 'react';
import "./Welcome.css"
import CleanImg from "../.././assets/images/homepage/cleanService.png";
import PlumbingImg from "../.././assets/images/homepage/plumbing.png";
import ElectricalImg from "../.././assets/images/homepage/electricalService.png";
import SecurityImg from "../.././assets/images/homepage/security.png";
import RenovationImg from "../.././assets/images/homepage/renovation.png";
import ElevatorImg from "../.././assets/images/homepage/elevator.png";
import Service from './Service';
import Customer from './Customer';


function Welcome(props) {
    return (
      <div className="Welcome-description-container">
        {/* <div className="welcome-text-container"> */}
        <h2 className="welcome-text-title">
          הכירו את השירות שנותן לכם הכל במקום אחד
        </h2>
        <h4 className="sub-title">
          <div>
            אנחנו <span style={{ fontWeight: "bold" }}>Home Service</span> כאן
            בשביל להנפיק לכם שירות קל ויעיל בכל מה שנחוץ לכם לתחזוקת הבניין בו
            אתם גרים.{" "}
          </div>
        </h4>
        <section className="long-description">
          צריכים לסדר את האינסטלציה? צריכים לנקות את הכניסה? אנחנו כאן בשביל
          לספק לכם את השירותים הללו ועוד מגוון רחב של שירותים שונים לנוחיותכם.
          וכל זה? <span style={{ fontWeight: "bold" }}>בלחיצת כפתור!</span>{" "}
          תוכלו לבחור את השירות הנדרש, לתזמן אותו לזמן שנוח לכם, לדבר איתו
          בלייב, לקבל המלצות על נותן השירות ואף לדרג אותו בעצמכם. אהבתם? תוכלו
          לשמור על קשר אתו לפעמים הבאות! רוצים לדעת מתי פינוי הזבל מהשכונה שלכם,
          לחיצת כפתור וכל המידע שאתם צריכים לפניכם!
        </section>
        <div className='services-titleAndIcons' >
          <h4 className="services-title">הצטרפו ותוכלו להנות מכלל השירותים :</h4>
          <section className="services">
            <Service src={CleanImg} title={"ניקיון"} />
            <Service src={PlumbingImg} title={"אינסטלציה"} />
            <Service src={ElectricalImg} title={"חשמל"} />
            <Service src={SecurityImg} title={"אבטחה"} />
            <Service src={RenovationImg} title={"שיפוץ"} />
            <Service src={ElevatorImg} title={"תחזוקת מעליות"} />
          </section>
        </div>
        <section className="customers">
          <Customer customer={"ספקים"} />
          <Customer customer={"חברות להחזקת מבנים"} />
          <Customer customer={"וועד בית"} />
          <Customer customer={"מועדון לקוחות"} />
        </section>
        <button className='upgradeBtn btn btn-secondary sm-w-50 m-auto p-2'>!שדרגו את הבניין שלכם</button>
        {/* </div> */}
      </div>
    );
}

export default Welcome;