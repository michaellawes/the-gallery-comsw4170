import './ProfileEvent.css';

function ProfileEvent(props) {
  return (
    <div className="profile-event">
      {props.isPremiere ? 
        <div>
          <img src={props.src} alt="Gallery Premiere"></img>
          <span>{props.title}</span>
        </div> 
        : 
        <div>
          <img src={props.src} alt="Artist Icon"></img>
          <span>{props.title}</span>
          <span>{props.description}</span>
        </div>
        }
      <img src={props.src} alt="Home Button"></img>
    </div>
  );
}

export default ProfileEvent;