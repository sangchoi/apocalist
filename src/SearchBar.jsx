import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
  return (
    <div>
      <Router>
        <Link to='/home'>
          <FontAwesomeIcon icon={faHome} size='1x' color='#000000' />
        </Link>
      </Router>
      <input
        type='text'
        placeholder='s e a r c h . . .'
        value={props.filterValue}
        onChange={props.handleFilterChange}
      />
      <FontAwesomeIcon icon={faBars} size='1x' color='#000000' />
    </div>
  );
};

export default SearchBar;
