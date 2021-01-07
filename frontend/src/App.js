import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SignupForm from './Pages/SignupForm'
import LoginForm from './Pages/LoginForm'
import Contact from './Pages/Contact';

import Favorites from '../src/components/Favorites'
import CutsPage from '../src/Container/CutsPage'

import 'bootstrap/dist/css/bootstrap.min.css';


const baseUrl = 'http://localhost:3000/'

class App extends Component {

  state = {
    user: {},
    error: ""
  }

  componentDidMount(){
   this.validateUser()
  }

  validateUser = () => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(baseUrl + "profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if(result.id){
          this.setState({
            user: result
          })
        }
      })
    }
  }

  signUp = user => {
    fetch(baseUrl + "users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
          name: user.name,
          phone: user.phone,
          address: user.address
        }
      })
    })
    .then(response => response.json())
    .then(user => this.setState({user}))
  }

  login = (username, password, history) => {
    fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result.user)
      if(result.token){
        localStorage.setItem('token', result.token)
        this.setState({
          user: result.user
        })
        history.push('/')
      } else {
        this.setState({
          error: result.error
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/signup' render={(routerProps) => <SignupForm {...routerProps} signUp={this.signUp} />} />
          <Route path='/login' render={(routerProps) => <LoginForm {...routerProps} login={this.login} error={this.state.error} />} />
          <Route path="/contact" render={(routerProps) => <Contact {...routerProps} /> } />
          <Route path="/cart" render={(routerProps) => <Favorites {...routerProps} /> } />
          <Route path="/" component={CutsPage} user={this.state.user} />
        </Switch>
      </div>
    );
  }
}

export default App;
