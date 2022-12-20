import FeedThumbnail from "./FeedThumbnail";
import { Link } from 'react-router-dom'
import './FeedGallery.css';
import React from 'react';

function FeedGallery(props) {
  return (
    <div className="feed-gallery">
      <Link to={props.link}>
        <FeedThumbnail src={props.src} title={props.title} isLeft={props.isLeft}/>
      </Link>
    </div>
  );
}

export default FeedGallery;