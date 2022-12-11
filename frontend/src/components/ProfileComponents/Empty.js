import './Empty.css';

function Empty(props) {
  return (
    <div className="empty">
      <span>{props.message}</span>
    </div>
  );
}

export default Empty;