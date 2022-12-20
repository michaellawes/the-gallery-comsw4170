import ProfileBio from '../components/ProfileComponents/ProfileBio';
import ProfileGallery from '../components/ProfileComponents/ProfileGallery';
import ProfileIcon from '../components/ProfileComponents/ProfileIcon';
import ProfileName from '../components/ProfileComponents/ProfileName';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './ArtistPage.css';

function ArtistPage(props) {
  return (
    <div className="ArtistPage">
      <div className='vertical-container'>
        <div className='header vertical-item1'>
          <div className='info-container'>
            <div className='info-icon'>
              <ProfileIcon/>
            </div>
            <div className='info-name'>
              <ProfileName name={"Delilah"}/>
            </div>
            <div className='info-bio'>
              <ProfileBio bio={"Hello everyone I'm an upcoming artist who wants to explore the features of the gallery in their full form!"}/>
            </div>
          </div>
        </div>
        <div className='section-container vertical-item'>
          <div className='section-item'>
            sadfasd
          </div>
          <div className='section-item'>
            adfasd
          </div>
          <div className='section-item'>
            adfasd
          </div>
        </div>
        <div className='section-container vertical-item events'>
          <div className='section-item arrow-icon'>
            <ArrowBackIosRoundedIcon />
          </div>
          <div className='section-item'>
            adfasdf
          </div>
          <div className='section-item arrow-icon'>
            <ArrowForwardIosRoundedIcon />
          </div>
        </div>
        <div className='section-container vertical-item'>
          <div className='section-item'>
            adfasd
          </div>
          <div className='section-item'>
            adfasd
          </div>
          <div className='section-item'>
            adfasdf
          </div>
        </div>
        <div className='section-container vertical-item'>
          <div className='section-item'>
            adfafs
          </div>
          <div className='section-item'>
            adfasd
          </div>
          <div className='section-item'>
            adfasdf
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;