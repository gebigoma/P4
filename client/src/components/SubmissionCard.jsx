import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid } from 'semantic-ui-react'

class SubmissionCard extends Component {

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  render() {
    const { submissions } = this.props;

    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div className="SubmissionCard">
                {submissions.map((s) => {
                  return (
                    <Card key={s._id}>
                      <a href={this.formatLink(s.post_url)} target="_blank">
                        <Image alt={s.title} src={s.featuredImageUrl} />
                      </a>
                      <Card.Content>
                        <Card.Header>
                          <Link to={`/submissions/${s._id}`}>{s.title}</Link>
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
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SubmissionCard