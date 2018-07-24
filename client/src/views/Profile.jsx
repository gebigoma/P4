import React, {Component} from 'react'
import httpClient from '../httpClient'
import axios from 'axios'
import SubmitForm from '../components/SubmitForm';
import ProfileForm from './ProfileForm';

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
    submissions: [],
    formEnabled: false
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

  handleChange = (e) => {
    e.preventDefault();
    console.log(this.state)
    let currentUser = Object.assign({}, this.state.currentUser, { [e.target.name]: e.target.value });
    this.setState({ currentUser });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let { name, email, website } = this.state
    //  do something with the token?
    let { _id } = this.state.currentUser;
    console.log(this.state.currentUser)
    apiClient({
      method: 'patch', 
      url: `/api/users/${_id}`, 
      data: { name, email, website }
    })
      .then(response => {
        this.setState({ name: "", email: "", website: "" })
        this.setState({  formEnabled: true})

      })
    // this.setState({  formEnabled: false})
  }

  toggleForm = () => {
    this.setState({ formEnabled: true });
  }

  render() {
    // console.log(this.state.currentUser)
    let { currentUser, submissions, formEnabled} = this.state;
    return(
      <div>
      {/* 1.get the current users's name to display on profile page */}
      {/* <h1>{JSON.stringify(this.state.currentUser)}</h1> */}
      <h1>{currentUser.name}</h1>
      <h1>{currentUser.email}</h1>
      <h1>{currentUser.website}</h1>
      <h1><a href={this.formatLink(currentUser.website)} target="_blank">{this.formatLink(currentUser.website)}</a></h1>
      <div>
        {formEnabled 
        ? <ProfileForm name={currentUser.name} email={currentUser.email} website={currentUser.website} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        : <button onClick={this.toggleForm}>Edit Profile</button>}
      </div>
      </div>
    )
  }
}

export default Profile