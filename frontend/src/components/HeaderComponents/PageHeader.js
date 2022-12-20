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
      <div className="page-header-icon">
        <Link to={'/'}>
          <HeaderHomeButton/>
        </Link>
      </div>
      <div className="page-header-title">
        <HeaderTitle/>
      </div>
      <div className="page-header-icon">
        <Link className="navbar-brand" to={'/notifications'}>
          <HeaderNotificationBell />
        </Link>
      </div>
      <div className="page-header-icon">
        <Link to={'/'}>
          <HeaderSearchIcon />
        </Link>
      </div>
      <div className="page-header-icon">
        <Link to={'/profile'}>
          <HeaderProfileIcon {...props.src}/>
        </Link>
      </div>
    </div>
  );
}

export default PageHeader;