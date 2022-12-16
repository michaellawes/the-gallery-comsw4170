import './HeaderHomeButton.css';
import HomeIcon from '@mui/icons-material/Home';

function HeaderHomeButton(props) {
  return (
    <div className="header-home-button">
      <HomeIcon fontSize='100px' style={{ color: 'white'}}/>
    </div>
  );
}

export default HeaderHomeButton;