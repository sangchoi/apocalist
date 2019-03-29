import React from 'react';
import { Link } from 'react-router-dom';

const Postings = (props) => {
  const postings = props.postings.map((procedure, index) => {
    return (
      <div key={index} className='postingCard'>
        <img src='https://placekitten.com/200/300' alt='' />
        <div className='postingBody'>
          <Link to={`/postings/${procedure.id}`}>{procedure.name}</Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className='postingsDiv'>{postings}</div>
    </>
  );
};

export default Postings;
