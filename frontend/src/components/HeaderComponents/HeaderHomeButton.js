import './HeaderHomeButton.css';
import React from 'react';

function HeaderHomeButton(props) {
  return (
    <div className="header-home-button">
      <img src={props.src} alt="Home Button"></img>
    </div>
  );
}

export default HeaderHomeButton;