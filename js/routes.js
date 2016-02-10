import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Login from './components/Login';

class App extends Component {  
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        { this.props.children }
      </div>
    );
  }
}

class Home extends Component {
  render(){
    return (
      <div>
        <h2>Home</h2>
        <div>Some home page content</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
  </Route>
)
