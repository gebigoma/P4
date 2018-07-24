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
        console.log(apiResponse.data)
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
      
      <div className="ui link cards">
        <div className="card">
        <ul>
          {this.state.submissions.map((s) => {
            return (
              <li key={s._id}>
                <div className="image">
                  <img src={s.img} /* <a href={this.formatLink(s.post_url)} target="_blank"> </a> */ />
                </div>
                <div className="content">
                  <div className="header">
                    <Link to={`/submissions/${s._id}`}> {s.title}</Link>
                  </div>
                  <div className="description">
                    {s.body}
                  </div>
                  <div className="extra content">
                    Tags: {s.tags.join(' , ')} |
                    By: {s._by.name}
                  </div>
              </div>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    )
  }


}

export default Home