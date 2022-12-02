import './GalleryCreation.css';

function GalleryCreation(props) {
  return (
    <div className="GalleryCreation">
      <span>Gallery Name:</span>
      <input></input>
      <span>Description:</span>
      <input></input>
      <span>Invite Artists:</span>
      <img src="plus icon" alt="Invite"></img>
      <span>Upload</span>
      <input></input>
      <button>Post</button>
      <button>Share</button>
      <button>Premiere</button>
    </div>
  );
}

export default GalleryCreation;