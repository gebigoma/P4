import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const SubmitForm = (props) => {
  let { handleChange, handleFileSelect, handleSubmit, title, body, post_url, tags } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          autoComplete="off"
          value={title}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Description"
          name="body"
          autoComplete="off"
          value={body}
        />
      </Form.Field>
      <Form.Field>
        <label>URL to Post</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Post Url"
          name="post_url"
          autoComplete="off"
          value={post_url}
        />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Tags (up to 10, comma seperated)"
          name="tags"
          autoComplete="off"
          value={tags}
        />
      </Form.Field>
      <Form.Field>
        <input
          type="file"
          onChange={handleFileSelect}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default SubmitForm