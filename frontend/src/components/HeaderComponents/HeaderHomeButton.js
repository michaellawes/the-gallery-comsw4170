import './FeedHomeButton.css';

function HeaderHomeButton(props) {
  return (
    <div className="header-home-button">
      <img src={props.src} alt="Home Button"></img>
    </div>
  );
}

export default HeaderHomeButton;