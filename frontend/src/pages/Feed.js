import './Feed.css';
import oop from '../static/oop.JPEG';
import coop from '../static/coop.jpg';
import FeedGallery from '../components/FeedComponents/FeedGallery';

function Feed(props) {
  return (
    <div className="Feed">
      <FeedGallery src={oop} title={"116th Street Vibes"} isLeft={true}/>
      <FeedGallery src={coop} title={"My Gallery"} isLeft={false}/>
    </div>
  );
}

export default Feed;