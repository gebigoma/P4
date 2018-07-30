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
        this.setState({ submission: apiResponse.data.payload, relatedPosts: apiResponse.data.relatedPosts })
      })
  }

  render() {
    const { submission, relatedPosts } = this.state;
    if (!submission) return <h1>Loading...</h1>
    return ( 
      <div>
        <ShowCard submission={submission} />
        {relatedPosts.map(s => {
          return <h2 key={s._id}>{s.title}</h2>
        })}
      </div>
    )
  }
}

export default ShowSubmission