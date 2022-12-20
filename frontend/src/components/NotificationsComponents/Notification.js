import './Notification.css';
import MapIcon from "@mui/icons-material/Map";
import ComputerIcon from '@mui/icons-material/Computer';
import ColorLensIcon from "@mui/icons-material/ColorLens";
import React from 'react';

function Notification(props) {
  return (
    <div className={props.class}>
      <div className="icon inner-icon">
        {props.icon === 0 && <MapIcon style={{ color: "black" }} />}
        {props.icon === 1 && <ComputerIcon style={{ color: "black" }} />}
        {props.icon === 2 && <ColorLensIcon style={{ color: "black" }} />}
      </div>
      <div className="inner-text text-container">
        <div className="text-item title">
          <span>{props.title}</span>
        </div>
        <div className="text-item description">
          <span>{props.description}</span>
        </div>
      </div>
      <div className="inner-icon artist">
        <img src={props.artist} alt="Artist"></img>
      </div>
    </div>
  );
}

export default Notification;