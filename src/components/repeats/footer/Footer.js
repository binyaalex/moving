import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GrayIcon from "./GrayIcon";
import "./Footer.css";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import chatIcon from '../../../assets/images/footer/chat.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

// import { useTranslation } from "react-i18next";


//This is for chatbot
// import ChatBot from "../../chat/ChatBot";

const containerArr = [
  {
    img: <LocalGroceryStoreOutlinedIcon />,
    link: "/marketplace",
  },
  {
    img: <NotificationsNoneIcon />,
    link: "/notifications",
  },
  {
    img: <PersonOutlineIcon />,
    link: "/myprofile",
  },
];

const Footer = () => {
  let url = window.location.pathname
  console.log(url);
  let color = 'var(--secondry)'
  if (url === '/') {
    color = 'var(--primary)'
  }


  return (
    <div>
      <footer className="footer">
        <div className="sosAndGray">
          <Link to='/' className="homeIconLink" style={{background: color}} >
            {/* <img className="sos" src="/images/footer/home.png" /> */}
            <HomeOutlinedIcon />
          </Link>
          <div className="grayIcons">
            {containerArr.map((el, i) => {
              return (
                  <GrayIcon img={el.img} i={i} url={url} key={i} link={el.link} />
              );
            })}
          </div>
        </div>
        <div class="mainChat">
          <img class="chat" src={chatIcon}/>
        </div>
{/* 
        <ChatBot>

        </ChatBot> */}
      </footer>
    </div>
  );
}

export default Footer

