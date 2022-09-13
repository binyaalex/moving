import "./OpenSquare.css";
import { Link } from "react-router-dom";

const OpenSquare = (props) => {
  return (
    <div className="openSquare">
      <div className="imgAndText">
        <img className="openSquareImg" src={props.img} />
        <div className="openSquareText">
          <h1 className="openSquareTextH">{props.header}</h1>
          <div className="openSquareTextP">{props.text}</div>
        </div>
      </div>
      <Link className="" to={props.link}>
        <img className="openSquareBtn" src="/images/opensquare/openHeb.png" />
      </Link>
    </div>
  );
};

export default OpenSquare;
