import './Profile.css';
import ProfileBio from '../components/ProfileComponents/ProfileBio';
import ProfileEvent from '../components/ProfileComponents/ProfileEvent';
import ProfileFavorite from '../components/ProfileComponents/ProfileFavorite';
import ProfileGallery from '../components/ProfileComponents/ProfileGallery';
import ProfileIcon from '../components/ProfileComponents/ProfileIcon';
import ProfileName from '../components/ProfileComponents/ProfileName';

function Profile(props) {
  const events = [ProfileEvent(null), ProfileEvent(null)]
  return (
    <div className="Profile">
      <ProfileIcon src={""}/>
      <ProfileName name={"New Artist"}/>
      <ProfileBio description={"I am a new artist looking to make a name for myself"}/>
      <ProfileGallery title={"New Columbia Collective"} thumbnail={""}/>
      <ProfileEvent 
        isPremiere={false}
        title={"New Event"}
        description={"My new artwork will be in an exhibition!"}
        src={""}
      />
      <ProfileFavorite
        artist={"New User2"}
        picture={"dafsdfas"}
      />
    </div>
  );
}

export default Profile;