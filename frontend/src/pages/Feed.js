import PageHeader from "../components/HeaderComponents/PageHeader";
import FeedPanel from "../components/FeedComponents/FeedPanel";
import './Feed.css';
import oop from '../static/oop.JPEG';

function Feed(props) {
  const getProfileIcon = () => {
    return props.profileIcon;
  }

  return (
    <div className="Feed">
      <PageHeader src={getProfileIcon} />
      <FeedPanel srcTopLeft={oop} titleTopLeft="Top Left Gallery"
      srcTopRight={"srcTopRight.jpg"}
      titleTopRight="Top Right Gallery"
      srcBottomLeft="srcBottomLeft.jpg"
      titleBottomLeft="Bottom Left Gallery"
      srcBottomRight="srcBottomRight.jpg"
      titleBottomRight="Bottom Right Gallery"/>
    </div>
  );
}

export default Feed;