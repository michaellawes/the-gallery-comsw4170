import HeaderProfileIcon from "./HeaderProfileIcon";
import HeaderNotificationBell from "./HeaderNotificationBell";
import HeaderSearchIcon from "./HeaderSearchIcon";
import HeaderHomeButton from "./HeaderHomeButton";
import HeaderTitle from "./HeaderTitle";
import { Link } from 'react-router-dom'
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
          <HeaderNotificationBell />
        </div>
        <div className="container">
          <HeaderSearchIcon />
        </div>
        <div className="container">
          <HeaderProfileIcon {...props.src}/>
        </div>
      </nav>
    </div>
  );
}

export default PageHeader;