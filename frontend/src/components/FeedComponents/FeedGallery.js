import FeedThumbnail from "./FeedThumbnail";
import FeedTitle from "./FeedTitle";
import './FeedGallery.css';

function FeedGallery(props) {
  return (
    <div className="feed-gallery">
      <FeedThumbnail src={props.src}/>
      <FeedTitle title={props.title}/>
    </div>
  );
}

export default FeedGallery;