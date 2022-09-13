const NotificationsSquare = ({
  img,
  massageBeforeBold,
  bold,
  massageAfterBold,
  date,
  btn,
  i,
}) => {
  const headerClassName = `NotificationsTextMassage NotificationsTextMassage${i}`;
  const undisplay = (e) => {
    const notification = e.target.parentElement.parentElement.parentElement;
    notification.style.display = "none";
    const headNotifications = document.querySelectorAll(
      ".headNotificationsSquare"
    );
    const headNotificationsArr = [];
    for (let i = headNotifications.length - 1; i >= 0; i--) {
      headNotificationsArr.push(headNotifications[i]);
    }
    let empty = headNotificationsArr.every((el) => el.style.display === "none");
    if (empty) {
      const notificationsEmpty = document.querySelector(".notificationsEmpty");
      notificationsEmpty.style.display = "block";
    }
  };

  return (
    <section className="headNotificationsSquare NotificationsSquare">
      <div className="NotificationsImgDiv">
        <img className="NotificationsImg" src={img} alt="notImg" />
      </div>
      <div className="NotificationsTextDiv">
        <h1 className={headerClassName}>
          {massageBeforeBold}
          <span className="NotificationsTextMassageSpan">{bold} </span>
          {massageAfterBold}
        </h1>
        <div className="NotificationsDateAndBtn">
          <div className="NotificationsTextDate">{date}</div>
          <div
            onClick={undisplay}
            className="NotificationsBtn"
            id="headNotificationsBtn"
          >
            Ok
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSquare;
