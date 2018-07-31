import React, { Component } from 'react'
import axios from 'axios'
import ShowCard from '../components/ShowCard'

const apiClient = axios.create()

class ShowSubmission extends Component {
  
  state = {
    submission: null
  }
  
  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchSubmission(id)
  }

  componentWillReceiveProps(nextProps) {
    let { id } = this.props.match.params;
    if (id != nextProps.match.params.id) {
      this.fetchSubmission(nextProps.match.params.id);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  fetchSubmission(id) {
    apiClient({ method: 'get', url: `/api/submissions/${id}` })
      .then((apiResponse) => {
        this.setState({ 
          submission: apiResponse.data.payload, 
          relatedSubmissions: apiResponse.data.relatedSubmissions 
        })
      })
  }

  render() {
    const { submission, relatedSubmissions } = this.state;
    if (!submission) return <h1>Loading...</h1>
    return ( 
        <ShowCard 
          submission={submission} relatedSubmissions={relatedSubmissions} />
    )
  }
}

export default ShowSubmission