import './Notification.css';
import React from 'react';

function Notification(props) {
  return (
    <div className="notification">
      <img src={props.icon} alt={"Notification Icon"}></img>
      <span>{props.title}</span>
      <span>{props.description}</span>
      <img src={props.artist} alt="Artist"></img>
    </div>
  );
}

export default Notification;