import "./Notifications.css";
import Head from "../../repeats/head/Head";
import Footer from "../../repeats/footer/Footer";
import NotificationsSquare from "./NotificationsSquare";

import avi from '../../../assets/images/specialists/specialists5.jpg'
import yael from '../../../assets/images/specialists/specialists2.jpg'
import noam from '../../../assets/images/specialists/specialists6.jpg'

const Notifications = () => {

  const notificationsArr = [
    {
      img: avi,
      massageBeforeBold: "הזמנת בדיקת חשמל של ",
      bold: "אבי דוידוף",
      massageAfterBold: "היום ב11:00",
      date: "11:00 ,היום",
      formatDate: "16 Mar 2022 11:00:00 GMT",
      btn: "/images/notifications/okBtn.png",
    },
    {
      img: yael,
      massageBeforeBold: "הזמנת נקיון יסודי של  ",
      bold: "יעל כהן",
      massageAfterBold: "",
      date: "12:30 ,15 מרץ 2022",
      formatDate: "15 Mar 2022 11:00:00 GMT",
      btn: "/images/notifications/okBtn.png",
    },
    {
      img: noam,
      massageBeforeBold: "נקיון הכניסה השבועי יבוצע על ידי",
      bold: "נעם מאיר",
      massageAfterBold: "",
      date: "08:10 ,14 מרץ 2022",
      formatDate: "14 Mar 2022 08:10:00 GMT",
      btn: "/images/notifications/doneBtn.png",
    },
  ]

  notificationsArr.sort(function (a, b) {
    return new Date(b.formatDate) - new Date(a.formatDate);
  });

  return (
    <div className="PageDad">
      <div className="page">
        <Head text="התראות" />
        <main className="notifications">
          {notificationsArr.map((el, i) => {
            return (
              <NotificationsSquare
                img={el.img}
                massageBeforeBold={el.massageBeforeBold}
                bold={el.bold}
                massageAfterBold={el.massageAfterBold}
                date={el.date}
                btn={el.btn}
                i={i}
                key={i}
              />
            );
          })}
        </main>
      </div>
      {/* <Footer page='notifications' /> */}
    </div>
  );
};

export default Notifications;
