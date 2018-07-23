import React, {Component} from 'react'
import httpClient from '../httpClient'
import axios from 'axios'
import SubmitForm from '../components/SubmitForm'

const apiClient = axios.create()

// show only current user's posts
// probably very simlar to home index just filtered? with current user's posts only
// also show current user's profile info and allow function to edit and delete user's info


class Profile extends Component {
  
  // set state to current user from httpClient
  // state for form data?
  // state for user data?
  
  state = {
    currentUser: httpClient.getCurrentUser(), 
    submissions: []
  }

  /* get current user's submissions only */

  componentDidMount() {
    const { _id } = this.state.currentUser;
    apiClient({ method: 'get', url: `/api/users/${_id}`})
      .then((apiResponse) => {
        let { user, submissions } = apiResponse.data.payload;
        this.setState({ user, submissions })
      })
  }

  formatLink(url) {
    if(url.includes('http')) return url
    return `http://${url}`
  }

  render() {
    // console.log(this.state.currentUser)
    let { currentUser, submissions} = this.state;
    console.log(submissions)
    return(
      <div>
      {/* 1.get the current users's name to display on profile page */}
      <h1>{JSON.stringify(this.state.currentUser)}</h1>
      <h1>{this.state.currentUser.name}</h1>
      <h1><a href={this.formatLink(this.state.currentUser.website)} target="_blank">{this.formatLink(this.state.currentUser.website)}</a></h1>
      </div>
    )
  }
}

export default Profile