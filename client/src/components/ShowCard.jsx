import React, { Component } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,

  FacebookIcon, 
  TwitterIcon,
  PinterestIcon,
  RedditIcon, 
  TumblrIcon,
  EmailIcon
} from 'react-share';
import '../styles/share.css'

class ShowCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  render() {
  const { submission } = this.props;
  const shareUrl = window.location.href;
  const title = `${submission.title}`;
  const hashtag = `#sugarfreegallery`
  const body = `${submission.body}`
  const media = `${submission.featuredImageUrl}`

    return (
      <div>
        <h1>{submission.title}</h1>
        <p>{submission.body}</p>
        <p> <a href={this.formatLink(submission.post_url)} target="_blank"> <img alt={submission.title} src={submission.featuredImageUrl} /> </a></p>
        <p>{submission.tags.join(', ')}</p>
        <p>{submission._by.name}</p>
      
      <div className="display">
        <FacebookShareButton 
          quote={title}
          url={shareUrl}
          hashtag={hashtag} 
          className="share-button">
            <FacebookIcon 
            size={32}
            round/> 
        </ FacebookShareButton>
        </div>

        <div className="display">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="share-button">
          <TwitterIcon
            size={32}
            round />
        </TwitterShareButton>
        </div>

        <div className="display">
        <PinterestShareButton
          url={String(window.location)}
          media={`${String(window.location)}/${media}`}
          windowWidth={1000}
          windowHeight={730}
          className="share-button">
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        </div>

        <div className="display">
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="share-button">
          <RedditIcon
            size={32}
            round />
        </RedditShareButton>
        </div>

        <div className="display">
        <TumblrShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="share-button">
          <TumblrIcon
            size={32}
            round />
        </TumblrShareButton>
        </div>

        <div className="display">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body={body}
          className="share-button">
          <EmailIcon
            size={32}
            round />
        </EmailShareButton>
        </div>

      </div>
    )
  } 
}

export default ShowCard