import './Notification.css';
import MapIcon from "@mui/icons-material/Map";
import ComputerIcon from '@mui/icons-material/Computer';
import ColorLensIcon from "@mui/icons-material/ColorLens";
import React from 'react';

function Notification(props) {
  return (
    <div className="notification-slot">
      <div className={props.className}>
        <div className="ncon-item-icon">
          {props.icon === 0 && (
            <MapIcon style={{ color: "black", fontSize: "120px" }} />
          )}
          {props.icon === 1 && (
            <ComputerIcon style={{ color: "black", fontSize: "120px" }} />
          )}
          {props.icon === 2 && (
            <ColorLensIcon style={{ color: "black", fontSize: "120px" }} />
          )}
        </div>
        <div className="ncon-item-text">
          <div className="tcon">
            <div className="tcon-item-title">
              <span>{props.title}</span>
            </div>
            <div className="tcon-item-desc">
              <span>{props.description}</span>
            </div>
          </div>
        </div>
        <div className="ncon-item-profile">
          <img src={props.artist} alt="Artist"></img>
        </div>
      </div>
    </div>
  );
}

export default Notification;