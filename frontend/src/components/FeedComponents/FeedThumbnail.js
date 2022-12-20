import './FeedThumbnail.css';
import React from "react";

function FeedThumbnail(props) {
  return (
    <div>
      {props.isLeft === true ? 
        <div className='feed-container'>
          <div className="feed-item">
            <img src={props.src} alt="Gallery"></img>
          </div>
          <div className="feed-item2 left">
            <span className='left'>{props.title}</span>
          </div>
        </div>
        :
        <div className='feed-container'>
          <div className="feed-item3">
            <span className='right'>{props.title}</span>
          </div>
          <div className="feed-item">
            <img src={props.src} alt="Gallery"></img>
          </div>
        </div>
      }  
    </div>
  );
}

export default FeedThumbnail;