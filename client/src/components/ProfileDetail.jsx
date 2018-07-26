import React, { Component } from 'react'
// import httpClient from '../httpClient'

class ProfileDetail extends Component {

  // state = {
  //   currentUser: httpClient.getCurrentUser()
  // }

  formatLink(url) {
    if (url.includes('http')) return url
    return `http://${url}`
  }

  render() {
    const { fields, currentUser } = this.props
  return (
  <div>
  <h1>{fields.name}</h1>
  <h1>{fields.email}</h1>
  <h1>{fields.website}</h1>
  <h1><a href={this.formatLink(currentUser.website)} target="_blank">{this.formatLink(currentUser.website)}</a></h1>
  </div>
  )
}
}

export default ProfileDetail