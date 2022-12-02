import './Settings.css';

function Settings(props) {
  return (
    <div className="settings">
      <img src={props.src} alt="Settings"></img>
      <span>Settings</span>
    </div>
  );
}

export default Settings;