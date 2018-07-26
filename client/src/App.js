import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import httpClient from './httpClient';
import NavBar from './components/NavBar';
import Home from './views/Home';
import SignUp from './views/SignUp';
import LogIn from './views/LogIn';
import VIP from './views/VIP';
import LogOut from './views/LogOut'
import Submit from './views/Submit'
import Profile from './views/Profile'
import ShowSubmission from './views/Show';
import Collection from './views/Collection';

class App extends Component {

  state = {
    currentUser: httpClient.getCurrentUser()
  }

  onAuthSuccess() {
    this.setState({ currentUser: httpClient.getCurrentUser() })
  }

  onLogOutSuccess() {
    this.setState({ currentUser: null })
  }

  render() {
    return (
      <div className="App container">
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/signup" render={(routeProps) => {
            return (
              <SignUp {...routeProps} 
                onSignUpSuccess={this.onAuthSuccess.bind(this)} 
                />
            )
          }} />
          <Route path="/login" render={(routeProps) => {
            return (
              <LogIn {...routeProps} 
                onLogInSuccess={this.onAuthSuccess.bind(this)} 
                />
            )
          }} />
          <Route path="/vip" render={() => {
            return this.state.currentUser
            ? <VIP />
            : <Redirect to="/login" />
          }} />
          <Route path="/submit" render={(routeProps) => {
            return this.state.currentUser
            ? ( 
              <Submit {...routeProps} 
              onLogInSuccess={this.onAuthSuccess.bind(this)} 
              />
            )
            : <Redirect to="/login" />
          }} />
          <Route path="/profile" render={(routeProps) => {
            return this.state.currentUser
            ? (
              <Profile {...routeProps}
              currentUser={this.state.currentUser}
              onUpdateProfileSuccess={this.onAuthSuccess.bind(this)}
              onDeleteProfileSuccess={this.onLogOutSuccess.bind(this)}
              />
            )
            : <Redirect to="/login" />
          }} />
          <Route path="/logout" render={(routeProps) => {
            return ( 
              <LogOut {...routeProps} 
              onLogOutSuccess={this.onLogOutSuccess.bind(this)} 
              />
            ) 
          }} />
          <Route path="/collection/:id" component={Collection} />
          <Route path="/submissions/:id" component={ShowSubmission} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;