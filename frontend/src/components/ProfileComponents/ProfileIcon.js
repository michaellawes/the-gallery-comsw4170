import './ProfileIcon.css';
import React from 'react';

function ProfileIcon(props) {
  return (
    <div className="profile icon">
      <img src={props.src} alt="Profile Icon"></img>
    </div>
  );
}

export default ProfileIcon;