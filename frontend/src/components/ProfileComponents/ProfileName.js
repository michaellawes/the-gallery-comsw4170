import './ProfileName.css';

function ProfileName(props) {
  return (
    <div className="profile-name">
      <span>{props.name}</span>
    </div>
  );
}

export default ProfileName;