import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import PostingShow from './PostingShow';
import CreatePosting from './CreatePosting';
import Postings from './Postings';
//Components we put into our render
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
  { id: 1, name: 'Boots' },
  { id: 2, name: 'Gun' },
  { id: 3, name: 'Canned Beans' },
  { id: 4, name: 'Knife' },
  { id: 5, name: 'Toothbrush' },
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
      if (this.state.postings[i].name == 'Boots') {
        found = true;
        break;
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
          <nav>
            <Link to='/'>Home</Link>|
            <Link to='/create-posting'>Create a Posting</Link>
          </nav>
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
