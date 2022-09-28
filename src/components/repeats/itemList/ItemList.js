import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ItemList.css';
import Box from './Box';
import Modal from 'react-bootstrap/Modal';
import Item from './Item';
import MainBtn from '../mainBtn/MainBtn'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillCloseCircle } from 'react-icons/ai';
//images
import closet from "../../../assets/images/moving/closet.jpg";
import sofa from "../../../assets/images/moving/sofa.jpg";
import bed from "../../../assets/images/moving/bed.jpg";
import wm from "../../../assets/images/moving/wm.jpg";
import table from "../../../assets/images/moving/table.jpg";
import tv from "../../../assets/images/moving/tv.jpg";
import dresser from "../../../assets/images/moving/dresser.jpg";
import chair from "../../../assets/images/moving/chair.jpg";
import stuff from "../../../assets/images/moving/stuff.jpg";
import kitchen from '../../../assets/images/moving/kitchen.jpg';
import closet2 from '../../../assets/images/moving/closet2.jpg';
import closet3 from '../../../assets/images/moving/closet3.jpg';
import closet4 from '../../../assets/images/moving/closet4.jpg';
import closet5 from '../../../assets/images/moving/closet5.jpg';
import closet6 from '../../../assets/images/moving/closet6.jpg';

const closetArr = [
  {
    img: kitchen,
    title: "אי מטבח",
  },
  {
    img: closet2,
    title: "ארון 2 דלתות",
  },
  {
    img: closet3,
    title: "ארון 3 דלתות",
  },
  {
    img: closet4,
    title: "ארון 4 דלתות",
  },
  {
    img: closet5,
    title: "ארון 5 דלתות",
  },
  {
    img: closet6,
    title: "ארון 6 דלתות",
  },
];

const categoryArr = [
  {
    img: closet,
    title: "ארונות",
    modalArr: closetArr
  },
  {
    img: sofa,
    title: "ספות",
    modalArr: closetArr

  },
  {
    img: bed,
    title: "מיטות",
    modalArr: closetArr
  },
  {
    img: wm,
    title: "מכונות כביסה",
    modalArr: closetArr
  },
  {
    img: table,
    title: "שולחנות",
    modalArr: closetArr
  },
  {
    img: chair,
    title: "כסאות",
    modalArr: closetArr
  },
  {
    img: tv,
    title: "טלויזיות",
    modalArr: closetArr
  },
  {
    img: dresser,
    title: "שידות",
    modalArr: closetArr
  },
  {
    img: stuff,
    title: "שונות",
    modalArr: closetArr
  },
];

const ItemList = (props) => {

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();
  const [modalArr, setModalArr] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (el) => {
    console.log(el.modal);
    setModal(el.title);
    setModalArr(el.modalArr);
    setShow(true);
  }

  return (
    <>
      <div className="ItemsList">
        <Box />
        {categoryArr.map((el, i) => {
          return (
            <div className="item" key={i} onClick={() => handleShow(el)}>
              <img src={el.img} />
              <div className="itemText">
                <strong className="itemH">{el.title}</strong>
                {props.withPrice && <p className="itemPrice"> ₪ {el.price}</p>}
              </div>
            </div>
          )
        })}
        <div className="myItems">
          <h5>הפריטים שלי</h5>
          <ListGroup >
            <ListGroup.Item className="d-flex justify-content-between">
              שולחן עבודה
              <div className="badges">
                <Badge bg="warning" pill>פירוק</Badge>
                <Badge bg="warning" pill>הרכבה</Badge>
                <AiFillCloseCircle />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              ארון 4 דלתות
              <div className="badges">
                <AiFillCloseCircle />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              טלויזיה 60"
              <div className="badges">

                <Badge bg="warning" pill>הרכבה</Badge>
                <AiFillCloseCircle />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="modal">
        <h1 className=''>{modal}  </h1>
        <div className="modalItems">
          {closetArr.map((el, i) => {
            return (
              <Item
                img={el.img}
                title={el.title}
                key={i}
              />
            );
          })}
        </div>
        <div className="modalBtn">
          <MainBtn text='אישור' link='#' handleClose={handleClose} />
        </div>
      </Modal>
    </>
  );
};

export default ItemList;