import "./Notifications.css";
import Notification from "../components/NotificationsComponents/Notification";
import cal from "../static/cal.png";
import notif1 from "../static/notif1.png"
import notif2 from "../static/notif2.png"
import React from 'react';

function Notifications() {
  return (
    <div className="notifications">
      <Notification
        title="Upcoming Physical Exhibition"
        description="Frances is hosting a new physical exhibition on 23/12/2022 in Uris Hall Columbia University."
        icon={0}
        artist={notif1}
        className={"ncon blue"}
      />
      <Notification
        title="Upcoming Virtual Exhibition"
        description="Romero is hosting a new virtual exhibition on 18/12/2022"
        icon={1}
        artist={notif2}
        className={"ncon red"}
      />
      <Notification
        title="New Art"
        description="Frances has put out new art. Check it out!"
        icon={2}
        artist={notif1}
        className={"ncon green"}
      />
      <div className="noti-cal">
        <img src={cal} alt="Calendar"></img>
      </div>
    </div>
  );
}

export default Notifications;
