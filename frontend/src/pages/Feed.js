import PageHeader from "../components/HeaderComponents/PageHeader";
import FeedPanel from "../components/FeedComponents/FeedPanel";
import './Feed.css';

function Feed(props) {
  const getProfileIcon = () => {
    return props.profileIcon;
  }

  const getFeedPanelProps = () => {
    return {
      srcTopLeft: "../../static/im1.jpeg",
      titleTopLeft: "Bolumbia Imagery",
      srcTopRight: "srcTopRight.jpg",
      titleTopRight: "Top Right Gallery",
      srcBottomLeft: "srcBottomLeft.jpg",
      titleBottomLeft: "Bottom Left Gallery",
      srcBottomRight: "srcBottomRight.jpg",
      titleBottomRight: "Bottom Right Gallery"
    }
  }

  return (
    <div className="Feed">
      <PageHeader src={getProfileIcon} />
      <FeedPanel {...getFeedPanelProps}/>
    </div>
  );
}

export default Feed;