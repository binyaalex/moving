import DayOption from "./DayOption";

const ThisWeek = () => {
  const thisWeekArr = [
    {
      day: "שבת",
      date: "20",
    },
    {
      day: "שישי",
      date: "19",
    },
    {
      day: "חמישי",
      date: "18",
    },
    {
      day: "רביעי",
      date: "17",
    },
    {
      day: "שלישי",
      date: "16",
    },
    {
      day: "שני",
      date: "15",
    },
    {
      day: "ראשון",
      date: "14",
    },
  ];

  return (
    <div className="dateSelectorOptionContainer">
      {thisWeekArr.map((el, i) => {
        return <DayOption day={el.day} date={el.date} i={i} key={i} />;
      })}
    </div>
  );
};

export default ThisWeek;
