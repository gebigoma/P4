import React, { Component, Fragment } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard'

const apiClient = axios.create()

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