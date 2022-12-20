import './GalleryCreation.css';
import image_dropin from '../static/image_dropin.png';
import TextInput from "../components/GalleryCreationComponents/TextInput.js"

function GalleryCreation(props) {
  return (
    <div className="GalleryCreation">
      <TextInput className="text-area gallery-name" placeholder="name of gallery" />

      <TextInput className="text-area piece-name" placeholder="name of piece"  />
      <TextInput className="text-area year" placeholder="year" />
      <TextInput className="text-area medium-used" placeholder="medium-used" />
      <TextInput className="text-area size" placeholder="size" />

      <img src={image_dropin} alt="images drop menu" class="center"></img>

    
      <img src="plus icon" alt="Invite"></img>

      <button className="button-1" placeholder="save"> save</button>
      <button className="button-2" placeholder="artist name">artist name</button>
    </div>
  );
}

export default GalleryCreation;