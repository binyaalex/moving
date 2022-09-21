import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const PersonalDetails = () => {

  return (
    <>

      <h3 className="subTitle">פרטים אישיים</h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>שם</Form.Label>
        <Form.Control type="text" placeholder="השם שלי" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>אי-מייל</Form.Label>
        <Form.Control type="email" placeholder="האימייל שלי" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>טלפון</Form.Label>
        <Form.Control type="phone" placeholder="הטלפון שלי" />
      </Form.Group>

    </>
  );
};

export default PersonalDetails;
