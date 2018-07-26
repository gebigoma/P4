import React, { Component } from 'react'
import httpClient from '../httpClient'
import { Link } from 'react'
import axios from 'axios'
import ProfileForm from '../components/ProfileForm';

const apiClient = axios.create()


class Profile extends Component {

  state = {
    // referring to app.js for current user ifo
    fields: { ...this.props.currentUser },
    // hold submissions
    submissions: [],
    // toggle form for updating profile
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
    // add user submitted posts using user show route
    const { _id } = this.props.currentUser;
    apiClient({
      method: 'get',
      url: `/api/users/${_id}`
    })
      .then((apiResponse) => {
        // console.log(apiResponse.data.payload)
        // submissions payload is in user payload
        let { submissions } = apiResponse.data.payload;
        this.setState({ submissions: submissions })
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
    // sending update request to httpClient with fields set from state
    // console.log(this.state.fields)
    httpClient.updateProfile(this.state.fields)
      .then(user => {
    // set state in App /profile route to handle updating token to update user
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
  // set state in App /profile to handle deleting token
        this.props.onDeleteProfileSuccess()
        this.props.history.push('/')
      })
  }

  render() {
    // console.log(this.state.currentUser)
    // fields set from state
    // current user set from App.js
    let { fields, formEnabled } = this.state;
    let { currentUser } = this.props
    return (
      <div>
        <h1>{fields.name}</h1>
        <h1>{fields.email}</h1>
        <h1>{fields.website}</h1>
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
          {this.state.submissions.map((s) => {
            return (
              <li key={s._id}>
                <div className="image">
                <img src={s.featuredImageUrl} /* <a href={this.formatLink(s.post_url)} target="_blank"> </a> */ />
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
                    <span className="right floated">By: {s._by.name}</span>
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