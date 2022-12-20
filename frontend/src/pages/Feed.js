import FeedPanel from "../components/FeedComponents/FeedPanel";
import './Feed.css';
import oop from '../static/oop.JPEG';
import image2 from '../static/image2.png';
import image3 from '../static/image3.png';
import image4 from '../static/image4.png';
import image5 from '../static/image5.png';
import React from 'react';


function Feed(props) {
  return (
    <div className="Feed">
      <FeedPanel srcTopLeft={oop} titleTopLeft="Top Left Gallery"
      srcTopRight={"srcTopRight.jpg"}
      titleTopRight="Top Right Gallery"
      srcBottomLeft={image4}
      titleBottomLeft="Bottom Left Gallery"
      srcBottomRight={image5}
      titleBottomRight="Bottom Right Gallery"/>

<div class="container">
<div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="w-100"></div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
  </div>

    </div>

    
  );
}

export default Feed;