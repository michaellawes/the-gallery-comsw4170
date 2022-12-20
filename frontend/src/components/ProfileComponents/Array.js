import './Array.css';
import React from 'react';

function Array(props) {
  return (
    <div className="array">
      <button>
        <img src="left-icon" alt="Left Click"></img>
      </button>
      {props.items.map((item) => {
        
      })}
      <button>
        <img src="right-icon" alt="Right Click"></img>
      </button>
    </div>
  );
}

export default Array;