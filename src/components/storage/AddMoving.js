import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Storage.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddMoving = () => {

  return (
    <>
      <h3 className="subTitle">כתובת</h3>
      <Row className="mb-3 row">
        <Form.Group as={Col} className="mb-3" controlId="formBasicFrom">
          <Form.Label>עיר</Form.Label>
          <Form.Control type="text" placeholder="נתניה" />
        </Form.Group>
      </Row>

      <Row className="mb-3 row">
        <Form.Group as={Col} className="mb-3" controlId="formBasicName">
          <Form.Label>קומה</Form.Label>
          <Form.Select aria-label="Default select example">
            <option selected>. . .</option>
            <option value="-4">-4</option>
            <option value="-3">-3</option>
            <option value="-2">-2</option>
            <option value="-1">-1</option>
            <option value="0">קרקע</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23+</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formBasicName">
          <Form.Label>מעלית</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="0">אין</option>
            <option value="4" selected>
              4 נוסעים
            </option>
            <option value="6"> 6 נוסעים</option>
            <option value="8"> 8 נוסעים</option>
            <option value="10"> משא גדולה</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3 row">
        <Form.Group as={Col} className="mb-3" controlId="formBasicName">
          <Form.Label>שביל כניסה חריג</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="no">אין</option>
            <option value="yes">יש</option>
            <option value="unknown">לא ידוע</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formBasicName">
          <Form.Label>צורך במנוף</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="no">כן</option>
            <option value="yes">לא</option>
            <option value="unknown">לא ידוע</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </>
  );
};

export default AddMoving;