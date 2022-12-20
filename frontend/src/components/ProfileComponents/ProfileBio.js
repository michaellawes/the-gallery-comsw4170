import './ProfileBio.css';
import React from 'react';

function ProfileBio(props) {
  return (
    <div className="profile-bio">
      <span>{props.bio}</span>
    </div>
  );
}

export default ProfileBio;