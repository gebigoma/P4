import React, { Component } from 'react'
import axios from 'axios'

const apiClient = axios.create()

class ShowSubmission extends Component {
  
  state = {
    submission: null
  }
  
  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    apiClient({ method: 'get', url: `/api/submissions/${id}` })
      .then((apiResponse) => {
        this.setState({ submission: apiResponse.data.payload })

      })
  
  }

  render() {
    const { submission } = this.state;
    if (!submission) return <h1>Loading...</h1>
    console.log(submission)
    return ( 
      <div>
        <p>{submission.title}</p>
        <p>{submission.body}</p>
        <p>{submission.img}</p>
        <p>{submission.tags.join(', ')}</p>
        <p>{submission._by.name}</p>
      </div>

    )
  }
}

export default ShowSubmission