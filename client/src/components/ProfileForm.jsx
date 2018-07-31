import React from 'react';
import { Form, Segment } from 'semantic-ui-react'

const ProfileForm = (props) => {
  let { name, email, website, handleSubmit, handleChange, deleteProfile } = props;

  return (
    <Segment inverted>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid label='Name'
            placeholder='Name'
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <Form.Input
            fluid label='Email'
            placeholder='Email'
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <Form.Input
            fluid label='Website'
            placeholder='Website'
            type="text"
            name="website"
            onChange={handleChange}
            value={website}
          />
        </Form.Group>
        <Form.Button type="submit">Submit</Form.Button>
        {/* <Form.Button>Submit</Form.Button> */}
        <Form.Button color='red' size='mini' onClick={deleteProfile}>Delete Profile</ Form.Button>
      </Form>
    </Segment>
  )
};

export default ProfileForm;