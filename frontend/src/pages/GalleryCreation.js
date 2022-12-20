import './GalleryCreation.css';
import image_dropin from '../static/image_dropin.png';
import AddIcon from '@mui/icons-material/Add';
import TextInput from "../components/GalleryCreationComponents/TextInput.js"
import React from "react";

function GalleryCreation(props) {
  return (
    <div className='gallery-creation'>
       <TextInput className="text-area gallery-name" placeholder="name of gallery" />
      <div className="gallery-container">

        <div className='gallery-item'>
          <TextInput className="text-area piece-name" placeholder="name of piece"  />
          <TextInput className="text-area year" placeholder="year" />
          <TextInput className="text-area medium-used" placeholder="medium-used" />
          <TextInput className="text-area size" placeholder="size" />
        </div>
        <div className='gallery-item'>
          <img src={image_dropin} alt="images drop menu" class="center"></img>
        </div>
      </div>
      <div className='button-container'>
        <div className='button-item'>
          <button className="button-1" placeholder="save"> save</button>
        </div>
        <div className='add-icon button-item2'>
          <AddIcon style={{ color: 'white'}}/>
        </div>
        <div className='button-item2'>
        <button className="button-2" placeholder="artist name">artist name</button>
        </div>
      </div>
      
    </div>
  );
}

export default GalleryCreation;