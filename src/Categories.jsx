import React from 'react';

const Categories = (props) => {
  const categories = props.categories.map((category, index) => {
    if (props.chosenCategory === category) {
      return (
        <span
          key={index}
          className='categoryNavItem chosen'
          value={category}
          onClick={props.selectCategory}
        >
          {category}
        </span>
      );
    } else {
      return (
        <span
          key={index}
          className='categoryNavItem'
          value={category}
          onClick={props.selectCategory}
        >
          {category}
        </span>
      );
    }
  });
  return <div>{categories}</div>;
};

export default Categories;
