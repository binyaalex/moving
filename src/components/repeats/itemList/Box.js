import './Box.css'
import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import boxImg from '../../../assets/images/moving/box2.jpg'

const Box = () => {

  const displayExplain = () => {
    const cardboardExplain = document.querySelector(".cardboardExplain");
    if (cardboardExplain.style.color === "gray") {
      cardboardExplain.style.color = "transparent";
      cardboardExplain.style.backgroundColor = "transparent";
    } else {
      cardboardExplain.style.color = "gray";
      cardboardExplain.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <div className="boxPick">
        <Row className="row">
          <Form.Group as={Col} className="mb-3" controlId="formBasicBox">
            <Form.Label>מספר קרטונים</Form.Label>
            <Form.Select aria-label="Default select example">
              <option selected>. . .</option>
              <option value="0">0 - אין לי קרטונים</option>
              <option value="10">1-10 דירת חדר</option>
              <option value="20">11-20 דירת חדר</option>
              <option value="30">21-30 דירת 1-2 חד'</option>
              <option value="40">31-40 דירת 1-2 חד'</option>
              <option value="50">41-50 דירת 2-3 חד'</option>
              <option value="60">51-60 דירת 3 חד'</option>
              <option value="70">61-70 דירת 3-4 חד'</option>
              <option value="80">71-80 דירת 3-4 חד'</option>
              <option value="100">81-100 דירת 4 חד'</option>
              <option value="120">101-120 דירת 4-5 חד'</option>
              <option value="140">121-140 דירת 5 חד'</option>
              <option value="160">141-160 דירת 6 חד'</option>
            </Form.Select>
          </Form.Group>
          <div className="boxes col">
            <img className="boxImg" src={boxImg} alt="aa" />
            <img className="boxImg" src={boxImg} alt="aa" />
          </div>
        </Row>
        {/* <div>*גודל קרטון מקסימלי: 50/50/65 ס"מ</div> */}
        {/* <div className='mb-3'>*עלות כל קרטון נוסף מעבר למספר הנבחר: ₪15 </div> */}
        <div className='mb-3'>*עלות ההובלה לא כוללת אספקת קרטונים, למעט בהזמנת שירותי אריזה </div>
      </div>
    </div>
  );
};

export default Box;
