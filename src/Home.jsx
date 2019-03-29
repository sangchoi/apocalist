import React, { Component } from 'react';
import Postings from './Postings';
import Categories from './Categories';
import SearchBar from './SearchBar';

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
      <>
        <div className='pageTitle'>
          <h1>Apocalist</h1>
        </div>
        <div className='horizontalNav'>
          <Categories
            categories={this.props.categories}
            selectCategory={this.selectCategory}
            chosenCategory={this.state.chosenCategory}
            {...this.props}
          />
        </div>
        <div className='searchBarDiv'>
          <SearchBar
            postings={this.props.postings}
            filterValue={this.props.filterValue}
            handleFilterChange={this.props.handleFilterChange}
            {...this.props}
          />
        </div>
        <div className='bodyDiv'>
          {this.props.postsToDisplay}
          <Postings postings={this.props.postings} {...this.props} />
        </div>
      </>
    );
  }
}

export default Home;
