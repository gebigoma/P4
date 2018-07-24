import React, { Component } from 'react'
import httpClient from '../httpClient'
import { Link } from 'react'
import axios from 'axios'
import ProfileForm from '../components/ProfileForm';
const apiClient = axios.create()


class Profile extends Component {

  // set state to current user from httpClient
  // state for form data?
  // state for user data?

  state = {
    fields: { ...this.props.currentUser },
    submissionsFromCurrentUser: [],
    formEnabled: false
  }

  /* 
  get current user's submissions only 
  current user is httpClient.getCurrentUser()
  how are the submissions defined?
  submissions from currentUser
  get all submissions on page
  
  */


  componentDidMount() {
    const { _id } = this.props.currentUser;
    apiClient({
      method: 'get',
      url: `/api/users/${_id}`
      // see user routes added post find to show route
    })
      .then((apiResponse) => {
        console.log(apiResponse.data.payload)
        // submissions payload in user payload
        let { submissions } = apiResponse.data.payload;
        this.setState({ submissionsFromCurrentUser: submissions })
      })
  }

  formatLink(url) {
    if (url.includes('http')) return url
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
    let { fields, formEnabled } = this.state;
    let { currentUser } = this.props
    return (
      <div>
        {/* 1.get the current users's name to display on profile page */}
        {/* <h1>{JSON.stringify(this.state.currentUser)}</h1> */}
        <h1>{currentUser.name}</h1>
        <h1>{currentUser.email}</h1>
        <h1>{currentUser.website}</h1>
        <h1><a href={this.formatLink(currentUser.website)} target="_blank">{this.formatLink(currentUser.website)}</a></h1>
        <div>
          {formEnabled
            ? <ProfileForm name={fields.name} email={fields.email} website={fields.website} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            : <button onClick={this.toggleForm}>Edit Profile</button>}
        </div>
        <div>
          <a href='#' onClick={this.deleteProfile}>Delete Profile</a>
        </div>


      <div className="ui link cards">
        <div className="card">
        <ul>
          {this.state.submissionsFromCurrentUser.map((s) => {
            return (
              <li key={s._id}>
                <div className="image">
                  <img src={s.img} /* <a href={this.formatLink(s.post_url)} target="_blank"> </a> */ />
                </div>
                <div className="content">
                  <div className="header">
                    {s.title}
                  </div>
                  <div className="description">
                    {s.body}
                  </div>
              </div>
                  <div className="extra content">
                    Tags: {s.tags.join(' , ')}
                    {/* <span className="right floated">By: {s._by.name}</span> */}
                  </div>
              </li>
            )
          })}
        </ul>
        </div>
      </div>


      </div>
    )
  }
}

export default Profile