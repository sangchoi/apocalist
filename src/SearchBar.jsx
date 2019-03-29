import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';

const SearchBar = (props) => {
  return (
    <div>
      <div className='iconDiv'>
        <Router>
          <Link to='/home'>
            <img className='logologo' src={logo} />
          </Link>
        </Router>
      </div>
      <div className='searchInputDiv'>
        <input
          className='searchInput'
          type='text'
          placeholder='s e a r c h . . .'
          value={props.filterValue}
          onChange={props.handleFilterChange}
        />
      </div>
      <div className='menuIconDiv'>
        <FontAwesomeIcon icon={faBars} size='1x' color='#ffffff' />
      </div>
    </div>
  );
};

export default SearchBar;
