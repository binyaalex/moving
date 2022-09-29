import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillPhone } from 'react-icons/ai';

const Btn = (props) => {
  const url = useNavigate();
  const [className, setclassName] = useState("navBtn");

  useEffect(() => {
    const index = document.querySelector(".navBtn").baseURI.lastIndexOf("/");
    const page = document.querySelector(".navBtn").baseURI.slice(index + 1);
    if (page === props.link) {
      setclassName("navBtn thisPage");
    } else {
      setclassName("navBtn");
    }
  }, [url]); // eslint-disable-line

  return (
    <div className="navBtnDiv nav">
      {/* {props.mobile ? (
        <Link
          to={props.link}
          className={className}
          onClick={
            props.const === "marketplace"
              ? () => {
                  props.openSideBarComponent("marketplace");
                  props.setOpenMobileMenu(false);
                }
              : () => props.setOpenMobileMenu(false)
          }
        >
          {props.text}
        </Link>
      ) : (
        <Link
          to={props.link}
          className={className}
          onClick={
            props.const === "marketplace"
              ? () => props.openSideBarComponent("marketplace")
              : ""
          }
        >
          {props.text}
        </Link>
      )} */}
      {props.tel ?
        (<>
          <a href={`tel:${props.tel}`} className={className}
          >
            {props.tel}
          </a><AiFillPhone
            fill="white" />
        </>
        ) : (
          <Link
            to={props.link}
            className={className}
            onClick={
              props.const === "marketplace"
                ? () => props.openSideBarComponent("marketplace")
                : ""
            }
          >
            {props.text}
          </Link>
        )}

    </div>
  );
};

export default Btn;
