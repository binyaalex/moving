const DayOption = ({ day, date, i }) => {
  let divClassName = "dateSelectorOption";
  let dayClassName = "dateSelectorOptionsLable";
  let dateClassName = "dateOptions";
  if (i === 4) {
    divClassName = "dateSelectorOption dateselectoroptionActive";
    dayClassName = "dateSelectorOptionsLable dateSelectorOptionsLableActive";
    dateClassName = "dateOptions dateOptionsActive";
  }

  const pick = (e) => {
    const newChoosen = e.target.parentElement;
    const oldChoosen = document.querySelector(".dateselectoroptionActive");
    oldChoosen.classList.remove("dateselectoroptionActive");
    oldChoosen.firstChild.classList.remove("dateSelectorOptionsLableActive");
    oldChoosen.lastChild.classList.remove("dateOptionsActive");
    newChoosen.classList.add("dateselectoroptionActive");
    newChoosen.firstChild.classList.add("dateSelectorOptionsLableActive");
    newChoosen.lastChild.classList.add("dateOptionsActive");
  };

  return (
    <div className={divClassName}>
      <label onClick={pick} htmlFor="dateoptions" className={dayClassName}>
        {day}
      </label>
      {/*<br />*/}
      <div onClick={pick} className={dateClassName}>
        {date}
      </div>
    </div>
  );
};

export default DayOption;
