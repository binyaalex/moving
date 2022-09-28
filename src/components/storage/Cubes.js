import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const cubesArr = [
  { cubes: '10 קו"ב', desc: "דירת סטודיו קטנה" },
  { cubes: '15 קו"ב', desc: "דירת סטודיו בינונית" },
  { cubes: '20 קו"ב', desc: "דירת סטודיו גדולה" },
  { cubes: '25 קו"ב', desc: "דירת 2 חדרים קטנה" },
  { cubes: '30 קו"ב', desc: "דירת 2 חדרים בינונית" },
  { cubes: '35 קו"ב', desc: "דירת 2 חדרים גדולה" },
  { cubes: '40 קו"ב', desc: "דירת 3 חדרים קטנה" },
  { cubes: '45 קו"ב', desc: "דירת 3 חדרים בינונית" },
  { cubes: '50 קו"ב', desc: "דירת 3 חדרים גדולה" },
  { cubes: '55 קו"ב', desc: "דירת 4 חדרים קטנה" },
  { cubes: '60 קו"ב', desc: "דירת 4 חדרים בינונית" },
  { cubes: '65 קו"ב', desc: "דירת 4 חדרים גדולה" },
  { cubes: '70 קו"ב', desc: "דירת 5 חדרים קטנה" },
  { cubes: '75 קו"ב', desc: "דירת 5 חדרים בינונית" },
  { cubes: '80 קו"ב', desc: "דירת 5 חדרים גדולה" },
  { cubes: '85 קו"ב', desc: "דירת 6 חדרים קטנה" },
  { cubes: '90 קו"ב', desc: "דירת 6 חדרים בינונית" },
  { cubes: '95 קו"ב', desc: "דירת 6 חדרים גדולה" },
  { cubes: '100 קו"ב', desc: "וילה קטנה" },
  { cubes: '100-200 קו"ב', desc: "וילה גדולה" },
  { cubes: '200+ קו"ב', desc: "" }
];

const Cubes = () => {

  return (
    <>
      <Row className="mb-3 row">
        <ButtonGroup className="mb-3 cubeButtons">
          {cubesArr.map((cube, i) => (
            <ToggleButton
              key={i}
              id={`cube-${i}`}
              variant={i % 2 ? 'outline-secondary' : 'outline-secondary'}
              name={cube.name}
              value={cube.value}
              // checked={radioValue === cube.value}
              // onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="cube"
            >
              <h5>{cube.cubes}</h5>
              <p>{cube.desc}</p>
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Row>
    </>
  );
};

export default Cubes;
