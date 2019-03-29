import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PostingShow = (props) => {
  let posting = props.postings.find((posting) => {
    return posting.id === parseInt(props.match.params.id);
  });
  console.log(props.match.params.id);
  return (
    <div className='postingsDiv'>
      <div className='postingCard'>
        <img src={posting.imgUrl} alt='posting' className='postingImage' />
        <div className='postingBody'>
          <span className='showPostingBody'>
            <div className='showPostingTitleDiv'>
              <div>
                <span className='showPostingTitle'>{posting.item}</span> (
                {posting.category}){' '}
              </div>
              <div>Posted On: {posting.date}</div>
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
            {posting.description}
          </span>

          <div className='postingButtonsDiv'>
            <button>Send Message</button>
            <button>
              <FontAwesomeIcon icon={faHeart} size='1x' color='#D93C04' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingShow;
