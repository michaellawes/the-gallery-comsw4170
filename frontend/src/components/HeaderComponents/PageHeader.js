import HeaderProfileIcon from "./HeaderProfileIcon";
import HeaderNotificationBell from "./HeaderNotificationBell";
import HeaderSearchIcon from "./HeaderSearchIcon";
import HeaderHomeButton from "./HeaderHomeButton";
import HeaderTitle from "./HeaderTitle";
import './PageHeader.css';

function PageHeader(props) {
  return (
    <div className="page-header">
      <HeaderHomeButton />
      <HeaderTitle />
      <HeaderNotificationBell />
      <HeaderSearchIcon />
      <HeaderProfileIcon {...props.src}/>
    </div>
  );
}

export default PageHeader;