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


class SocialMedia extends Component {
  
  const { title, shareUrl, hashtag, body } = this.props

  render() {
    return (
      <div>
        <div className="display">
          <FacebookShareButton
            quote={title}
            url={shareUrl}
            hashtag={hashtag}
            className="share-button">
            <FacebookIcon
              size={32}
              round />
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
            media={`${String(window.location)}/${submission.featuredImageUrl}`}
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

export default SocialMedia
