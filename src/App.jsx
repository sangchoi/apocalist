import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import PostingShow from './PostingShow';
import CreatePosting from './CreatePosting';
import Postings from './Postings';
//Components we put into our render
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

const postList = [];
const categories = [
  'weapons',
  'clothing',
  'transportation',
  'food',
  'hygiene',
  'shelter',
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
    category: 'food',
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
  {
    id: 8,
    item: 'Rope',
    tradeValue: '320 x Cigarettes',
    location: 'Lacey',
    description:
      '8mm rope. Very reliable. Need to trade for boots or gloves if possible.',
    seller: 'Terry',
    category: 'tools',
    imgUrl:
      'https://photos.offerup.com/-NmCrcRoYjP2Msd63C6gtHXtTs4=/600x800/9304/930444ca013844c89c9a36dac2375fe7.jpg',
    date: '13 Jan 3022',
    popularity: 67,
  },
  {
    id: 9,
    item: 'Bow Saw',
    tradeValue: '80 x Cigarettes',
    location: 'Auburn',
    description:
      'Good for fortifying your home or to kill bots. Whichever you need.',
    seller: 'Skip',
    category: 'tools',
    imgUrl:
      'https://photos.offerup.com/fUbWaoiy1yWORUGXwE22m1Qntas=/567x1008/e92f/e92fe317fda2418e93ab4ba8037f1b67.jpg',
    date: '18 Jan 3022',
    popularity: 50,
  },
  {
    id: 10,
    item: 'Portable Generator',
    tradeValue: '2000 x Cigarettes',
    location: 'Auburn',
    description:
      'Portable generator for your next trek. Works fine just needs batteries. Will trade for clothes medicine.',
    seller: 'Brooke S',
    category: 'tools',
    imgUrl:
      'https://photos.offerup.com/sbtpYm3bIixFu6CwqVL6JOEpPXo=/600x450/abd7/abd7b33890cd448a81f6297723b74713.jpg',
    date: '11 Feb 3022',
    popularity: 83,
  },
  {
    id: 11,
    item: 'Rain Jacket',
    tradeValue: '475 x Cigarettes',
    location: 'Seattle',
    description:
      'Good jacket to stay dry. Will trade for hand held weapon or hygiene bundle.',
    seller: 'Brooke S',
    category: 'clothing',
    imgUrl:
      'https://photos.offerup.com/r3JOqmReAdhBUQjDR7coK_Hju6Y=/600x800/fca1/fca10fdb3dbc42ccaedc204716538ecb.jpg',
    date: '28 Mar 3022',
    popularity: 83,
  },
  {
    id: 12,
    item: 'Vintage Levi Jeans',
    tradeValue: '895 x Cigarettes',
    location: 'Tacoma',
    description: 'Vintage Levi jeans. Found in attic. Make a trade offer.',
    seller: 'Quinn',
    category: 'clothing',
    imgUrl:
      'https://photos.offerup.com/CxICG_Dh6dZ-zx6KOqqkw_uy8YI=/600x800/b722/b722502343e04546bf8957f4b4544646.jpg',
    date: '1 Jan 3022',
    popularity: 99,
  },
  {
    id: 13,
    item: 'Backpack',
    tradeValue: '375 x Cigarettes',
    location: 'Tacoma',
    description: 'Good bag for long trek. Lots of room to hold the essentials.',
    seller: 'Deb',
    category: 'clothing',
    imgUrl:
      'https://photos.offerup.com/mC8vaXnGb_AaQY7KID8V6cuJQhA=/600x800/1c2e/1c2e8676b47d42a5afaedaefb0c0f4b7.jpg',
    date: '3 March 3022',
    popularity: 57,
  },
  {
    id: 14,
    item: 'Tent',
    tradeValue: '775 x Cigarettes',
    location: 'Capital Hill',
    description:
      'Slightly worn but no holes. Really need he cigarettes but am open to trade for hygiene or beer.',
    seller: 'Kolby',
    category: 'shelter',
    imgUrl:
      'https://photos.offerup.com/66OchG_MepxFF_qcTZcgnzKd5qM=/600x450/56e7/56e7632a9f92407582e2b4cddc0e751d.jpg',
    date: '3 March 3022',
    popularity: 62,
  },
  {
    id: 15,
    item: 'Tent Trailer',
    tradeValue: '2300 x Cigarettes',
    location: 'Olympia',
    description:
      'Making the trek to Portland next week and cannot pull this with me. Need gone ASAP. Want to trade for medical supplies and weapons.',
    seller: 'Barb',
    category: 'shelter',
    imgUrl:
      'https://photos.offerup.com/cyxacQokkhgWMYHDG-X_zMKjs4Y=/600x337/4840/4840d91fe667422f89de3e8cb0d2b057.jpg',
    date: '22 March 3022',
    popularity: 44,
  },
  {
    id: 16,
    item: 'Walkie Talkies',
    tradeValue: '1000 x Cigarettes',
    location: 'Seattle',
    description: 'Need batteries but work fine otherwise.',
    seller: 'Jay',
    category: 'electronics',
    imgUrl:
      'https://photos.offerup.com/2HMmFcgsJmCaDJhVT1VuqphK3IU=/600x800/302e/302e8078ecec481abb367ed5c05c9bb2.jpg',
    date: '22 Jan 3022',
    popularity: 73,
  },
  {
    id: 17,
    item: 'Walkie Talkies',
    tradeValue: '80 x Cigarettes',
    location: 'Seattle',
    description:
      'Energizer batteries that recharge. Willing to trade for coat.',
    seller: 'Mikey',
    category: 'electronics',
    imgUrl:
      'https://photos.offerup.com/zXA10w679Caq_MewZliDDtw3Xpo=/600x450/a3fb/a3fba2d9c29a4ee7bbea9b1fd7a3313e.jpg',
    date: '17 Feb 3022',
    popularity: 73,
  },
  {
    id: 18,
    item: 'Bike',
    tradeValue: '700 x Cigarettes',
    location: 'Seattle',
    description:
      'Nice bike. Needs air in tires. Open to other trades- make an offer',
    seller: 'Mikey',
    category: 'transportation',
    imgUrl:
      'https://photos.offerup.com/yI1NTplOW3RWtAKIILPndY37x90=/600x450/f9e7/f9e7af80a2574625ba7abea7ab4f40eb.jpg',
    date: '17 Feb 3022',
    popularity: 81,
  },
  {
    id: 19,
    item: 'Bike',
    tradeValue: '700 x Cigarettes',
    location: 'Seattle',
    description:
      'Going to Canada next week. Willing to pick up others heading that way to. Pay me in hygiene products and booze. Extra points if you can get your hands on some gas too.',
    seller: 'Joan',
    category: 'transportation',
    imgUrl:
      'https://photos.offerup.com/Z7rsDScX4lusA3QbfspErp3FdQc=/600x800/5f81/5f8137e21e6b4e15900b6686f3507ca4.jpg',
    date: '17 Feb 3022',
    popularity: 86,
  },
  {
    id: 20,
    item: '20 x Eggs',
    tradeValue: '20 x Cigarettes',
    location: 'Ballard',
    description:
      'Fair enough, you will have 20 fresh eggs, I will have 20 Cigarettes',
    seller: 'Kristina Hansen',
    category: 'food',
    imgUrl: 'https://tennesseegrassfed.com/wp-content/uploads/2016/04/eggs.jpg',
    date: '22 April 3022',
    popularity: 52,
  },

  {
    id: 21,
    item: '20 x Tuna Cans',
    tradeValue: '70 x cigarettes',
    location: 'Capitol Hill',
    description:
      'Picked these up on my trek from Ballard. Worth 70 cigarettes ',
    seller: 'Lisa',
    category: 'food',
    imgUrl:
      'https://www.fodmapeveryday.com/wp-content/uploads/2018/09/assorted-cans-and-glass-jars-of-tuna-against-a-dark-yellow-background.jpg',
    date: '1 Feb 3022',
    popularity: 77,
  },
  {
    id: 22,
    item: '1 roll Fresh breads',
    tradeValue: '6 x cigarettes',
    location: 'Lake City',
    description: 'Home made breads. Fresh and delicious.',
    seller: 'Henry',
    category: 'food',
    imgUrl:
      'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18182819/fc07go0566-60-main.jpg',
    date: '29 March 3022',
    popularity: '42',
  },

  {
    id: 23,
    item: '3 Pck Pasta',
    tradeValue: '40 x cigarettes',
    location: 'Queen Anne',
    description: 'Value is for 3 Pack.',
    seller: 'Nusret',
    category: 'food',
    imgUrl: 'http://www.greekcorner-prague.com/UserFiles/Testoviny/tes1.jpg',
    date: '29 March 3024',
    popularity: '90',
  },

  {
    id: 24,
    item: '1 pounds Peanut Butter',
    tradeValue: '50 x cigarettes',
    location: 'Seattle',
    description: 'Just try it, You would love it .',
    seller: 'Alex B',
    category: 'hygiene',
    imgUrl:
      'http://www.southernexposure.com/images/large/peanut-carolina-african-runner_LRG.jpg',
    date: '6 May 3022',
    popularity: '82',
  },

  {
    id: 25,
    item: 'Foods for kids ',
    tradeValue: '30 x cigarettes',
    location: 'Tacoma',
    description: 'Kids love it.',
    seller: 'Nila',
    category: 'food',
    imgUrl:
      'https://canigivemydog.com/wp-content/uploads/2011/12/can-i-give-my-dog-baby-food.jpg',
    date: '26 March 3022',
    popularity: '90',
  },

  {
    id: 26,
    item: '1 pound Bean ',
    tradeValue: '20 x cigarettes',
    location: 'Kenmore',
    description: 'Healthy protein food source .',
    seller: 'Kim',
    category: 'food',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Azuki_Beans.jpg/1200px-Azuki_Beans.jpg',
    date: '2 August 3022',
    popularity: '38',
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
              <button>
                <FontAwesomeIcon icon={faPlus} size='1x' color='#ffffff' />{' '}
                Create Posting
              </button>
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
