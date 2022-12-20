import './Empty.css';
import React from "react";

function Empty(props) {
  return (
    <div className="empty">
      <span>{props.message}</span>
    </div>
  );
}

export default Empty;