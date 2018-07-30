import React, { Component } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard';

const apiClient = axios.create()

class Collection extends Component {
  state = {
    submissions: [],
    submissionBy: ""
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
        console.log(apiResponse.data)
        let { submissions } = apiResponse.data.payload   
        let { submissionBy } =  apiResponse.data.payload.submissions[0]._by.name
        console.log(apiResponse.data.payload.submissions[0]._by.name)
        this.setState({ submissions: submissions, submissionBy: submissionBy })
      })
  }

  render() {
    const { submissions, submissionBy } = this.state;
    // if (!submissionBy) return <h1>Loading...</h1>
    return (
      <div>
      {/* <h1>{submissionBy}</h1> */}
      <SubmissionCard submissions={submissions} />
      </div>
    )
  }
}

export default Collection