import './HeaderProfileIcon.css';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

function HeaderProfileIcon(props) {
  return (
    <div className="header-profile-icon">
      <PersonIcon fontSize='100px' style={{ color: 'white'}}/>
    </div>
  );
}

export default HeaderProfileIcon;