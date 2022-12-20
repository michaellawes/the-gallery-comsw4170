import './Profile.css';
import ProfileBio from '../components/ProfileComponents/ProfileBio';
import ProfileIcon from '../components/ProfileComponents/ProfileIcon';
import ProfileName from '../components/ProfileComponents/ProfileName';
import Artwork from '../components/ProfileComponents/Artwork';
import Events from '../components/ProfileComponents/Events';
import Settings from '../components/ProfileComponents/Settings';
import React from 'react';

function Profile(props) {
  return (
    <div className="Profile">
      <ProfileIcon src={""}/>
      <ProfileName name={"New Artist"}/>
      <ProfileBio description={"I am a new artist looking to make a name for myself"}/>
      <Artwork/>
      <Events/>
      <Settings/>
    </div>
  );
}

export default Profile;