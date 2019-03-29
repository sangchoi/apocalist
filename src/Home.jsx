import React, { Component } from 'react';
import Postings from './Postings';
import Categories from './Categories';
import SearchBar from './SearchBar';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCategory: '',
    };
    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory = (e) => {
    this.setState({
      chosenCategory: e.target.getAttribute('value'),
    });
  };

  render() {
    return (
      <div className="home">
        <div className='pageTitle'>
          <h1 className="ApocalistHeader">Apocalist</h1>
        </div>
        <div className='searchBarDiv'>
          <SearchBar
            postings={this.props.postings}
            filterValue={this.props.filterValue}
            handleFilterChange={this.props.handleFilterChange}
            {...this.props}
          />
        </div>
        <div className='horizontalNav'>
          <Categories
            categories={this.props.categories}
            selectCategory={this.selectCategory}
            chosenCategory={this.state.chosenCategory}
            {...this.props}
          />
        </div>
        <div className='bodyDiv'>
          <div className='searchResultsDiv'>{this.props.postsToDisplay}</div>
          <Postings postings={this.props.postings} {...this.props} />
        </div>
      </div>
    );
  }
}

export default Home;
