import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

function Input({ placeholder, modalBody, modalTitle, isElevator, selected }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isExtraRoad, setIsExtraRoad] = useState('');

  const handleChange = (e) => {
    setIsExtraRoad(e.target.value);
  }

  return (
    <>
      <select
        // ref={selectElement}
        onClick={handleShow}
        name=""
        id=""
        className="select_address_input"
        placeholder={placeholder}
      >
        <option selected>{selected}</option>
      </select>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        {isElevator ? (
          <select
            onChange={handleChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="1">אין</option>
            <option value="2" selected>
              4 נוסעים
            </option>
            <option value="3"> 6 נוסעים</option>
            <option value="4"> 8 נוסעים</option>
            <option value="5"> משא גדולה</option>
          </select>
        ) : (
          <select
            onChange={handleChange}
            id="extraRoadSelect"
            className="form-select crain"
            aria-label="Default select example"
            value={isExtraRoad}
          >
            <option value="1">בחר</option>
            <option value="no">אין</option>
            <option value="yes">יש</option>
            <option value="unknown">לא יודע</option>
          </select>
        )}
        {isExtraRoad === "yes" && (
          <form className="m-auto">
            <p>
              <label for="extraRoad">אנא תאר במדויק ככל האפשר</label>
            </p>
            <textarea
              className="crain"
              id="extraRoadText"
              // value=""
              name="extraRoadText"
              rows="4"
              cols="50"
              placeholder="תיאור..."
            ></textarea>
            <br />
            {/* <input className="m-start" type="submit" value="Submit" /> */}
          </form>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            הבנתי
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Input;
