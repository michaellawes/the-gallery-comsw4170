import FeedGallery from "./FeedGallery";
import './FeedPanel.css';
import React from 'react';

function FeedPanel(props) {
  return (
    <div className="feed-panel">
      <div className="feed-panel fp-top-left">
        <FeedGallery src={props.srcTopLeft} title={props.titleTopLeft}/>
      </div>
      <div className="feed-panel fp-top-right">
        <FeedGallery src={props.srcTopRight} title={props.titleTopRight}/>
      </div>
      <div className="feed-panel fp-bottom-left">
        <FeedGallery src={props.srcBottomLeft} title={props.titleBottomLeft}/>
      </div>
      <div className="feed-panel fp-bottom-right">
        <FeedGallery src={props.srcBottomRight} title={props.titleBottomRight}/>
      </div>
    </div>
  );
}

export default FeedPanel;