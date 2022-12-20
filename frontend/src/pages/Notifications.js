import './Notifications.css';
import Notification from '../components/NotificationsComponents/Notification';
import React from 'react';

function Notifications(props) {
  return (
    <div className="Notifications">
     <div className='notification-array'>
      <Notification
        title="Upcoming Physical Exhibition"
        description="New physical exhibition"
        src=""
        artist=""
      />
     </div>
     <div className='notification-array'>
      <Notification
        title="Upcoming Virtual Exhibition"
        description="New virtual exhibition"
        src=""
        artist=""
      />
     </div>
     <div className='notification-array'>
      <Notification
        title="New Art"
        description="New ART!!!"
        src=""
        artist=""
      />
     </div>
    </div>
  );
}

export default Notifications;