// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function ModalAlert({modalTitle, modalBody, isElevator}) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (

//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title className="modal-title">{modalTitle}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{modalBody}</Modal.Body>
//       {isElevator ? (
//         <select class="form-select" aria-label="Default select example">
//           <option value="1">אין</option>
//           <option value="2" selected>
//             נוסעים 4
//           </option>
//           <option value="3">נוסעים 6</option>
//           <option value="4">נוסעים 8</option>
//           <option value="5"> משא גדולה</option>
//         </select>
//       ) : (
//         <select class="form-select" aria-label="Default select example">
//           <option value="1">בחר</option>
//           <option value="2">אין</option>
//           <option value="3">יש</option>
//         </select>
//       )}
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           הבנתי
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default ModalAlert;
