import FeedThumbnail from "./FeedThumbnail";
import './FeedGallery.css';
import React from 'react';

function FeedGallery(props) {
  return (
    <div className="feed-gallery">
      <FeedThumbnail src={props.src} title={props.title} isLeft={props.isLeft}/>
    </div>
  );
}

export default FeedGallery;