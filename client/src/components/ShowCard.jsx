import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SocialMedia from './SocialMedia'
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

    return (
      <Container >
        <h1>{submission.title}</h1>
        <p>{submission.body}</p>
        <p> <a href={this.formatLink(submission.post_url)} target="_blank"> <img alt={submission.title} src={submission.featuredImageUrl} /> </a></p>
        <p>{submission.tags.join(', ')}</p>
        <p>{submission._by.name}</p>
      
      <SocialMedia submission={submission} />
    </ Container>
    )
  } 
}

export default ShowCard