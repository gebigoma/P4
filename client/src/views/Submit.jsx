import React, { Component } from 'react'
import axios from 'axios'
import SubmitForm from '../components/SubmitForm'

const apiClient = axios.create()

class Submit extends Component {

  state = {
    title: "",
    body: "",
    post_url: "",
    img: "",
    tags: [" "]
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let { title, body, post_url, img, tags } = this.state
    apiClient({
      method: 'post',
      url: '/api/submissions',
      data: { title, body, post_url, img, tags }
    })
    // console.log(this.state)
      .then(response => {
        // console.log(response)
        let id = response.data.payload._id
        // console.log(id)
        // this.setState({ title: "", body: "", image: "", tags: "" })
        this.props.history.push('/')
      })
  }
  render() {
    let { title, body, post_url, img, tags } = this.state
    return (
      <div>
        <h1>Submit</h1>
        <SubmitForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={title}
          body={body}
          post_url={post_url}
          img={img}
          tags={tags}
        />
      </div>
    )
  }
}

export default Submit