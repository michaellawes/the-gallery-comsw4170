import './Feed.css';
import oop from '../static/oop.jpg';
import loop from '../static/loop.jpg';
import FeedGallery from '../components/FeedComponents/FeedGallery';
import React from "react";

function Feed(props) {
  return (
    <div className="Feed">
      <FeedGallery src={oop} title={"Some Where Out There"} isLeft={true} link={"/gallery1"}/>
      <FeedGallery src={loop} title={"116th Street Vibes"} isLeft={false} link={"/gallery2"}/>
    </div>

    
  );
}

export default Feed;