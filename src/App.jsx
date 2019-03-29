import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Categories from './Categories';
import CategoriesShow from './CategoriesShow';
import Contact from './Contact';
//Components we put into our render
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, item: 'baby food', seller: 'Lisa', category: 'food', imageUrl: './images/babyfood1.jpg', tags: ['food', 'baby'], datePosted: '78', popularity: '9'},
        { id: 2, item: 'baby food', seller: 'Mike', category: 'food', imageUrl: './images/babyfood2.jpg', tags: ['food', 'baby'], datePosted: '56', popularity: '98'},
        { id: 3, item: 'baby food', seller: 'Carlos', category: 'food', imageUrl: './images/babyfood3.jpg', tags: ['food', 'baby'], datePosted: '34', popularity: '44'},
        { id: 4, item: 'baby pasta', seller: 'Owen', category: 'food', imageUrl: './images/babypasta.jpg', tags: ['food', 'baby'], datePosted: '77', popularity: '34'},
        { id: 5, item: 'baseball bat', seller: 'SeQuoia', category: 'baseball bat', imageUrl: './images/bat.jpg', tags: ['sports', 'weapon', 'entertainment'], datePosted: '22', popularity: '23'},
        { id: 6, item: 'fresh eggs', seller: 'Golshid', category: 'food', imageUrl: './images/eggs.jpg', tags: ['food', 'fresh', 'chicken'], datePosted: '34', popularity: '12'},
        { id: 7, item: 'first aid kit', seller: 'Sang', category: 'first aid', imageUrl: './images/firstaidkit.png', tags: ['medical', 'bandages'], datePosted: '56', popularity: '33'},
        { id: 8, item: 'headphones', seller: 'Emma', category: 'electronics', imageUrl: './images/headphones.png', tags: ['music', 'electronics', 'music'], datePosted: '44', popularity: '78'},
        { id: 9, item: 'moisturizer', seller: 'Kenny', category: 'hygiene', imageUrl: './images/moisturizer.jpg', tags: ['skincare', 'lotion'], datePosted: '22', popularity: '9'},
        { id: 10, item: 'red jacket', seller: 'Charles', category: 'clothing', imageUrl: './images/redjacket.jpg', tags: ['clothes', 'jacket', 'coat', 'red'], datePosted: '22', popularity: '90'},
        { id: 11, item: 'shoes', seller: 'Steve', category: 'clothing', imageUrl: './images/shoes.png', tags: ['clothes', 'shoes', 'pretty'], datePosted: '78', popularity: '67'},
        { id: 12, item: 'sonicare toothbrush', seller: 'FX', category: 'hygiene', imageUrl: './images/sonicare.jpg', tags: ['toothbrush', 'electronic'] , datePosted: '78', popularity: '65'},
        { id: 13, item: 'tampons', seller: 'Gavin', category: 'hygiene', imageUrl: './images/tampons.png', tags: ['feminine care', 'hygiene', 'personal care' ], datePosted: '78', popularity: '31'}
      ],
    };
  }
  render() {
    const categories = this.state.categories;

    return (
      <Router>
        <div className='App'>
          <nav>
            <Link to='/'>Home</Link> |<Link to='/categories'>Categories</Link> |
            <Link to='/contact'>Create a Posting</Link>
          </nav>
          <Route path='/' exact component={Home} />
          <Route
            path='/categories'
            exact
            render={() => <Categories categories={categories} />}
          />
          <Route path='/contact' component={Contact} />
          <Route
            path='/categories/:id'
            render={(props) => (
              <CategoriesShow categories={categories} {...props} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
