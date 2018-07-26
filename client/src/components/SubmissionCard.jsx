import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SubmissionCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  render () {
    const { submissions } = this.props;

    return (
      <div className="ui link cards">
      <div className="card">
        <ul>
          {submissions.map((s) => {
            return (
              <li key={s._id}>
                <div className="image">
                <a href={this.formatLink(s.post_url)} target="_blank"> <img alt={s.title} src={s.featuredImageUrl} /> </a>
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
                  {/* <span className="right floated">By: {s._by.name}</span> */}
                  <span className="right floated">By: <Link to={`/collection/${s._by._id}`}>{s._by.name}</Link></span>
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

export default SubmissionCard