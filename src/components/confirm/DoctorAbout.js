// import './OpenRound.css';
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const DoctorAbout = ({ img, header, text, link }) => {
  return (
    <div className="openRound">
      <div className="imgAndText">
        <img className="openRoundImg" src={img} alt="aa" />
        <div className="openRoundText">
          <div className="openRoundTextH">{header}</div>
          <div className="openRoundTextP">{text}</div>
          <div className="starSection">
            <StarIcon className="starImg" />
            <p>5.0 (1435 ביקורות)</p>
          </div>
        </div>
      </div>
      <div className="doctorsbtn">
        <Link className="about" to={"/aboutspesialist"}>
          אודות
        </Link>
      </div>
    </div>
  );
};

export default DoctorAbout;
