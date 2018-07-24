import React, { Component } from 'react'
import axios from 'axios'

const apiClient = axios.create()

class ShowSubmission extends Component {
  
  state = {
    submission: null
  }
  
  componentDidMount() {
    apiClient({ method: 'get', url: `/api/submissions/` })
      .then((apiResponse) => {
        // console.log(apiResponse)
        this.setState({ submission: apiResponse.data.payload })
      })
  
  }

  render() {
    const { submission } = this.state
    if (!submission) return <h1>Loading...</h1>
    return ( 
      <div>
        <p>{submission.title}</p>
        <p>{submission.body}</p>
        <p>{submission.img}</p>
        <p>{submission.tags}</p>
        <p>{submission._by}</p>
      </div>

    )
  }
}

export default ShowSubmission