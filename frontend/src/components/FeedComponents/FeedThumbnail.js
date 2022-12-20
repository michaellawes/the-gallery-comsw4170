import './FeedPanel.css';
import React from 'react';

function FeedThumbnail(props) {
  return (
    <div className="feed-thumbnail">
      <img src={props.src} alt="Gallery"></img>
    </div>
  );
}

export default FeedThumbnail;