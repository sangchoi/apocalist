import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Procedures from './Procedures';
import ProcedureShow from './ProcedureShow';
import Contact from './Contact';
//Components we put into our render
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      procedures: [{id:1, name: 'Deep Clean'},
      {id:2, name: 'Filling'},
      {id:3, name: 'Crown'},
      {id:4, name: 'Root Canal'},
      {id:5, name: 'Deep Root Canal'}]
    }
  }
  render() {
    const procedures = this.state.procedures


    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> |{' '}
            <Link to='/procedures'>Procedures</Link> |{' '}
            <Link to='/contact'>Contact</Link>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/procedures' exact render={() => <Procedures procedures={procedures} />} />
          <Route path='/contact' component={Contact} />
          {/* props comes from BrowserRouter as location, history, match */}
          <Route path='/procedures/:id' render={(props)=> <ProcedureShow procedures={procedures} {...props}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
