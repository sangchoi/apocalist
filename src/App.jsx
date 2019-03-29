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

const postList = [];
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
    item: 'Ammunition',
    tradeValue: '200 x Cigarettes',
    location: 'Bellevue',
    description:
      "Running Low on cigarettes and need some fast! Found these in the basement but don't have the right gun. 15 total.",
    seller: 'Jim Bo',
    category: 'weapons',
    imgUrl:
      'http://3.bp.blogspot.com/-A4LNp2BzAPk/TkqhzES9mNI/AAAAAAAAK48/ALIXFqWA38U/s1600/AK-47+Gun+Bullets.jpg',
    date: '31 Mar 3022',
    popularity: 76,
  },

  {
    id: 2,
    item: 'Baby Food',
    tradeValue: '100 x cigarettes',
    location: 'Capitol Hill',
    description:
      'Picked these up on my trek from Tacoma. Worth 100 cigarettes but will trade for a gallon of water.',
    seller: 'Mary',
    category: 'food/drink',
    imgUrl:
      'https://photos.offerup.com/CNm75KKi1SF7loUSRVXM8FezBSo=/600x800/f6f4/f6f42d58b28941778373cc599b7a27f1.jpg',
    date: '1 Feb 3022',
    popularity: 37,
  },
  {
    id: 3,
    item: 'Knives',
    tradeValue: '670 x cigarettes',
    location: 'Lake City',
    description:
      'In desperate need of medical equipment. Wiling to let some of our extra knives go.',
    seller: 'Brandon',
    category: 'weapons',
    imgUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/0f/e1/9c/76/our-selection-of-knives.jpg',
    date: '29 March 3022',
    popularity: '72',
  },

  {
    id: 4,
    item: 'First Aid Kit',
    tradeValue: '840 x cigarettes',
    location: 'Seattle',
    description:
      'Value is for each kit. Open to trade as an entire kits or as individual items. Let me know.',
    seller: 'Nurse Karen',
    category: 'medical',
    imgUrl:
      'https://photos.offerup.com/bSMLmPrSR-liRyAs69hIicwXqxU=/600x450/0da3/0da3e33c741448b39ea59bcad2d44490.jpg',
    date: '29 March 3022',
    popularity: '88',
  },

  {
    id: 5,
    item: 'Feminine Hygiene Products',
    tradeValue: '180 x cigarettes',
    location: 'Seattle',
    description:
      'Found these in store raid. No females in my group. Good for plugging wounds too. Make an offer.',
    seller: 'Alex B',
    category: 'hygiene',
    imgUrl:
      'https://photos.offerup.com/Qvc_E4qdNX24tBI0Bs1rZTQl89s=/600x450/93b7/93b703b9a82e44f79b4d3350a574d942.jpg',
    date: '2 March 3022',
    popularity: '52',
  },

  {
    id: 6,
    item: 'boots',
    tradeValue: '410 x cigarettes',
    location: 'Tacoma',
    description: 'Barely used. Good boots for long treks.',
    seller: 'James',
    category: 'clothing',
    imgUrl:
      'https://photos.offerup.com/A6z6V35y-6aC-8ZA5tFdB5ZifPM=/600x447/7f30/7f3097d2e3aa481cb1fffaa87ffc5ebe.jpg',
    date: '26 March 3022',
    popularity: '90',
  },

  {
    id: 7,
    item: 'MiniBot',
    tradeValue: '900 x cigarettes',
    location: 'Seattle',
    description:
      'Took out some bots and got a minibot in the process. They don’t work (put some bullets through ‘em) but they make good trophy conversation pieces.',
    seller: 'Kim',
    category: 'electronics',
    imgUrl:
      'https://dpadblogdotcom.files.wordpress.com/2014/06/della05.jpg?w=630',
    date: '26 March 3022',
    popularity: '98',
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
      displayedPostings: [],
      categoryBeenSelected: false,
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.searchPostings = this.searchPostings.bind(this);
  }

  searchPostings = (categoryName) => {
    let postings = this.state.postings;
    let found = false;
    let postingsInCategory = [];
    console.log(categoryName);
    for (let i = 0; i < postings.length; i++) {
      console.log(postings[i].category.toLowerCase());
      console.log(categoryName);
      if (postings[i].category.toLowerCase() === categoryName) {
        found = true;
        console.log('found');
        if (found) {
          postingsInCategory.push(postings[i]);
          console.log('pushed to postingsInCategory');
        }
      }
    }
    this.setState({
      displayedPostings: postingsInCategory,
      categoryBeenSelected: true,
    });
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
    const searchPostings = this.searchPostings;
    const displayedPostings = this.state.displayedPostings;
    const categoryBeenSelected = this.state.categoryBeenSelected;

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
            path='/home'
            exact
            render={(props) => (
              <Home
                postings={postings}
                categories={categories}
                filterValue={filterValue}
                handleFilterChange={handleFilterChange}
                postsToDisplay={postsToDisplay}
                searchPostings={searchPostings}
                categoryBeenSelected={categoryBeenSelected}
                displayedPostings={displayedPostings}
                {...props}
              />
            )}
          />
          <Route path='/create-posting' component={CreatePosting} />
          <Route
            path='/postings/'
            exact
            render={(props) => (
              <Postings
                postings={postings}
                categoryBeenSelected={categoryBeenSelected}
                displayedPostings={displayedPostings}
                {...props}
              />
            )}
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
