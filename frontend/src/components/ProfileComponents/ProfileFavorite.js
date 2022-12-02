import './ProfileFavorite.css';

function ProfileFavorite(props) {
  return (
    <div className="profile-favorite">
      <img src={props.picture} alt="Artist"></img>
      <span>{props.artist}</span>
    </div>
  );
}

export default ProfileFavorite;