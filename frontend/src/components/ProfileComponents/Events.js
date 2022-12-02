import Calendar from '../NotificationsComponents/Calendar';
import './Events.css';

function Events(props) {
  return (
    <div className="Events">
      <span>Add Event:</span>
      <span>Title:</span>
      <input></input>
      <span>Description:</span>
      <input></input>
      <span>Date</span>
      <Calendar/>
    </div>
  );
}

export default Events;