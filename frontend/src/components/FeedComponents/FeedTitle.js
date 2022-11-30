import './FeedTitle.css';

function FeedTitle(props) {
  return (
    <div className="feed-title">
      <span>{props.title}</span>
    </div>
  );
}

export default FeedTitle;