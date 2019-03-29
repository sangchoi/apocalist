import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
  return (
    <div>
      <div className="iconDiv">
      <Router>
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} size='1.5x' color='#000000' />
        </Link>
      </Router>
      </div>
      <div className="searchInputDiv">
      <input className="searchInput"
        type='text'
        placeholder='s e a r c h . . .'
        value={props.filterValue}
        onChange={props.handleFilterChange}
      />
      </div>
      <div className="menuIconDiv">
      <FontAwesomeIcon icon={faBars} size='1.5x' color='#000000' />
      </div>
    </div>
  );
};

export default SearchBar;
