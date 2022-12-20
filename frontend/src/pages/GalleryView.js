import React from 'react';
import './GalleryView.css';

function GalleryView(props) {
  return (
    <div className="gallery-view">
      <div className="gallery-main-container">
        <div className='description'>
          <span>{props.description}</span>
        </div>
        <div className='content-container'>
          <div className='artwork-container vert-item'>
            <img src={props.src} alt={"artist"}></img>
          </div>
          <div className='vert-item horizontal-container'>
            <div className='hor-item'>
              <span>{props.title}</span>
            </div>
            <div className='hor-item1'>
              <span>Artist:   </span>
            </div>
            <div className='hor-item1'>
              <span>{props.artist}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryView;