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
        { id: 1, name: 'Deep Clean' },
        { id: 2, name: 'Filling' },
        { id: 3, name: 'Crown' },
        { id: 4, name: 'Root Canal' },
        { id: 5, name: 'Deep Root Canal' },
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
