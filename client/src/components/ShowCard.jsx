import React, { Component } from 'react'

class ShowCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  render() {
  const { submission } = this.props;
    return (
      <div>
        <p>{submission.title}</p>
        <p>{submission.body}</p>
        <p> <a href={this.formatLink(submission.post_url)} target="_blank"> <img alt={submission.title} src={submission.featuredImageUrl} /> </a></p>
        <p>{submission.tags.join(', ')}</p>
        <p>{submission._by.name}</p>
      </div>
    )
  } 
}

export default ShowCard