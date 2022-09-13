import "./SpecialistsList.css";
import React from "react";
import { Link } from "react-router-dom";
import SpecialistsListSqaure from "./specialistsListSquare/SpecialistsListSqaure";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const SpecialistsList = () => {
  return (
    <div className="specialistsListSec">
        <div className="specialistsArea">
          <div className="specialistsHeading">
            <Link to={"/specialists"} className="downArrow">
              <KeyboardDoubleArrowDownIcon />
              לכל המומחים
            </Link>
            <h3>המומחים שלנו</h3>
          </div>
          <div className="row specialistsBoxArea">
            <SpecialistsListSqaure />
          </div>
      </div>
    </div>
  );
};

export default SpecialistsList;

