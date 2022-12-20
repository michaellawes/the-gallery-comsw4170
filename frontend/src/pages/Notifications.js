import "./Notifications.css";
import Notification from "../components/NotificationsComponents/Notification";
import cal from "../static/cal.png";

function Notifications() {
  return (
    <div className="notifications">
      <div className="noti-container">
        <div className="noti-item">
          <Notification
            title="Upcoming Physical Exhibition"
            description="Frances is hosting a new physical exhibition on 23/12/2022 in Uris Hall Columbia University."
            icon={0}
            artist={"Frances"}
            class={"inner-container blue"}
          />
        </div>
        <div className="noti-item">
          <Notification
            title="Upcoming Virtual Exhibition"
            description="Romero is hosting a new virtual exhibition on 18/12/2022"
            icon={1}
            artist={"Romero"}
            class={"inner-container red"}
          />
        </div>
        <div className="noti-item">
          <Notification
            title="New Art"
            description="Frances has put out new art. Check it out!"
            icon={2}
            artist={"Frances"}
            class={"inner-container green"}
          />
        </div>
        <div className="noti-cal">
          <img src={cal} alt="Calendar"></img>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
