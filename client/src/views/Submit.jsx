import React, { Component } from 'react'
import axios from 'axios'
import SubmitForm from '../components/SubmitForm'

const apiClient = axios.create()

class Submit extends Component {

  state = {
    title: "",
    body: "",
    post_url: "",
    tags: [" "],
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

  // fileUploadHandler = () => {
  //   const fd = new FormData()
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
  //   // stores file in cloud storage
    // axios.post('my-domain.com/file-upload', fd, {
    //   onUploadProgress: progressEvent => {
    //     console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    //   }
    // })
  //     .then(res => {

  //     })
  // }

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
        this.props.history.push('/')
      })
  }
  render() {
    let { title, body, post_url, tags } = this.state
    return (
      <div>
        <h1>Submit</h1>
        <SubmitForm
          handleChange={this.handleChange}
          handleFileSelect={this.handleFileSelect}
          handleSubmit={this.handleSubmit}
          title={title}
          body={body}
          post_url={post_url}
          tags={tags}
        />
      </div>
    )
  }
}

export default Submit