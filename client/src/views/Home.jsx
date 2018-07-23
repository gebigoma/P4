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

  formatLink(url) {
    if(url.includes('http')) return url
    return `http://${url}`
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
                Image: <a href={this.formatLink(s.body)} target="_blank"><img src={s.img} /></a>  |
                Tags: {s.tags.join(', ')} |
                By: {s._by.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }


}

export default Home