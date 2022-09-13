import "./OpenRound.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const OpenRound = (props) => {
  return (
    <>
      <div className="entranceCleaningHistoryOpenRound">
        <Accordion key={props.key}>
          <AccordionSummary>
            <Typography>
              <div className="imgAndText">
                <img className="openRoundImg" src={props.img} alt="aa" />
                <div className="openRoundText">
                  <h1 className="openRoundTextH">{props.title}</h1>
                  <p className="openRoundTextP">{props.desc}</p>
                </div>
              </div>
              <div className="entranceCleaningHistoryBtn">
                <Link to={props.link} className={props.class}>
                  פרטים
                </Link>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="aboutService">
                <h1>About this service</h1>
                <p>
                  Our company serves your entrance twice a week. We always
                  welcome your feedback, comments and suggestions to improve the
                  service.
                </p>
                <p>Entrance cleaning includes:</p>
                <p>- wet cleaning</p>
                <p>- washing the floor</p>
                <p>– wall rubbing</p>
                <p>- watering flowers (if necessary)</p>
                <p>Recommend our service to your friends!</p>
                <Button className="shareOnWhatsappBtn">Share on WhatsApp</Button>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default OpenRound;
