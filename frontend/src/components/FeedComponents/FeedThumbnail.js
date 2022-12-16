import './FeedThumbnail.css';

function FeedThumbnail(props) {
  return (
    <div>
      {props.isLeft === true ? 
        <div className='feed-container'>
          <div className="feed-item">
            <img src={props.src} alt="Gallery"></img>
          </div>
          <div className="feed-item2">
            <span>{props.title}{props.isLeft}</span>
          </div>
        </div>
        :
        <div className='feed-container'>
          <div className="feed-item2">
            <span>{props.title}{props.isLeft}</span>
          </div>
          <div className="feed-item">
            <img src={props.src} alt="Gallery"></img>
          </div>
        </div>
      }  
    </div>
  );
}

export default FeedThumbnail;