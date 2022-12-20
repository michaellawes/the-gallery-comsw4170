import './HeaderHomeButton.css';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function HeaderHomeButton(props) {
  return (
    <div className="header-home-button">
      <HomeIcon fontSize='100px' style={{ color: 'white'}}/>
    </div>
  );
}

export default HeaderHomeButton;