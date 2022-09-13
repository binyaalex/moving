import "./OpenRound.css";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const OpenRound = (props) => {
  console.log(props)
  return (
    <Link to={props.link ? props.link : "#"} className="openRound">
      <Link to={props.aboutLink ? props.aboutLink : "#"}>
        <div className="imgAndText">
          <img
            className="openRoundImg"
            src={props.img ? props.img : "/images/doctors/doctor1.jpg"}
          />
          <div className="openRoundText">
            <h1 className="openRoundTextH">
              {props.firstName ? props.firstName : "חנה לוי"}
            </h1>
            <div className="openRoundTextP">
              {props.position ? props.position : "גינקולוג"}
            </div>
            <div className="starSection">
              <StarIcon className="starImg" />
              <p>
                {props.rating ? props.rating : "4.9"} (
                {props.review ? props.review : "1435 ביקורות"})
              </p>
            </div>
          </div>
        </div>
      </Link>
      {props.link ? (
        <div className="doctorsbtn">
          <Link className="about" to={props.aboutLink}>
            {props.textBtn1}
          </Link>
          <Link className="appointment" to={props.link}>
            {props.textBtn2}
          </Link>
        </div>
      ) : (
        <div className="doctorsbtn">
          <Link className="about" to={props.moving}>
            {props.textBtn1}
          </Link>
          <Link className="appointment" to={props.storing}>
            {props.textBtn2}
          </Link>
        </div>
      )}
    </Link>
  );
};

export default OpenRound;
