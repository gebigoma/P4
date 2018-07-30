import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Grid, Header, Image, Card } from 'semantic-ui-react'
import SocialMedia from './SocialMedia'
import '../styles/share.css'

class ShowCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  render() {
    const { submission, relatedSubmissions } = this.props;

    return (
      <Fragment>
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
        <Card.Group centered doubling>
          {relatedSubmissions.map((r) => {
            return (
              <Card key={r._id}>
                <a href={this.formatLink(r.post_url)} target="_blank">
                  <Image alt={r.title} src={r.featuredImageUrl} />
                </a>
                <Card.Content>
                  <Card.Header>
                    <Link to={`/submissions/${r._id}`}>{this.toTitleCase(r.title)}</Link>
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>{r.tags.join(', ')}</span>
                  </Card.Meta>
                  <Card.Description>{r.body}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <span className="right floated">By: <Link to={`/collection/${r._by._id}`}>{r._by.name}</Link></span>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Fragment>
    )
  }
}

export default ShowCard