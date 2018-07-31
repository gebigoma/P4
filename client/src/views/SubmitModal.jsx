import React, { Component } from 'react'
import axios from 'axios'
import SubmitForm from '../components/SubmitForm'
import { Modal } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const apiClient = axios.create()

class SubmitModal extends Component {

  state = {
    title: "",
    body: "",
    post_url: "",
    tags: [""],
    selectedFile : null
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFileSelect = event => {
    console.log(event.target.files[0])
    this.setState ({
      selectedFile: event.target.files[0]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const fd = new FormData()
    let { title, body, post_url, tags } = this.state
    fd.append('title', title)
    fd.append('body', body)
    fd.append('post_url', post_url)
    fd.append('tags', tags)
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    apiClient.post('/api/submissions', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
      .then(response => {
        this.props.onSubmitSuccess(response.data.payload)
        this.props.history.push('/')
        // clear the form
        this.setState({
          title: "",
          body: "",
          post_url: "",
          tags: [" "],
          selectedFile : null
        })
      })
  }
  render() {
    let { title, body, post_url, tags } = this.state
    const { open, onClose } = this.props
    return (
      <div>
        <Modal open={open} onClose={onClose}>
          <Modal.Content>
          <SubmitForm
          handleChange={this.handleChange}
          handleFileSelect={this.handleFileSelect}
          handleSubmit={this.handleSubmit}
          title={title}
          body={body}
          post_url={post_url}
          tags={tags}
        />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

// withRouter is a function that comes with react-router-dom
// it creates a version of your component that comes with all of the
// route props we need (for instance, to redirect...)
export default withRouter(SubmitModal)