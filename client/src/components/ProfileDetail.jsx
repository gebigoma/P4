import React, { Component } from 'react'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'

class ProfileDetail extends Component {


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
    const { fields, currentUser } = this.props
  return (
    <Container>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column floated='left' width={6}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                {this.toTitleCase(fields.name)}
              </Header>
              <p style={{ fontSize: '1.33em' }}>{fields.email}</p>
              <p style={{ fontSize: '1.33em' }}>{fields.website}</p>
              <p style={{ fontSize: '1.33em' }}><a href={this.formatLink(currentUser.website)} target="_blank">{this.formatLink(currentUser.website)}</a></p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>

  // <div>
  // <h1>{fields.name}</h1>
  // <h1>{fields.email}</h1>
  // <h1>{fields.website}</h1>
  // <h1><a href={this.formatLink(currentUser.website)} target="_blank">{this.formatLink(currentUser.website)}</a></h1>
  // </div>
  )
}
}

export default ProfileDetail