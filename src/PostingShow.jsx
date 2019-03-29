import React from 'react';

const PostingShow = (props) => {
  let posting = props.postings.find((posting) => {
    return posting.id === parseInt(props.match.params.id);
  });
  console.log(props.match.params.id);
  return (
    <div className='postingShowDiv'>
      <img src='http://placekitten.com/500/600' alt='' />
      <div className='postingShowBody'>
        <h1>{posting.item}</h1>
        <p>
          for sale by {posting.seller}
          <br />
          {posting.description}
        </p>
      </div>
    </div>
  );
};

export default PostingShow;
