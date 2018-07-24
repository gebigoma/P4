import React, {Component} from 'react'
import httpClient from '../httpClient'
import axios from 'axios'
import ProfileForm from '../components/ProfileForm';
import LogOut from './LogOut'
const apiClient = axios.create()

// show only current user's posts
// probably very simlar to home index just filtered? with current user's posts only
// also show current user's profile info and allow function to edit and delete user's info


class Profile extends Component {
  
  // set state to current user from httpClient
  // state for form data?
  // state for user data?
  
  state = {
    // currentUser: httpClient.getCurrentUser(),
    fields: { ...this.props.currentUser },
    submissions: [],
    formEnabled: false
  }

  /* 
  get current user's submissions only 
  current user is httpClient.getCurrentUser()
  submissions from currentUser
  get all submissions on page
  */
  
  componentDidMount() {
    console.log(httpClient.getCurrentUser())
    const { _id } = this.props.currentUser;
    apiClient({ 
      method: 'get', 
      url: `/api/users/${_id}`
    })
    apiClient({
      method: 'get',
      url: `/api/submissions/${_id}`
    })
      .then((apiResponse) => {
        let { user, submissions } = apiResponse.data.payload;
        this.setState({ user, submissions })
        this.setState
      })
  }

  formatLink(url) {
    if(url.includes('http')) return url
    return `http://${url}`
  }

  handleChange = (e) => {
    e.preventDefault();
    // console.log(this.state)
    let fields = Object.assign({}, this.state.fields, { [e.target.name]: e.target.value });
    this.setState({ fields });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.fields)
    // let { name, email, website } = this.state.currentUser;
    httpClient.updateProfile(this.state.fields)
      .then(user => {
        this.props.onUpdateProfileSuccess()
      })
  }

  toggleForm = () => {
    this.setState({ formEnabled: true });
  }

  deleteProfile = (e) => {
    e.preventDefault()
    httpClient.deleteProfile()
      .then(response => {
        this.props.onDeleteProfileSuccess()
        this.props.history.push('/')
      })
  }

  render() {
    // console.log(this.state.currentUser)
    let { fields, submissions, formEnabled} = this.state;
    let { currentUser } = this.props
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
        ? <ProfileForm name={fields.name} email={fields.email} website={fields.website} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        : <button onClick={this.toggleForm}>Edit Profile</button>}
      </div>
      <div>
        <a href='#' onClick={this.deleteProfile}>Delete Profile</a>
      </div>
      </div>
    )
  }
}

export default Profile