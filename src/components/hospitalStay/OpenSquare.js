import "./OpenSquare.css";
import { Link } from "react-router-dom";

const OpenSquare = (props) => {
  return (
    <div className="openSquare">
      <div className="imgAndText">
        <Link className="" to={props.link}>
          <a href="#" draggable="false" className="button link report">
            <div>צפה</div>
          </a>
        </Link>
        <div className="openSquareText">
          <h1 className="openSquareTextH">{props.date}</h1>
          <div className="openSquareTextP">{props.cleaner}</div>
        </div>
        <img className="openSquareImg" src={props.img} />

      </div>
    </div>
  );
};

export default OpenSquare;
