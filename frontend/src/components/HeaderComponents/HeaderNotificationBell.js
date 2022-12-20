import './HeaderNotificationBell.css';
import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

function HeaderNotificationBell(props) {
  return (
    <div className="header-notification-bell">
      <NotificationsIcon fontSize='100px' style={{ color: 'white'}}/>
    </div>
  );
}

export default HeaderNotificationBell;