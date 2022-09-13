import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./PregnancySquare.css";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";



const PregnancySquare = ({ img, text, link, storing }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {link ? (
        <Link to={link} className="pregnancySquare">
          <img className="pregnancySquareImg" src={img} alt={text} />
          <h1 className="pregnancySquareHeader">{text}</h1>
        </Link>
      ) : (
        <div className="pregnancySquare" onClick={handleClickOpen}>
          <img className="pregnancySquareImg" src={img} alt={text} />
          <h1 className="pregnancySquareHeader">{text}</h1>
        </div>
      )}
      {open && (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            className="d-flex justify-content-end"
          >
            <DialogTitle className="modal-pay-method-title">
              {"קבלת הצעת מחיר"}
            </DialogTitle>
            <DialogActions>
              <Link
                className="modal-pay-method-choices"
                to={storing ? "/businessstoring" : "/personaldetails"}
                onClick={handleClose}
              >
                בעזרת נציג              </Link>
              <Link
                className="modal-pay-method-choices"
                to={storing ? "/howmany" : "/moving"}
                onClick={handleClose}
              >
                אונליין
              </Link>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default PregnancySquare;
