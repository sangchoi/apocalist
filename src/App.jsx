import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import PostingShow from './PostingShow';
import CreatePosting from './CreatePosting';
import Postings from './Postings';
//Components we put into our render
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const postList = ['Boots', 'Gun', 'Canned Beans', 'Knife', 'Toothbrush'];
const categories = [
  'clothing',
  'hygiene',
  'transportation',
  'food/drink',
  'shelter',
  'entertainment',
  'services',
  'medical',
  'tools',
  'electronics',
];
const postings = [
  {
    id: 1,
    item: 'baby food',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Lisa',
    category: 'food',
    imageUrl: './images/babyfood1.jpg',
    tags: ['food', 'baby'],
    datePosted: '78',
    popularity: '9',
  },
  {
    id: 2,
    item: 'baby food',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Mike',
    category: 'food',
    imageUrl: './images/babyfood2.jpg',
    tags: ['food', 'baby'],
    datePosted: '56',
    popularity: '98',
  },
  {
    id: 3,
    item: 'baby food',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Carlos',
    category: 'food',
    imageUrl: './images/babyfood3.jpg',
    tags: ['food', 'baby'],
    datePosted: '34',
    popularity: '44',
  },
  {
    id: 4,
    item: 'baby pasta',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Owen',
    category: 'food',
    imageUrl: './images/babypasta.jpg',
    tags: ['food', 'baby'],
    datePosted: '77',
    popularity: '34',
  },
  {
    id: 5,
    item: 'baseball bat',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'SeQuoia',
    category: 'baseball bat',
    imageUrl: './images/bat.jpg',
    tags: ['sports', 'weapon', 'entertainment'],
    datePosted: '22',
    popularity: '23',
  },
  {
    id: 6,
    item: 'fresh eggs',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Golshid',
    category: 'food',
    imageUrl: './images/eggs.jpg',
    tags: ['food', 'fresh', 'chicken'],
    datePosted: '34',
    popularity: '12',
  },
  {
    id: 7,
    item: 'first aid kit',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Sang',
    category: 'first aid',
    imageUrl: './images/firstaidkit.png',
    tags: ['medical', 'bandages'],
    datePosted: '56',
    popularity: '33',
  },
  {
    id: 8,
    item: 'headphones',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Emma',
    category: 'electronics',
    imageUrl: './images/headphones.png',
    tags: ['music', 'electronics', 'music'],
    datePosted: '44',
    popularity: '78',
  },
  {
    id: 9,
    item: 'moisturizer',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Kenny',
    category: 'hygiene',
    imageUrl: './images/moisturizer.jpg',
    tags: ['skincare', 'lotion'],
    datePosted: '22',
    popularity: '9',
  },
  {
    id: 10,
    item: 'red jacket',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Charles',
    category: 'clothing',
    imageUrl: './images/redjacket.jpg',
    tags: ['clothes', 'jacket', 'coat', 'red'],
    datePosted: '22',
    popularity: '90',
  },
  {
    id: 11,
    item: 'shoes',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Steve',
    category: 'clothing',
    imageUrl: './images/shoes.png',
    tags: ['clothes', 'shoes', 'pretty'],
    datePosted: '78',
    popularity: '67',
  },
  {
    id: 12,
    item: 'sonicare toothbrush',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'FX',
    category: 'hygiene',
    imageUrl: './images/sonicare.jpg',
    tags: ['toothbrush', 'electronic'],
    datePosted: '78',
    popularity: '65',
  },
  {
    id: 13,
    item: 'tampons',
    description:
      'this is a brief but adequate description of the item or service on apocalist',
    seller: 'Gavin',
    category: 'hygiene',
    imageUrl: './images/tampons.png',
    tags: ['feminine care', 'hygiene', 'personal care'],
    datePosted: '78',
    popularity: '31',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postings: postings,
      categories: categories,
      postsToDisplay: postList,
      fullPostList: postList,
      filterValue: '',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  searchPostings = () => {
    let found = false;
    for (let i = 0; i < postings.length; i++) {
      if (this.state.postings[i].item.toLowerCase() == 'tampons') {
        found = true;
        if (found) {
          return this.state.postings[i];
        }
      }
    }
  };

  handleFilterChange = (event) => {
    event.preventDefault();
    let filterValue = event.target.value;
    this.setState((state, props) => {
      let postsToDisplay = state.fullPostList.filter((post) => {
        return post.toLowerCase().includes(filterValue.toLowerCase());
      });
      return { postsToDisplay: postsToDisplay, filterValue };
    });
  };

  render() {
    const postings = this.state.postings;
    const categories = this.state.categories;
    const handleFilterChange = this.handleFilterChange;
    const filterValue = this.state.filterValue;
    const postsToDisplay = this.state.postsToDisplay;

    return (
      <Router>
        <div className='App'>
            <div className='createPostingButtonDiv'>
              <Link to='/create-posting'>
                <FontAwesomeIcon icon={faPlus} size='1x' color='#000000' />
                Create a Posting
              </Link>
            </div>
          <Route
            path='/'
            exact
            render={(props) => (
              <Home
                postings={postings}
                categories={categories}
                filterValue={filterValue}
                handleFilterChange={handleFilterChange}
                postsToDisplay={postsToDisplay}
                {...props}
              />
            )}
          />
          <Route path='/create-posting' component={CreatePosting} />
          <Route
            path='/postings/'
            exact
            render={(props) => <Postings postings={postings} {...props} />}
          />
          <Route
            path='/postings/:id'
            render={(props) => <PostingShow postings={postings} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
