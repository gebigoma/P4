import React, { Component } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard'
import '../styles/home.css'

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
      <div className="container">
      <SubmissionCard submissions={submissions} />
      </div>
    )
  }
}

export default Home