import './FeedTitle.css';

function FeedTitle(props) {
  return (
    <div className="feed-title">
      <img src={props.src} alt="Gallery"></img>
    </div>
  );
}

export default FeedTitle;