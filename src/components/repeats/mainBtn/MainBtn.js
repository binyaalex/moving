// import './FactoryOrOffice.css'
import React from 'react';
import { Link } from "react-router-dom";
import './MainBtn.css';
function MainBtn(props) {

    return (
        <div className="filter-btn-div">
            <Link to={props.link ? props.link : '#'} className={props.isLight ? "filter-btn lightBtn" : "filter-btn"} onClick={props.handleClose ? props.handleClose : props.handleSend}>
                {props.text}
            </Link>
        </div>
    );
}

export default MainBtn;