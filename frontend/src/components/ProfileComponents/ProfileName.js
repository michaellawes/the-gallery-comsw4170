import './ProfileName.css';
import React from 'react';

function ProfileName(props) {
  return (
    <div className="profile-name">
      <span>{props.name}</span>
    </div>
  );
}

export default ProfileName;