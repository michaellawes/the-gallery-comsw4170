import './ProfileBio.css';

function ProfileBio(props) {
  return (
    <div className="profile-bio">
      <span>{props.bio}</span>
    </div>
  );
}

export default ProfileBio;