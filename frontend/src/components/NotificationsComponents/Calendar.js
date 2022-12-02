import './Calendar.css';

function Calendar(props) {
  return (
    <div className="Calendar">
      <img src={props.icon} alt={"Calendar Icon"}></img>
    </div>
  );
}

export default Calendar;