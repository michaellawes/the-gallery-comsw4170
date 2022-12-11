import './Artist.css';

function Artist(props) {
  return (
    <div className="Artist">
      <span>{props.name}</span>
    </div>
  );
}

export default Artist;