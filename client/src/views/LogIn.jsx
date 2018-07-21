import React, { Component } from 'react'
import httpClient from '../httpClient'

class LogIn extends Component {
  
  state = {
    fields: { email: '', password: '' }
  }
  
  onInputChange(evt){
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  } 

  onFormSubmit(evt) {
    evt.preventDefault()
    httpClient.logIn(this.state.fields).then((user) => {
      if(user) {
        this.props.onLogInSuccess()
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { email, password } = this.state.fields
    return (
      <div className="LogIn">
        <div className="row">
          <div className="">
            <h1>Log In</h1>
            <form
              onChange={this.onInputChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}>
              <input type="text" placeholder="Email" name="email" autoComplete="off" value={email} />
              <input type="password" placeholder="Password" name="password" autoComplete="off" value={password} />
              <button>Log In</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default LogIn