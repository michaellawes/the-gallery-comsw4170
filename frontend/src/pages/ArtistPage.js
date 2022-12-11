import ProfileBio from '../components/ProfileComponents/ProfileBio';
import ProfileGallery from '../components/ProfileComponents/ProfileGallery';
import ProfileIcon from '../components/ProfileComponents/ProfileIcon';
import ProfileName from '../components/ProfileComponents/ProfileName';
import './ArtistPage.css';

function ArtistPage(props) {
  return (
    <div className="ArtistPage">
      <ProfileIcon/>
      <ProfileName/>
      <ProfileBio/>
      <div className='lander'>
        <img src="src" alt="spotlight"></img>
      </div>
      <button>
        Personal Galleries
      </button>
      <button>
        Collaborative Galleries
      </button>
      <button>
        Events
      </button>
    </div>
  );
}

export default ArtistPage;