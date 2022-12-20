import './HeaderSearchIcon.css';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function HeaderSearchIcon() {
  return (
    <div className="header-search-icon">
      <SearchIcon fontSize='100px' style={{ color: 'white'}}/>
    </div>
  );
}

export default HeaderSearchIcon;