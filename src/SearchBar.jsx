import React from 'react';

const SearchBar = (props) => {
  return (
    <input
      type='text'
      placeholder='s e a r c h . . .'
      value={props.filterValue}
      onChange={props.handleFilterChange}
    />
  );
};

export default SearchBar;
