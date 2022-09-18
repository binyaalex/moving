import "./SpecialistsList.css";
import React from "react";
import { Link } from "react-router-dom";
import SpecialistsListSqaure from "./specialistsListSquare/SpecialistsListSqaure";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const SpecialistsList = () => {
  return (
    <div className="specialistsListSec">
      <div className="specialistsArea specialistsAreaRtl">
          <div className="storingType_h1_wrapper">
            <h1 className="storingType_h1 storingType_h1">בין לקוחותינו</h1>
          </div>
        <div className="row specialistsBoxArea">
          <SpecialistsListSqaure />
        </div>
      </div>
    </div>
  );
};

export default SpecialistsList;

