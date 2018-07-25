import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
  // click on user name see how to click from submission name 
    const id = this.props.match.params.id
    console.log(this.props.match.params)
    console.log(`${id}`)
     apiClient({ 
       method: 'get', 
       url: `/api/users/${id}/submissions` 
      })
      .then((apiResponse) => {
        console.log(apiResponse.data)
        let { submissions } = apiResponse.data.payload
        this.setState({ submissions: submissions })
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
              </div>
                  <div className="extra content">
                    Tags: {s.tags.join(' , ')}
                    <span className="right floated">By: {s._by.name}</span>
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

export default Collection