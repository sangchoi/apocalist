import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Map from './images/LocationMap.png';

const PostingShow = (props) => {
  let posting = props.postings.find((posting) => {
    return posting.id === parseInt(props.match.params.id);
  });
  console.log(props.match.params.id);
  return (
    <div className='postingsDivShow'>
      <div className='showPostingCard'>
        <img src={posting.imgUrl} alt='posting' className='postingImageShow' />
        <div className='postingBody'>
          <span className='showPostingBody'>
            <div className='showPostingTitleDiv'>
              <div />
              <div>
                <FontAwesomeIcon icon={faEllipsisH} size='1x' color='#ffffff' />
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} size='1x' color='#D93C04' />
              </div>
            </div>
            <div className='showPostingTitleDiv'>
              <div>
                <span className='showPostingTitle'>{posting.item}</span> (
                {posting.category}){' '}
              </div>
              <div>
                <small>{posting.date}</small>
              </div>
            </div>
            <div className='showPostingTitleDiv'>
              <div>Trade Value: {posting.tradeValue}</div>
              <div className='available'>Available</div>
            </div>
            Location: {posting.location}
            <br />
            Seller: {posting.seller}
            <br />
            <span className='showPostingTitle'>Description:</span>
            <br />
            <div className='descriptionDiv'>{posting.description}</div>
          </span>
          <div className='postingButtonsDivShow'>
            <button>Send Message</button>
          </div>
        </div>
        <img src={Map} width='350px' />
      </div>
    </div>
  );
};

export default PostingShow;
