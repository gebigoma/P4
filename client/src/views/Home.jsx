import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    return(
      <div>
        <ul>
          {this.state.submissions.map((s) => {
            return (
              <li key={s._id}>
                Title:
                  <Link to={`/submissions/${s._id}`}> {s.title}</Link> |
                Description: {s.body} |
                Image: {s.img} |
                Tags: {s.tags} |
                By: {s._by}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }


}

export default Home