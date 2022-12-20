import './ProfileGallery.css';
import React from 'react';

function ProfileGallery(props) {
  return (
    <div className="profile-gallery">
      <img src={props.thumbnail} alt="Gallery Thumbnail"></img>
      <span>{props.title}</span>
    </div>
  );
}

export default ProfileGallery;