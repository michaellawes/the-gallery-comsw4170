import './Feed.css';
import oop from '../static/oop.jpg';
import coop from '../static/coop.jpg';
import FeedGallery from '../components/FeedComponents/FeedGallery';

function Feed(props) {
  return (
    <div className="Feed">
      <FeedGallery src={oop} title={"Some Where Out There"} isLeft={true}/>
      <FeedGallery src={coop} title={"116th Street Vibes"} isLeft={false}/>
    </div>
  );
}

export default Feed;