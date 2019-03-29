import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
            <div className='postingButtonsDiv'>
              <button>Send Message</button>
              <button>
                <FontAwesomeIcon icon={faHeart} size='1x' color='#D93C04' />
              </button>
            </div>
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
            <img src={posting.imgUrl} alt='posting' className='postingImage' />
          </Link>
          <div className='postingBody'>
            <Link to={`/postings/${posting.id}`} onClick={followLink}>
              {posting.item}
            </Link>
            <span>Location: {posting.location}</span>
          </div>
          <div className='postingButtonsDiv'>
            <button>Send Message</button>
            <button>
              <FontAwesomeIcon icon={faHeart} size='1x' color='#D93C04' />
            </button>
          </div>
        </div>
      );
    });
    return <div className='postingsDiv'>{postings}</div>;
  }
};

export default Postings;
