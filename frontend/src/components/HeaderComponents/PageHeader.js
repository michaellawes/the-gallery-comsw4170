import HeaderProfileIcon from "./HeaderProfileIcon";
import HeaderNotificationBell from "./HeaderNotificationBell";
import HeaderSearchIcon from "./HeaderSearchIcon";
import HeaderHomeButton from "./HeaderHomeButton";
import HeaderTitle from "./HeaderTitle";
import { Link } from 'react-router-dom'
import React from 'react';
import './PageHeader.css';
      
function PageHeader(props) {
  return (
    <div className="page-header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <HeaderHomeButton/>
          </Link>
        </div>
        <div className="container">
          <HeaderTitle/>
        </div>
        <div className="container">
          <Link className="navbar-brand" to={'/notifications'}>
            <HeaderNotificationBell />
          </Link>
        </div>
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <HeaderSearchIcon />
          </Link>
        </div>
        <div className="container">
          <Link className="navbar-brand" to={'/profile'}>
            <HeaderProfileIcon {...props.src}/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default PageHeader;