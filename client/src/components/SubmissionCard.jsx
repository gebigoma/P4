import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid } from 'semantic-ui-react'


class SubmissionCard extends Component {

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
    const { submissions } = this.props;

    return (
      <div>
        <Card.Group centered doubling>
          {submissions.map((s) => {
            return (
              <Card key={s._id}>
                <a href={this.formatLink(s.post_url)} target="_blank">
                  <Image alt={s.title} src={s.featuredImageUrl} />
                </a>
                <Card.Content>
                  <Card.Header>
                    <Link to={`/submissions/${s._id}`}>{this.toTitleCase(s.title)}</Link>
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>{s.tags.join(', ')}</span>
                  </Card.Meta>
                  <Card.Description>{s.body}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <span className="right floated">By: <Link to={`/collection/${s._by._id}`}>{s._by.name}</Link></span>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </div>
    )
  }
}

export default SubmissionCard