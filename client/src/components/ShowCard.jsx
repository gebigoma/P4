import React, { Component } from 'react'
import {
  FacebookShareButton,
  // TwitterShareButton,
  // WhatsappShareButton,
  // PinterestShareButton,
  // RedditShareButton,
  // TumblrShareButton,
  // EmailShareButton,

  FacebookIcon
} from 'react-share';
import '../styles/share.css'

class ShowCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  render() {
  const { submission } = this.props;
  const shareUrl = `${this.formatLink(window.location.href)}`;
  const title = `${submission.title}`;
  console.log(window.location.href)

    return (
      <div>
        <p>{submission.title}</p>
        <p>{submission.body}</p>
        <p> <a href={this.formatLink(submission.post_url)} target="_blank"> <img alt={submission.title} src={submission.featuredImageUrl} /> </a></p>
        <p>{submission.tags.join(', ')}</p>
        <p>{submission._by.name}</p>

        <FacebookShareButton 
          url={shareUrl} 
          quote={title}
          className="share-button"
          >
            <FacebookIcon /> 
        </ FacebookShareButton>

      </div>
    )
  } 
}

export default ShowCard