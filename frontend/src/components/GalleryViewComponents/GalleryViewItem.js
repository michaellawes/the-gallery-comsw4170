import './GalleryViewItem.css';

function GalleryViewItem(props) {
  return (
    <div className="GalleryViewItem">
      <span>{props.name}</span>
    </div>
  );
}

export default GalleryViewItem;