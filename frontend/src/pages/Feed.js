import './Feed.css';
<<<<<<< HEAD
import oop from '../static/oop.JPEG';
import image2 from '../static/image2.png';
import image3 from '../static/image3.png';
import image4 from '../static/image4.png';
import image5 from '../static/image5.png';
import React from 'react';

=======
import oop from '../static/oop.jpg';
import coop from '../static/coop.jpg';
import FeedGallery from '../components/FeedComponents/FeedGallery';
>>>>>>> main

function Feed(props) {
  return (
    <div className="Feed">
<<<<<<< HEAD
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

=======
      <FeedGallery src={oop} title={"Some Where Out There"} isLeft={true}/>
      <FeedGallery src={coop} title={"116th Street Vibes"} isLeft={false}/>
>>>>>>> main
    </div>

    
  );
}

export default Feed;