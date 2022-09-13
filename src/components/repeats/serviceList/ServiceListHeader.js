import "./ServiceListHeader.css";
import { Link } from "react-router-dom";

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ServiceListHeader = ({ text, text2, link }) => {
  return (
    <div
      className="service_heading d-flex align-center justify-between"
      id="serviceListHeader"
    >
      <Link to={link}>
        <KeyboardDoubleArrowRightIcon />
        לכל השירותים
      </Link>
      <h3>{text}</h3>
    </div>
  );
};

export default ServiceListHeader;
