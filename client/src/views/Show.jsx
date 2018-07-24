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
        this.setState({ submission: apiResponse.data.payload })

      })
  
  }

  render() {
    const { submission } = this.state;
    if (!submission) return <h1>Loading...</h1>
    console.log(submission)
    return ( 
      <div>
        <p>{submission[0].title}</p>
        <p>{submission[0].body}</p>
        <p>{submission[0].img}</p>
        <p>{submission[0].tags.join(', ')}</p>
        <p>{submission[0]._by.name}</p>
      </div>

    )
  }
}

export default ShowSubmission