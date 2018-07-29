import React, { Component, Fragment } from 'react'
import SubmissionCard from '../components/SubmissionCard'

class Home extends Component {
  render() {
    const { submissions } = this.props
    return(
      <Fragment>
      <SubmissionCard submissions={submissions} />
      </Fragment>
    )
  }
}

export default Home