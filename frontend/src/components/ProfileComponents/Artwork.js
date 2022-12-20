import './Artwork.css';
import ProfileGallery from './ProfileGallery';
import React from 'react';
import { Link } from 'react-router-dom';

function Artwork(props) {
  return (
    <div className="Artwork">
      <span>Change spotlight</span>
      <div>
        <ProfileGallery/>
        <ProfileGallery/>
        <ProfileGallery/>
      </div>
      <Link className="navbar-brand" to={"/gallery-creation"}>
      <span>Add new gallery:</span>
      </Link>
      
      <img src="Person" alt="Person Icon"></img>
      <span>Personal</span>
      <img src="Collaborative" alt="Collab Icon"></img>
      <span>Collaborative</span>
    </div>
  );
}

export default Artwork;