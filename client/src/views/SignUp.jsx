import React, { Component } from 'react'
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'
import { Form, Button, Grid, Header, Segment, Message } from 'semantic-ui-react'

class SignUp extends Component {

  state = {
    fields: { name: '', website: '', email: '', password: '' }
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
      this.setState({ fields: { name: '', website: '', email: '', password: '' } })
      if (user) {
        this.props.onSignUpSuccess()
        // programtically redirects 
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div className='login-signup-container'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' className="login-signup-color" textAlign='center'>Sign-up for an account</Header>
            <Form size='large'
                onChange={this.onInPutChange.bind(this)}
                onSubmit={this.onFormSubmit.bind(this)}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Name'
                  name="name"
                  autoComplete="off"
                />
                <Form.Input
                  fluid
                  icon='desktop icon'
                  iconPosition='left'
                  placeholder='Website URL'
                  name="website"
                  autoComplete="off"
                />
                <Form.Input
                  fluid
                  icon='paper plane icon'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name="email"
                  autoComplete="off"
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  autoComplete="off"
                />
                <Button fluid size='large'>Sign Up</Button>
              </Segment>
            </Form>
            <Message>
              Already signed up? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SignUp;