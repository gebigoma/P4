import React, { Component } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard';

const apiClient = axios.create()

class Collection extends Component {
  state = {
    submissions: []
  }

  /* 
  grab info from name and set params in url
  set a show route in users users/:id/submissions
  */

  componentDidMount() {
    const id = this.props.match.params.id
    // console.log(this.props.match.params)
    // console.log(`${id}`)
    apiClient({
      method: 'get',
      url: `/api/users/${id}/submissions`
    })
      .then((apiResponse) => {
        // console.log(apiResponse.data)
        let { submissions } = apiResponse.data.payload
        this.setState({ submissions: submissions })
      })
  }

  render() {
    const { submissions } = this.state;
    return (
      <SubmissionCard submissions={submissions} />
    )
  }
}

export default Collection