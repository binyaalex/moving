// import './FactoryOrOffice.css'
import React from 'react';
import { Link } from "react-router-dom";

function MainBtn (props) {

    return (
        <div className="filter-btn-div">
            <Link to={props.link} className="filter-btn">
                {props.text}
            </Link>
        </div>
    );
}

export default MainBtn;