import React from 'react';

const PostingShow = (props) => {
  let posting = props.postings.find((posting) => {
    return posting.id === parseInt(props.match.params.id);
  });
  console.log(props.match.params.id);
  return (
    <div>
      <h1>{posting.name}</h1>
      <p>It hurts a lot</p>
    </div>
  );
};

export default PostingShow;
