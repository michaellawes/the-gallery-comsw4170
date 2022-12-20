import ProfileBio from '../components/ProfileComponents/ProfileBio';
import ProfileGallery from '../components/ProfileComponents/ProfileGallery';
import ProfileIcon from '../components/ProfileComponents/ProfileIcon';
import ProfileName from '../components/ProfileComponents/ProfileName';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import events_image from '../static/events_image.png';
import favorite_image1 from '../static/favorite_image1.png';
import favorite_image2 from '../static/favorite_image2.png';
import favorite_image3 from '../static/favorite_image3.png';
import gallery_image1 from '../static/gallery_image1.png';
import gallery_image2 from '../static/gallery_image2.png';
import gallery_image3 from '../static/gallery_image3.png';
import like_image1 from '../static/like_image1.png';
import like_image2 from '../static/like_image2.png';
import like_image3 from '../static/like_image3.png';
import profile_icon from '../static/profile_icon.png';
import './ArtistPage.css';


function ArtistPage(props) {
  return (
    <div className="ArtistPage">
      <div className='vertical-container'>
        <div className='header vertical-item1'>
          <div className='info-container'>
            <div className='info-icon'>
              <img src={profile_icon} alt="image for profile" class="profile-image"></img>
            </div>
            <div className='info-name'>
              <ProfileName name={"Brain"}/>
            </div>
            <div className='info-bio'>
              <ProfileBio bio={"I am an awesome professor of User Design/UX. Loved by my students, feared by my enemies. I love photography and Norwegian tap-dance."}/>
            </div>
          </div>
        </div>
        <div className='section-container vertical-item galleries'>
        <div className='title2'>
              <span> galleries. </span>
          </div>
          <div className='section-item'>
          <img src={gallery_image1} alt="image for galleries" class="gallery-image"></img>
          </div>
          <div className='section-item'>
          <img src={gallery_image2} alt="image for galleries" class="gallery-image"></img>
          </div>
          <div className='section-item'>
          <img src={gallery_image3} alt="image for galleries" class="gallery-image"></img>
          </div>
        </div>
        <div className='section-container vertical-item events'>
        <div className='title'>
              <span> events. </span>
          </div>
          <div className='section-item arrow-icon'>
            <ArrowBackIosRoundedIcon />
          </div>
          <div className='section-item'>
          <img src={events_image} alt="image for events" class="event-image"></img>
          </div>
          <div className='section-item arrow-icon'>
            <ArrowForwardIosRoundedIcon />
          </div>
        </div>
        <div className='section-container vertical-item favorites'>
        <div className='title2'>
              <span> favorites. </span>
          </div>
          <div className='section-item'>
          <img src={favorite_image1} alt="image for favorite artist 1" class="favorite-image"></img>
          </div>
          <div className='section-item'>
          <img src={favorite_image2} alt="image for favorite artist 2" class="favorite-image"></img>
          </div>
          <div className='section-item'>
          <img src={favorite_image3} alt="image for favorite artist 3" class="favorite-image"></img>
          </div>
        </div>
        <div className='section-container vertical-item likes'>
           <div className='title'>
              <span> likes. </span>
          </div>
          <div className='section-item arrow-icon'>
            <ArrowBackIosRoundedIcon />
          </div>
          <div className='section-item'>
              <img src={like_image1} alt="likes" class="like-image"></img>
          </div>
          <div className='section-item'>
              <img src={like_image2} alt="likes" class="like-image"></img>
          </div>
          <div className='section-item'>
             <img src={like_image3} alt="likes" class="like-image"></img>
          </div>
          <div className='section-item arrow-icon'>
            <ArrowForwardIosRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;