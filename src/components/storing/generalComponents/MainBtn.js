// import './FactoryOrOffice.css'
import React from 'react';
import { Link } from "react-router-dom";
import './MainBtn.css';
function MainBtn(props) {

    return (
        <div className="filter-btn-div">
            <Link to={props.link} className={props.isLight ? "filter-btn lightBtn" : "filter-btn"}>
                {props.text}
            </Link>
        </div>
    );
}

export default MainBtn;