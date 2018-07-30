import React, { Component } from 'react'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'
import '../styles/profile.css'

class ProfileDetail extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  render() {
    const { fields, currentUser } = this.props
    return (
      <Container>
        <Segment style={{ padding: '1em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column floated='left' width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  {this.toTitleCase(fields.name)}
                </Header>
                <p style={{ fontSize: '1.33em' }}>{fields.email}</p>
                <p style={{ fontSize: '1.33em' }}><a href={this.formatLink(currentUser.website)} target="_blank">{this.formatLink(currentUser.website)}</a></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default ProfileDetail