import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Grid, Header, Image} from 'semantic-ui-react'
import SocialMedia from './SocialMedia'
import '../styles/share.css'

class ShowCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }   

  render() {
    const { submission } = this.props;

    return (
      <Container>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column floated='right' width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  {this.toTitleCase(submission.title)}
                </Header>
                <p style={{ fontSize: '1.33em' }}>{submission.body}</p>
                <p style={{ fontSize: '1.33em' }}>{submission.tags.join(', ')}</p>
                <p>Submitted by: <Link to={`/collection/${submission._by._id}`}>{this.toTitleCase(submission._by.name)}</Link></p>
                <SocialMedia submission={submission} />
              </Grid.Column>
              <Grid.Column floated='left' width={6}>
                <a href={this.formatLink(submission.post_url)} target="_blank">
                  <Image bordered rounded size='large' src={submission.featuredImageUrl} /> </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default ShowCard