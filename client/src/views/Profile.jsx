import React, { Component, Fragment } from 'react'
import httpClient from '../httpClient'
import axios from 'axios'
import ProfileForm from '../components/ProfileForm';
import SubmissionCard from '../components/SubmissionCard'
import ProfileDetail from '../components/ProfileDetail'
import { Container, Button, Segment } from 'semantic-ui-react'

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
        console.log(apiResponse.data.payload)
        // submissions payload is in user payload
        let { submissions } = apiResponse.data.payload;
        this.setState({ submissions: submissions })
      })
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
    let { fields, formEnabled, submissions } = this.state;
    let { currentUser } = this.props
    return (
      <Fragment>
<Container>
      <Segment.Group>
      <Segment><ProfileDetail fields={fields} currentUser={currentUser} /></Segment>
        <Segment>{formEnabled
              ? <ProfileForm 
                  name={fields.name}  
                  email={fields.email} 
                  website={fields.website} 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit} 
                  deleteProfile={this.deleteProfile} />
              : <Button onClick={this.toggleForm}>Edit Profile</Button>
              }</Segment>
      </Segment.Group>

</Container>
      <SubmissionCard submissions={submissions} />
      </Fragment>
      /* <Fragment >
          <Segment>
          <ProfileDetail fields={fields} currentUser={currentUser} />
            {formEnabled
              ? <ProfileForm 
                  name={fields.name}  
                  email={fields.email} 
                  website={fields.website} 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit} 
                  deleteProfile={this.deleteProfile} />
              : <Button floated="right" onClick={this.toggleForm}>Edit Profile</Button>
              }

        <SubmissionCard submissions={submissions} />
        </Segment>
      </ Fragment> */
    )
  }
}

export default Profile   