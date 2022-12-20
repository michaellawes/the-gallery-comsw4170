import './HeaderProfileIcon.css';
import React from 'react';

function HeaderProfileIcon(props) {
  return (
    <div className="header-profile-icon">
      <img src={props.src} alt="Profile Icon"></img>
    </div>
  );
}

export default HeaderProfileIcon;