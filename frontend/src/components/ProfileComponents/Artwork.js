import './Artwork.css';
import ProfileGallery from './ProfileGallery';

function Artwork(props) {
  return (
    <div className="Artwork">
      <span>Change spotlight</span>
      <div>
        <ProfileGallery/>
        <ProfileGallery/>
        <ProfileGallery/>
      </div>
      <span>Add new gallery:</span>
      <img src="Person" alt="Person Icon"></img>
      <span>Personal</span>
      <img src="Collaborative" alt="Collab Icon"></img>
      <span>Collaborative</span>
    </div>
  );
}

export default Artwork;