import React, { Component, Fragment } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const apiClient = axios.create()

class Home extends Component {
  
  state = {
    submissions: []
  }

  componentDidMount() {
    apiClient({ method: 'get', url: '/api/submissions' })
      .then((apiResponse) => {
        // console.log(apiResponse.data)
        const submission = apiResponse.data.payload
        this.setState({ submissions: submission })
      })
  }

  render() {
    const { submissions } = this.state
    return(
      <Fragment>
      <SubmissionCard submissions={submissions} />

        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>


  
      </Fragment>
    )
  }
}

export default Home