import React from 'react';
import { Link } from 'react-router-dom';

const Postings = (props) => {
  if (props.categoryBeenSelected === false) {
    let postings = props.postings.map((posting, index) => {
      let followLink = () => {
        props.history.push(`/postings/${posting.id}`);
      };
      return (
        <div key={index} className='postingCard'>
          <Link to={`/postings/${posting.id}`} onClick={followLink}>
            <img src={posting.imgUrl} alt='posting' className='postingImage' />
          </Link>
          <div className='postingBody'>
            <Link to={`/postings/${posting.id}`} onClick={followLink}>
              {posting.item}
            </Link>
            <span>Location: {posting.location}</span>
          </div>
        </div>
      );
    });
    return <div className='postingsDiv'>{postings}</div>;
  } else {
    let postings = props.displayedPostings.map((posting, index) => {
      let followLink = () => {
        props.history.push(`/postings/${posting.id}`);
      };
      return (
        <div key={index} className='postingCard'>
          <Link to={`/postings/${posting.id}`} onClick={followLink}>
            <img src='https://placekitten.com/400/300' alt='' />
          </Link>
          <div className='postingBody'>
            <Link to={`/postings/${posting.id}`} onClick={followLink}>
              {posting.item}
            </Link>
            <p>for sale by {posting.seller}</p>
          </div>
        </div>
      );
    });
    return <div className='postingsDiv'>{postings}</div>;
  }
};

export default Postings;

// id: 2,
//     item: 'baby food',
//     seller: 'Mike',
//     category: 'food',
//     imageUrl: './images/babyfood2.jpg',
//     tags: ['food', 'baby'],
//     datePosted: '56',
//     popularity: '98',
