import React, {Component} from 'react'
import httpClient from '../httpClient'
import axios from 'axios'

// show only current user's posts
// probably very simlar to home index just filtered? with current user's posts only
// also show current user's profile info and allow function to edit and delete user's info


class Profile extends Component {
  
  // set state to current user from httpClient
  // state for form data?
  // state for user data?
  
  state = {
    currentUser: httpClient.getCurrentUser(), 


  }

  render() {
    console.log(this.state.currentUser)
    return(
      <div>
      {/* 1.get the current users's name to display on profile page */}
      <h1>{JSON.stringify(this.state.currentUser)}</h1>
      </div>
    )
  }
}

export default Profile