import React, { Component } from 'react'
import httpClient from '../httpClient'

class SignUp extends Component {

  state = {
    fields: { name: '', email: '', password: '' }
  }

  onInPutChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    console.log("Signing up..")
    httpClient.signUp(this.state.fields).then((user) => {
      this.setState({ fields: {  name: '', email: '', password: ''} })
      if(user) {
        this.props.onSignUpSuccess()
        // programtically redirects 
        this.props.history.push('/')
      }
    })
  }

  render () {
    return (
      <div className="SignUp">
        <div className="row">
          <div className="">
            <h1>Sign Up</h1>
            <form
              onChange={this.onInPutChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}>
              <input type="text" placeholder="Name" name="name" autoComplete="off" />
              <input type="text" placeholder="Email" name="email" autoComplete="off" />
              <input type="password" placeholder="Password" name="password" autoComplete="off" />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;