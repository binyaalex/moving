import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../../repeats/head/Head";
import PaidServiceSqaure from "../../home/paidServiceSqaure/PaidServiceSqaure";
import { BsFillHouseFill } from "react-icons/bs";
import AddressInput from '../../getMoving/addressSection/AddressInput';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { EightK } from "@mui/icons-material";
import './Cubes.css';

const Cubes = () => {

  // const [isMoving, setIsMoving] = useState(false);
  // const [chosenCube, setChosenCube] = useState()

  const [alignment, setAlignment] = useState();

  // const movingHandle = () => {
  //   setIsMoving(document.querySelector('.movingCheckInput').checked)
  // }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    // setChosenCube(newAlignment)
  };

  const cubesArr = [
    {
      cubes: '10 קו"ב',
      desc: "דירת סטודיו קטנה"
    },
    {
      cubes: '15 קו"ב',
      desc: "דירת סטודיו בינונית"
    },
    {
      cubes: '20 קו"ב',
      desc: "דירת סטודיו גדולה"
    },
    {
      cubes: '25 קו"ב',
      desc: "דירת 2 חדרים קטנה"
    },
    {
      cubes: '30 קו"ב',
      desc: "דירת 2 חדרים בינונית"
    },
    {
      cubes: '35 קו"ב',
      desc: "דירת 2 חדרים גדולה"
    },
    {
      cubes: '40 קו"ב',
      desc: "דירת 3 חדרים קטנה"
    },
    {
      cubes: '45 קו"ב',
      desc: "דירת 3 חדרים בינונית"
    },
    {
      cubes: '50 קו"ב',
      desc: "דירת 3 חדרים גדולה"
    },
    {
      cubes: '55 קו"ב',
      desc: "דירת 4 חדרים קטנה"
    },
    {
      cubes: '60 קו"ב',
      desc: "דירת 4 חדרים בינונית"
    },
    {
      cubes: '65 קו"ב',
      desc: "דירת 4 חדרים גדולה"
    },
    {
      cubes: '70 קו"ב',
      desc: "דירת 5 חדרים קטנה"
    },
    {
      cubes: '75 קו"ב',
      desc: "דירת 5 חדרים בינונית"
    },
    {
      cubes: '80 קו"ב',
      desc: "דירת 5 חדרים גדולה"
    },
    {
      cubes: '85 קו"ב',
      desc: "דירת 6 חדרים קטנה"
    },
    {
      cubes: '90 קו"ב',
      desc: "דירת 6 חדרים בינונית"
    },
    {
      cubes: '95 קו"ב',
      desc: "דירת 6 חדרים גדולה"
    },
    {
      cubes: '100 קו"ב',
      desc: "וילה קטנה"
    },
    {
      cubes: '100-200 קו"ב',
      desc: "וילה גדולה"
    },
    {
      cubes: '200+ קו"ב',
      desc: ""
    }
  ];


  return (
    <>
      <div className="">

        {/* <main className="homePage rtl pick"> */}
        {/* <section className="paidServicesArea"> */}

        <div className='cubeWrapper'>
          <ToggleButtonGroup
            color="success"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className="cubeButtons"
          >
            {cubesArr.map((el, i) => {
              return (
                <ToggleButton value={el.cubes} className='cubeToggle'>
                  <div className='buttonDiv cubeButton'>
                    <h3>{el.cubes}</h3>
                    <p>{el.desc} </p>
                  </div>
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>

        </div>
      </div>
      {/* </section> */}
      {/* </main> */}

    </>
  );
};

export default Cubes;