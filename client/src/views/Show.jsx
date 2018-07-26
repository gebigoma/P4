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
    // console.log(id)
    apiClient({ method: 'get', url: `/api/submissions/${id}` })
      .then((apiResponse) => {
        this.setState({ submission: apiResponse.data.payload })
      })
  }

  render() {
    const { submission } = this.state;
    if (!submission) return <h1>Loading...</h1>
    return ( 
      <ShowCard submission={submission} />
    )
  }
}

export default ShowSubmission