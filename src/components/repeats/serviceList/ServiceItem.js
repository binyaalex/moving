import { Link } from "react-router-dom";
import heart from "../../../assets/images/servicesList/heart.png";

const ServiceItem = ({ header, price, par, img, link }) => {
  return (
    <Link to={link}>
      <div className="service_box row-reverse">
        <div className="box_con">
          <div className="box_heading d-flex align-center justify-between row-reverse">
            <Link to={"#"}>
              <img src={heart} alt="hert" />
            </Link>
            <h4>{header}</h4>
          </div>
          <div className="price d-flex align-center justify-between row-reverse">
            <span>{price}</span>
            <p style={{ textAlign: "initial" }}>{par}</p>
          </div>
        </div>
        <div className="box_img">
          <img id="serviceImg" src={img} alt="Online" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
