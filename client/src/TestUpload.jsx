import React, { Component } from 'react'
import axios from 'axios'

class TestUpload extends Component {
  state = {
    selectedFile : null
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0])
    this.setState ({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    // stores file in cloud storage
    axios.post('my-domain.com/file-upload', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    })
      .then(res => {

      })
  }

  render() {
    return (
      <div className="TestUpload">
      <h1>test image upload</h1>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}


export default TestUpload