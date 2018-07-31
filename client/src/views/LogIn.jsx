import React, { Component } from 'react'
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'
import { Form, Button, Grid, Header, Segment, Message } from 'semantic-ui-react'


class LogIn extends Component {

  state = {
    fields: { email: '', password: '' }
  }

  onInputChange(evt) {
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
      if (user) {
        this.props.onLogInSuccess()
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { email, password } = this.state.fields
    return (
      <div className='login-signup-container'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>Log-in to your account</Header>
            <Form size='large'
              onChange={this.onInputChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}>
              <Segment stacked>
                <Form.Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  placeholder='E-mail address' 
                  name="email" 
                  autoComplete="off" 
                  value={email} 
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password" 
                  autoComplete="off" 
                  value={password}
                />
                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LogIn