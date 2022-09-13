import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

function ChoosePayMethod({ text1, text2, link1, link2 }) {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <Link to={link1}>
        <ToggleButton style={{ color: "black" }} value="payNow">
          {text1}        </ToggleButton>
      </Link>
      <Link to={link2}>
        <ToggleButton style={{ color: "black" }} value="payAtTheEnd">
          {text2}        </ToggleButton>
      </Link>
    </ToggleButtonGroup>
  );
}

export default ChoosePayMethod;
